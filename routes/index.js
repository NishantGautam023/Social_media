const express = require('express');
const router = express.Router();

// access the home_contoller.js in the controller folder
const homeController = require('../controllers/home_controller')


module.exports = router;
router.get('/',homeController.home)
 
//route: handling the user requests
// whenever the request/path is for the users we can just reuire our neigbour which is users
router.use('/users', require('./users'))