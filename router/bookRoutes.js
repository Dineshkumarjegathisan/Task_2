const express = require('express')
const router = express.Router();
const BookController = require('../controller/BookController.js')
// const UserController = require('../controller/UserController.js')

router.post('/createBook',BookController.createBook)
router.get('/getAllBooks',BookController.getAllBooks)
router.get('/getBookByName',BookController.getAllBookByName)
router.delete('/deleteBookById/:id',BookController.deleteBookById)
router.put('/updateBookById/:id',BookController.updateBookById)


//Users 
// router.post('/createUser',UserController.createUser)
// router.post('/userLogin',UserController.userLogin)


module.exports = router ;