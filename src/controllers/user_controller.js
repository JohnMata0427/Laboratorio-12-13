import bcrypt from 'bcrypt';
import userModel from '../models/users.js';
import { v4 as uuidv4 } from "uuid";
import { createToken } from "../middleware/auth.js"

const registerUserController = async (req, res) => {
    const { password, ...otherDataUser } = req.body
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUserData = {
        id: uuidv4(),
        password: hashedPassword,
        ...otherDataUser
    }
    const newUser = userModel(newUserData)
    const user = await newUser.save()
    res.status(201).json(user)
}

const loginUserController = async (req, res) => {
    const { username, password } = req.body
    try {
        const user = await userModel({ username, password })
        const token = createToken(user)
        res.status(200).json({ user, token })
    } catch (error) {
        res.status(500).json({ msg: "error" })
    }
}                  

export {
    registerUserController,
    loginUserController
}