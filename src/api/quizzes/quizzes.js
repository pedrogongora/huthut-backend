const { combineRoutes } = require("@marblejs/http")
const { getQuizes$ } = require("./getQuizzes")

const quizzes$ = combineRoutes('/quizzes', [getQuizes$])

module.exports = {
  quizzes$,
}