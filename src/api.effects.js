const { r } = require('@marblejs/http')
const { map } = require('rxjs')

const api$ = r.pipe(
  r.matchPath('/'),
  r.matchType('GET'),
  r.useEffect(req$ => req$.pipe(
    map(() => ({ body: 'hi there...' }))
  ))
)

module.exports = {
  api$,
}
