const express = require("express"),
      passport = require('passport'),
      router = express.Router();

const userController = require('../controllers/user');

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.delete("/:userId", passport.authenticate('jwt', { session: false }), userController.delete);

// Dummy route to test authentication
router.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => {
  return res.json({status: 'success', data: req.user});
});

module.exports = router;