const router = require('express').Router();
const userController = require('./userController');
const profileController = require('./profileController');


router.use("/users", userController)
router.use("/profile", profileController)

module.exports = router;