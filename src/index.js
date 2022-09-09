const { createServer } = require('@marblejs/http')
const config = require('config')
const { listener } = require('./http-listener')

const { port, hostname } = config.get('api')

const server = createServer({
  port,
  hostname,
  listener,
})

const main = async () =>
  await (await server)()

main()
