const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users_controllers');

//map a route to this user's controller using the profile aciton

router.get('/profile', usersController.profile);



module.exports = router;