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

const loginUserController = async (req, res)=>{
    const {username, password} = req.body
    try {
        const user = await userModel({username, password})
        res.status(200).json({user})
    } catch (error) {
        res.status(500).json({msg:"error"})
    }
}


export {
    registerUserController,
    loginUserController
}