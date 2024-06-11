import bcrypt from 'bcrypt';
import userModel from '../models/users.js';
import { createToken } from "../middleware/auth.js"

const registerUserController = async (req, res) => {
    const { username, password } = req.body
    try {
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)
        const user = await userModel({ username, password: hashPassword })
        const data = await user.save()
        res.status(201).json(data)
    } catch (error) {
        res.status(500).json({ msg: "Error creating User" })
    }
}

const loginUserController = async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await userModel({ username, password })
        const data = await userModel.findOne({ username })
        const passwordMatch = await bcrypt.compare(password, data.password)

        if (!passwordMatch) {
            return res.status(400).json({ msg: "Invalid credentials" })
        }

        const token = createToken({ id: data._id, username })
        
        res.status(200).json({ user, token })
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}                  

export {
    registerUserController,
    loginUserController
}