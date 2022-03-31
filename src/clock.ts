export class clock {

  static create() {
    return new clock();
  }

  stopWatch(cb: () => void, time: number) {
    const timer = setInterval(() => {
      cb();
      if (time === 0) clearInterval(timer)
    }, 1000)
  }

  timeWatch() {
    let time = 0;
    const timer = setInterval(() => {

      time++;
    }, 1)
  }
}
