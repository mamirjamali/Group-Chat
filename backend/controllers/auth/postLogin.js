const User = require('../../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const postLogin = async (req, res) => {
    
    try{
        const {email, password } = req.body
        
        //Check if the email and password are valid
        const user = await User.findOne({ email: email.toLowerCase() })

        if (user && await bcrypt.compare(password, user.password)) {
            //Send Token
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

            return res.status(200).json({
                userDetails:
                 {
                    username: user.username,
                    email: user.email,
                    token
                 },
            })
        } 
           
        return res.status(400).send("Invalid Credentials")

        
    }catch (err) {
        return res.status(500).send("Please Try Again")
    }
}

module.exports = postLogin