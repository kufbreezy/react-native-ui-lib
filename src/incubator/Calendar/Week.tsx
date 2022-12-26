import _ from 'lodash';
import React, {useMemo} from 'react';
import View from '../../components/view';
import Text from '../../components/text';
import Day from './Day';
import {WeekProps} from './types';
import {getDaysOfWeekNumber} from './helpers/DateUtils';

const Week = (props: WeekProps) => {
  const {weekNumber, year} = props;

  const days = useMemo(() => {
    return getDaysOfWeekNumber(year, weekNumber);
  }, [year, weekNumber]);

  return (
    <View row>
      <Text>{weekNumber}</Text>
      {_.map(days, day => (
        <Day date={day}/>
      ))}
    </View>
  );
};

export default Week;
