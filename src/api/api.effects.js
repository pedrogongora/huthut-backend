const { r, combineRoutes } = require('@marblejs/http')
const { map } = require('rxjs')
const { quizzes$ } = require('./quizzes/quizzes')

const root$ = r.pipe(
  r.matchPath('/'),
  r.matchType('GET'),
  r.useEffect(req$ => req$.pipe(
    map(() => ({ body: 'hi there...' }))
  ))
)

const api$ = combineRoutes(
  '/',
  [root$, quizzes$]
)

module.exports = {
  api$,
}
