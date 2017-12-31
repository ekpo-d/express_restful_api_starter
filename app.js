/*eslint-disable no-console */

const express = require('express'),
      chalk = require('chalk'),
      config = require('./config/config'),
      app = express();

require('./config/express')(app, config);
require('./config/db')(config);
require('./config/passport')();
require('./config/routes')(app);

app.listen(app.get('port'), () => {
    console.log('%s Express server listening on port %d in %s mode.', chalk.green('✓'), app.get('port'), app.get('env'));
});

module.exports = app;