const { httpListener } = require('@marblejs/http')
const { bodyParser$ } = require('@marblejs/middleware-body')
const { cors$ } = require('@marblejs/middleware-cors')
const { api$ } = require('./api/api.effects')
const { error$ } = require('./error')

const middlewares = [
  cors$({ origin: '*', allowHeaders: '*', methods: ['GET', 'POST'] }),
  bodyParser$(),
]

const effects = [api$]

const listener = httpListener({
  middlewares,
  effects,
  error$,
})

module.exports = {
  listener,
}
