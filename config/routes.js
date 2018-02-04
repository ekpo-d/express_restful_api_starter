const index = require('../routes/index'),
      user = require('../routes/user');

module.exports = (app) => {
  app.use('/', index);
  app.use('/api/1.0', index);
  app.use('/api/1.0/user', user);
};
