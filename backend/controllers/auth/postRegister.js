const User = require('../../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const postRegister = async (req, res) => {
    try{
        const { username, email, password } = req.body
        
        //Check if the email exists
        const userExist = await User.exists({email: email.toLowerCase()})

        if (userExist) {
            return res.status(409).send("User already exists")
        }

        //Hash the password
        const encryptedPassword = await bcrypt.hash(password, 10)

        //Create user
        const user = await User.create({
            email: email.toLowerCase(),
            password: encryptedPassword,
            username
        })

        //Create JWT
        const token = jwt.sign(
            {
                userId: user._id,
                email: user.email
            },
            process.env.TOKEN_KEY,
            {
                expiresIn: "7d"
            }
        )

        res.status(201).json({
            userDetail:
             {
                username: user.username,
                email: user.email,
                token
             },
        })

    }catch (err) {
        return res.status(500).send("Please Try Again")
    }
}

module.exports = postRegister