const applyMiddleware = (middleware, router) => {
  for (const addMiddleware of middleware) {
    addMiddleware(router);
  }
};
const applyRoutes = (routes, router) => {
  for (const route of routes) {
    const { method, path, handler } = route;
    router[method](path, handler);
  }
};

const applyAuthenticatedRoutes = (routes, router) => {
  for (const route of routes) {
    const { method, path, handler } = route;
    router[method](path, authenticate, handler);
  }
};

const authenticate = (req, res, next) => {
  const header = req.headers['authorization'];

  if (typeof header !== 'undefined') {
    const bearer = header.split(' ');
    const token = bearer[1];

    req.token = token;
    next();
  } else {
    res.sendStatus(403);
  }
};

module.exports = {
  applyMiddleware,
  applyRoutes,
  applyAuthenticatedRoutes,
};
