// utility throttle function
const throttle = (fn: (...args: any[]) => any, delay: number) => {
  let lastCalled = 0
  return (...args: any) => {
    const now = new Date().getTime()
    if (now - lastCalled < delay) {
      return
    }
    lastCalled = now
    return fn(...args)
  }
}

// sends a request to '/api/log-page-view' to log the page view
const requestPageView = async () => {
  try {
    await fetch('/api/pageview', {
      method: 'POST'
    })
  } catch (err) {
    console.error(err)
  }
}

// throttle the request to counter React rerendering behavior
export const logPageView = throttle(requestPageView, 500)
