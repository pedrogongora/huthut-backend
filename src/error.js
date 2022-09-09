const { pipe } = require('ramda')
const { map } = require('rxjs')

const error$ = pipe(
  map(({ request, error }) => {
    console.error('ERROR')
    console.error(error)
    return {
      request,
      status: 500,
      body: {  }
    }
  })
)

module.exports = {
  error$,
}
