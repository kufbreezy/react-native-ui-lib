import {SharedValue} from 'react-native-reanimated';

export enum FirstDayOfWeek {
  Sunday = 0,
  Monday = 1,
  Saturday = 6
}

export interface CalendarContextProps {
  firstDayOfWeek: FirstDayOfWeek;
  date: SharedValue<number>;
  setDate: (date: number) => void;
}

export interface DayProps {
  date: number | null;
}

export interface WeekProps {
  weekNumber: number;
  year: number;
}

export interface MonthProps {
  month: number;
  year: number;
}

export interface CalendarItemProps {
  weekNumber?: number;
  month?: number;
  year: number;
}

export interface HeaderProps {
  month?: number;
  year: number;
}

export interface CalendarProps {
  initialDate?: number;
  firstDayOfWeek?: `${FirstDayOfWeek}` & FirstDayOfWeek;
}
