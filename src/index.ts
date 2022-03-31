import * as date from "./date"
import {
  clock
} from "./clock"


export interface JsDate {
  getKoreanTime: (divider?: date.Divider) => string
  getKoreanYear: () => number
  getKoreanMonth: () => number
  getKoreanDate: () => number
  getKoreanDay: () => string
}

const jsDate: JsDate = {
  getKoreanTime: date.getKoreanTime,
  getKoreanYear: date.getKoreanYear,
  getKoreanMonth: date.getKoreanMonth,
  getKoreanDate: date.getKoreanDate,
  getKoreanDay: date.getKoreanDay,
}

export default jsDate
