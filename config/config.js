const dotenv = require('dotenv'),
      path = require('path'),
      rootPath = path.normalize(__dirname + '/../../');

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.load({path: __dirname + '/../env/.env'});

const env = process.env.NODE_ENV,
      port = process.env.PORT,
      config = {
        development: {
          rootPath: rootPath,
          db: process.env.MONGODB_TEST_URI,
          port: port
        },
        production: {
          rootPath: rootPath,
          db: process.env.MONGODB_URI,
          port: port
        }
      };


module.exports = config[env];