const { Router } = require('express')
const { body } = require('express-validator')
const userController = require('../controllers/userController')

const userRouter = new Router()

userRouter.post('/', [
    body('email').exists().isEmail(),
    body('name').exists().trim().isLength({ min: 1, max: 25 }).isAlpha()
] , userController.create)

userRouter.get('/', userController.getAll)
userRouter.get('/:id', userController.getOne)

module.exports = userRouter