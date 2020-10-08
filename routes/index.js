const express = require('express');
const router = express.Router();

// access the home_contoller.js in the controller folder
const homeController = require('../controllers/home_controller')


module.exports = router;
router.get('/',homeController.home)
