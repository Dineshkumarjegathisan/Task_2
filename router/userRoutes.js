const express = require('express')
const router = express.Router();
const UserController = require('../controller/UserController.js')


router.post('/createUser',UserController.createUser)
router.post('/userLogin',UserController.userLogin)



module.exports = router;