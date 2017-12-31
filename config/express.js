let express = require('express'),
    morgan = require('morgan'),
    cookieParser = require('cookie-parser'),
    passport = require('passport'),
    cors = require('cors'),
    bodyParser = require('body-parser');

module.exports = (app, config) => {
  app.set('port', config.port);
  app.use(cors());
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(morgan('combined'));
  app.use(express.static(config.rootPath  + '/public'));
};