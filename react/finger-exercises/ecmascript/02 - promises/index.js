// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(time) {
  const refTime = Date.now();
  return new Promise((resolve) => {
    setTimeout(() => resolve(Date.now() - refTime)
    , time)
  })
}

export function asyncDelay() {

}
