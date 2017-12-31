/*eslint-disable no-console */

const mongoose = require('mongoose'),
      chalk = require('chalk');

module.exports = (config) => {
  mongoose.connect(config.db);
  const db = mongoose.connection;

  db.on('error', () => {
    console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
    process.exit();
  });
  db.once('connected', () => {
    console.log('%s MongoDB connection established!', chalk.green('✓'));
  });
};
