const express = require('express')
const authControllers = require('../controllers/auth/authControllers')
const Joi = require('joi')
const validator = require('express-joi-validation').createValidator({})
const auth = require('../middleware/auth')
const router = express.Router()

const registerSchema = Joi.object({
    username: Joi.string().min(4).max(16).required(),
    password: Joi.string().min(4).max(16).required(),
    email: Joi.string().email(),
})

const loginSchema = Joi.object({
    password: Joi.string().min(4).max(16).required(),
    email: Joi.string().email().required(),
})

router.post('/register', validator.body(registerSchema), authControllers.controllers.postRegister)
router.post('/login', validator.body(loginSchema), authControllers.controllers.postLogin)

//test root to test token
router.get('/test', auth, (req, res) => {
    res.send("Request Passed")
})


module.exports = router 