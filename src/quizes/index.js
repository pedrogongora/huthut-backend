const { combineRoutes } = require("@marblejs/http");
const { getQuizes$ } = require("./getQuizes");
const { postQuiz$ } = require("./postQuiz");

const quizes = combineRoutes('/quizes', [getQuizes$, postQuiz$])