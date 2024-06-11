import jwt from 'jsonwebtoken'

const createToken = (userInfo) =>{
    //                 1           2              3
    return jwt.sign(userInfo, 'secret_key', {expiresIn: '1h'})
}

const verifyToken = (req, res, next) =>{
    // Accede a las cabeceras 
    const authHeader = req.headers.authorization

    // Validar si se esta enviando el token
    if (!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(401).json({msg: 'Token no proporcionado'})
    }
    // Dividir el token "Beader 3532753653"
    // token = ['Beader', '3532753653']
    const token = authHeader.split(' ')[1]

    // Verificar el token
    jwt.verify(token, 'secret_key', (err, decoded) =>{
        // Verificacion
        if(err){
            return res.status(403).json({msg:'Fallo al auntenticar al token'})
        }
        // Usuario decodificado
        req.user = decoded
        next()
    })
}

export {
    createToken,
    verifyToken
}

