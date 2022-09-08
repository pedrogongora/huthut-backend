const { httpListener } = require('@marblejs/http')
const { bodyParser$ } = require("@marblejs/middleware-body");
const { api$ } = require("./api.effects");

const middlewares = [
  bodyParser$(),
]

const effects = [
  api$,
]

const listener = httpListener({
  middlewares,
  effects,
})

module.exports = {
  listener,
}
