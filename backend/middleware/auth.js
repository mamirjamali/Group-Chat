const jwt = require('jsonwebtoken')

const config = process.env

const verifyToken = (req, res, next) => {
    let token = req.body.token || req.query.token || req.headers['authorization']

    if (!token) {
        return res.status(403).send("Please login/register, a token is required")
    }

    try {
        //Replace additional words with "" to get the token itself
        token = token.replace(/Bearer\s+/, "");
        const decode = jwt.verify(token, config.TOKEN_KEY);
        req.user = decode
    } catch (err) {
        return res.status(403).send("Invalid Token")
    }

    return next();
}

module.exports = verifyToken;