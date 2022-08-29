export function initErrorHandler (router) {
  router.onError(error => {
    // eslint-disable-next-line no-console
    console.log(error.message)
    router.push({ name: 'error-page', params: { error: error } })
  })
}
