function getKstTime(): Date {
  const date = new Date();
  const uct = date.getTime() + (date.getTimezoneOffset() * 60 * 1000);
  const kst = 9 * 60 * 60 * 1000;
  return new Date(kst + uct);
}

export type Divider = "." | "/" | "-" | undefined

export function getKoreanTime(divider: Divider): string {
  const now = getKstTime();
  const year = getKoreanYear(now);
  const month = getKoreanMonth(now);
  const date = getKoreanDate(now);

  if (!divider) {
    return `${year}년 ${month}월 ${date}일`
  }
  return `${year}${divider}${month}${divider}${date}`
}


export function getKoreanYear(dateObject: Date): number {
  return dateObject.getFullYear();
}

export function getKoreanMonth(dateObject: Date): number {
  const month = dateObject.getMonth();
  return month < 10 ? parseInt(`0${month + 1}`, 10) : month + 1;
}

export function getKoreanDay(dateObject: Date): string {
  const dayIdx = dateObject.getDay();

  let koreanDay: string = "일"
  switch (dayIdx) {
    case 0:
      return koreanDay = "일"
    case 1:
      return koreanDay = "월"
    case 2:
      return koreanDay = "화"
    case 3:
      return koreanDay = "수"
    case 4:
      return koreanDay = "목"
    case 5:
      return koreanDay = "금"
    case 6:
      return koreanDay = "토"
  }
  return koreanDay
}

export function getKoreanDate(dateObject: Date): number {
  const date = dateObject.getDate();
  return date < 10 ? parseInt(`0${date}`) : date;
}

export function dayAfter(date: Date) {
  const now = getKstTime();

}

export function dayBefore(date: Date) {

}
