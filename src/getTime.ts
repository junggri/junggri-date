import {getKstTime} from "./getKstTime";

type DividerType = "/" | "." | "-"

export function getTime(divider: DividerType = "."): string {
  const kstTime = getKstTime();

  const year = kstTime.getFullYear();
  const month = kstTime.getMonth();
  const day = kstTime.getDay();

  return arrangeDate({year, month, day}, divider)
}

function arrangeDate(date: { year: number, month: number, day: number }, divider: DividerType) {
  return `${date.year}${divider}${date.month}${divider}${date.day}`
}


