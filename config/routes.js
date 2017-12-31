const routes = require('../routes/index');

module.exports = (app) => {
  app.use('/api/1.0', routes);
};
