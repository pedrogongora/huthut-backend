const { createServer } = require('@marblejs/http')
const { listener } = require('./http-listener')

const server = createServer({
  port: 1337,
  hostname: 'localhost',
  listener,
})

const main = async () =>
  await (await server)()

main()
