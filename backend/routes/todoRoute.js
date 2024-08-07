const express = require('express')
const router = express.Router()

const todoController = require('../controller/todoController')

router.post('/create', todoController.createTodoList)
router.get('/data', todoController.viewTodoList)

module.exports = router