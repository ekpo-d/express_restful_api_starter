const express = require("express"),
      passport = require('passport'),
      router = express.Router();

const indexController = require('../controllers/index'),
      userController = require('../controllers/user');

// Index route
router.get('/', indexController.index);

// User routes
router.post("/user/signup", userController.signup);
router.post("/user/login", userController.login);
router.delete("/user/:userId", passport.authenticate('jwt', { session: false }), userController.delete);

// Dummy route to test authentication
router.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => {
  return res.json({status: 'success', data: req.user});
});

module.exports = router;