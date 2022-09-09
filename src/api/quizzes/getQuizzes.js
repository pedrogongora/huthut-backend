const { r } = require('@marblejs/http')
const { concatMap, map } = require('rxjs')
const { debug } = require('../../util/debug')
const { find$ } = require('../../util/mongo')

// quizzesQuery$ :: () -> Observable [Quiz]
const quizzesQuery$ = () => find$({}, 'quizzes')

// getQuizes$ :: Observable Request -> Observable [Quiz]
const getQuizes$ = r.pipe(
  r.matchPath('/'),
  r.matchType('GET'),
  r.useEffect(req$ => req$.pipe(
    concatMap(quizzesQuery$),
    // debug('after concatMap'),
    map((q => ({ body: q })))
  ))
)

module.exports = {
  getQuizes$,
}