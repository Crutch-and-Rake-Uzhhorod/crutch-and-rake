const { validationResult } = require('express-validator')
const User = require('../models/User')

module.exports.create = (req, res) => {

    return res.status(201).json({ message: 'User successfully created!' })
}

module.exports.getAll = (req, res) => {

    return res.status(200).json({ message: 'Get All' })
}

module.exports.getOne = (req, res) => {

    return res.status(200).json({ message: 'Get One' })
}