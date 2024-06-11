import bcrypt from 'bcrypt';
import userModel from '../models/users.js';
import { v4 as uuidv4 } from "uuid";



const registerUserController = async (req, res) => {

    
    const {password, ...otherDataUser} = req.body
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUserData = {
    
        password: hashedPassword,
        ...otherDataUser
    }
    const newUser = userModel(newUserData)
    const user = await newUser.save()

    res.status(201).json(user)
}


export {
    registerUserController
}