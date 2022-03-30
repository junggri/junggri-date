import getKstTime from "./getKstTime";

type DividerType = "/" | "." | "-"

export function getTime(divider: DividerType = ".") {
  const kstTime = getKstTime();

  const year = kstTime.getFullYear();
  const month = kstTime.getMonth();
  const day = kstTime.getDay();

  console.log(year, month, day)
}
