import * as date from "./date"
import {
  Time,
  stopWatch,
  timeWatch,
} from "./clock"


export interface JsDay {
  getKoreanTime: (divider?: date.Divider) => string
  getKoreanYear: (dateObject?: Date) => number
  getKoreanMonth: (dateObject?: Date) => number
  getKoreanDate: (dateObject?: Date) => number
  getKoreanDay: (dateObject?: Date) => string
  stopWatch: (cb: () => void, time: number) => void
  timeWatch: (cb: (time: Time) => void) => {
    (): void;
    stop(): void;
  }
}

const jsDay: JsDay = {
  getKoreanTime: date.getKoreanTime,
  getKoreanYear: date.getKoreanYear,
  getKoreanMonth: date.getKoreanMonth,
  getKoreanDate: date.getKoreanDate,
  getKoreanDay: date.getKoreanDay,
  stopWatch: stopWatch,
  timeWatch: timeWatch
}

export default jsDay
