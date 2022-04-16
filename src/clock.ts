export interface Time {
  second: number
  minute: number
  hour: number
}


export function stopWatch(cb: () => void, second: number) {
  const timer = setInterval(() => {
    cb();
    if (second === 0) clearInterval(timer)
  }, 1000)
}

export function timeWatch(cb: (time: Time) => void) {
  let time = 0;

  const timer = setInterval(() => {
    time += 1000;
    const second = Math.floor(time / 1000) % 60;
    const minute = Math.floor(time / (1000 * 60) % 60);
    const hour = Math.floor(time / (1000 * 60 * 24) % 24);
    cb({second, minute, hour});
  }, 1000);


  function timerWrapper() {
  }

  timerWrapper.stop = function () {
    clearInterval(timer)
  }

  return timerWrapper;
}



