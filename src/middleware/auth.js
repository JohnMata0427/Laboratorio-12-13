import jwt from 'jsonwebtoken'

const createToken = (user) => {
    return jwt.sign(user, process.env.SECRET_KEY, {expiresIn: '1h'})
}

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(401).json({msg: "Token isn't provided"})
    }
    const token = authHeader.split(' ')[1]

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) =>{
        if(err){
            return res.status(403).json({ msg: 'Failed to authenticate token' })
        }
        req.user = decoded
        next()
    })
}

export {
    createToken,
    verifyToken
}

