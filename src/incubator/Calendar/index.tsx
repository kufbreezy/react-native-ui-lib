import findIndex from 'lodash/findIndex';
import React, {PropsWithChildren, useCallback, useMemo, useRef} from 'react';
import {useSharedValue, useAnimatedReaction, runOnJS} from 'react-native-reanimated';
import {FlashList} from '@shopify/flash-list';
import {Constants} from '../../commons/new';
import {generateMonthItems} from './helpers/CalendarProcessor';
import {addHeaders} from './helpers/DataProcessor';
import {isSameMonth} from './helpers/DateUtils';
import {CalendarContextProps, CalendarProps, FirstDayOfWeek, UpdateSource} from './types';
import CalendarContext from './CalendarContext';
import CalendarItem from './CalendarItem';
import Agenda from './Agenda';

// TODO: Move this logic elsewhere to pre-generate on install?
const MONTH_ITEMS = generateMonthItems(5);
const getIndex = (date: number) => {
  return findIndex(MONTH_ITEMS, item => isSameMonth(item, date));
};

function Calendar(props: PropsWithChildren<CalendarProps>) {
  const {data, children, initialDate = Date.now(), firstDayOfWeek = FirstDayOfWeek.MONDAY} = props;

  const flashListRef = useRef();
  const calendarWidth = Constants.screenWidth;
  const current = useSharedValue<number>(initialDate);
  const initialMonthIndex = useRef(getIndex(current.value));
  const lastUpdateSource = useSharedValue<UpdateSource>(UpdateSource.INIT);
  const processedData = useMemo(() => addHeaders(data), [data]);
  const scrolledByUser = useSharedValue<boolean>(false);

  const setDate = useCallback<CalendarContextProps['setDate']>((date: number, updateSource: UpdateSource) => {
    current.value = date;
    lastUpdateSource.value = updateSource;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const contextValue = useMemo<CalendarContextProps>(() => {
    return {
      data: processedData,
      firstDayOfWeek,
      selectedDate: current,
      setDate,
      showWeeksNumbers: true,
      updateSource: lastUpdateSource
    };
  }, []);

  const scrollToIndex = useCallback((date: number) => {
    scrolledByUser.value = false;
    // @ts-expect-error
    flashListRef.current?.scrollToIndex({index: getIndex(date), animated: false});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useAnimatedReaction(() => {
    return current.value;
  },
  (selected, previous) => {
    if (lastUpdateSource.value !== UpdateSource.MONTH_SCROLL) {
      if (previous && !isSameMonth(selected, previous)) {
        runOnJS(scrollToIndex)(selected);
      }
    }
  }, []);

  const onViewableItemsChanged = useCallback(({viewableItems}) => {
    if (scrolledByUser.value) {
      const item = viewableItems?.[0]?.item;
      if (item && !isSameMonth(item, current.value)) {
        // TODO: Move to Date.UTC to a util - getNormalizedDate
        const newDate = new Date(Date.UTC(item.year, item.month, 1)).getTime();
        setDate(newDate, UpdateSource.MONTH_SCROLL);
      }
    }
  }, []);

  const onMomentumScrollBegin = useCallback(() => {
    scrolledByUser.value = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onScrollBeginDrag = useCallback(() => {
    scrolledByUser.value = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderCalendarItem = useCallback(({item}) => {
    return <CalendarItem year={item.year} month={item.month}/>;
  }, []);

  return (
    <CalendarContext.Provider value={contextValue}>
      <FlashList
        // @ts-expect-error
        ref={flashListRef}
        estimatedItemSize={calendarWidth}
        data={MONTH_ITEMS}
        initialScrollIndex={initialMonthIndex.current}
        estimatedFirstItemOffset={0}
        renderItem={renderCalendarItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        // TODO: Consider moving this shared logic with Agenda to a hook
        onViewableItemsChanged={onViewableItemsChanged}
        onMomentumScrollBegin={onMomentumScrollBegin}
        onScrollBeginDrag={onScrollBeginDrag}
      />
      {children}
    </CalendarContext.Provider>
  );
}

Calendar.Agenda = Agenda;

export default Calendar;
