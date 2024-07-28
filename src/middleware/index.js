const { bodyParser, handleCors } = require("./common");
const {
  commonRoutes,
  authenticatedRoutes,
} = require("./routes");

const middleware = [bodyParser, handleCors];

module.exports = {
  middleware,
  commonRoutes,
  authenticatedRoutes,
};
