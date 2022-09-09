const { tap } = require('rxjs')

const debug = msg => tap(x => {
  console.log(msg, x)
  return x
})

module.exports = {
  debug,
}
