import * as date from "./date"
import {
  Time,
  stopWatch,
  timeWatch,
} from "./clock"
import {addDate, addMonth, addYear, minusDate, minusMonth, minusYear} from "./date";


export interface JsDay {
  getKoreanTime: (divider?: date.Divider) => string
  getKoreanYear: (dateObject?: Date) => number
  getKoreanMonth: (dateObject?: Date) => number
  getKoreanDate: (dateObject?: Date) => number
  getKoreanDay: (dateObject?: Date) => string
  stopWatch: (cb: () => void, second: number) => void
  timeWatch: (cb: (time: Time) => void) => {
    (): void;
    stop(): void;
  }
  addDate: (date: number) => void
  minusDate: (date: number) => void
  addMonth: (month: number) => void
  minusMonth: (month: number) => void
  addYear: (year: number) => void
  minusYear: (year: number) => void
}

const jsDay: JsDay = {
  getKoreanTime: date.getKoreanTime,
  getKoreanYear: date.getKoreanYear,
  getKoreanMonth: date.getKoreanMonth,
  getKoreanDate: date.getKoreanDate,
  getKoreanDay: date.getKoreanDay,
  stopWatch: stopWatch,
  timeWatch: timeWatch,
  addDate: addDate,
  minusDate: minusDate,
  addMonth: addMonth,
  minusMonth: minusMonth,
  addYear: addYear,
  minusYear: minusYear
}

export default jsDay


