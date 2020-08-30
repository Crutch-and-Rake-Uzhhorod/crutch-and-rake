const { validationResult } = require('express-validator')
const User = require('../models/User')

module.exports.create = (req, res) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { email, name } = req.body

    const user = new User(email, name)
    user.save()

    return res.status(201).json({ message: 'User successfully created!', user })
}

module.exports.getAll = (req, res) => {
    const users = User.getAll()
    return res.status(200).json(users)
}

module.exports.getOne = (req, res) => {
    const { id } = req.params
    const user = User.findById(id)

    if(!user) {
        return res.status(400).json({ message: `User with id ${id} not found!` })
    }

    return res.status(200).json(user)
}