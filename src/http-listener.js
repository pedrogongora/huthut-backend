const { httpListener } = require('@marblejs/http')
const { bodyParser$ } = require("@marblejs/middleware-body")
const { api$ } = require("./api/api.effects")
const { error$ } = require('./error')

const middlewares = [
  bodyParser$(),
]

const effects = [
  api$,
]

const listener = httpListener({
  middlewares,
  effects,
  error$,
})

module.exports = {
  listener,
}
