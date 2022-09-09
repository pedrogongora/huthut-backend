const { httpListener } = require('@marblejs/http')
const { bodyParser$ } = require("@marblejs/middleware-body")
const { pipe } = require('ramda')
const { map } = require('rxjs')
const { api$ } = require("./api/api.effects")

const middlewares = [
  bodyParser$(),
]

const effects = [
  api$,
]

const listener = httpListener({
  middlewares,
  effects,
  error$: pipe(
    map(({ request, error }) => {
      console.error('ERROR')
      console.error(error)
      return {
        request,
        status: 500,
        body: {  }
      }
    })
  ),
})

module.exports = {
  listener,
}
