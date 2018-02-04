const express = require("express"),
      router = express.Router();

const indexController = require('../controllers/index');

// Index route
router.get('/', indexController.index);

module.exports = router;