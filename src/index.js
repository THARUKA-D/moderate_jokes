const express = require('express');
const {
  applyMiddleware,
  applyRoutes,
  applyAuthenticatedRoutes,
} = require('./utils');
const {
  commonRoutes,
  authenticatedRoutes,
  middleware,
} = require('./middleware');
const { port } = require('./utils/environment');

const PORT = port;
const app = express();

applyMiddleware(middleware, app);
applyRoutes(commonRoutes, app);
applyAuthenticatedRoutes(authenticatedRoutes, app);

app.listen(PORT, () => {
  console.log(`Server is running on Port:${PORT}`);
});
