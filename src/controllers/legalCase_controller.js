import legalCaseModel from "../models/legalCase.js"

const createLegalCaseController = async (req, res) => {
    try {
        const legalCase = legalCaseModel(req.body)
        const data = await legalCase.save()
        res.status(201).json(data)
    }catch(error){
        res.status(500).json({msg:"Data doesn't exist"})
    }
}

const getAllLegalCaseController = async ( req , res ) => {
    try{
        const data = await legalCaseModel.find()
        res.status(200).json(data)
    }catch(error){
        res.status(500).json({msg:"Data doesn't exist"})
    }
}

const getLegalCaseByIDController = async (req, res) => {
    try{
        const {id} = req.params
        const data = await legalCaseModel.findById(id)
        res.status(200).json(data)
    }catch(error){
        res.status(500).json({msg:"Data doesn't exist"})
    }
}

const updateLegalCaseController = async (req, res) =>{
    try{
        const {id} = req.params
        const {...data} = req.body
        await legalCaseModel.updateOne(
            {_id:id},
            {$set: data},
        )
        res.status(200).json(data)
    }catch(error){
        res.status(500).json({msg:"Data doesn't exist"})
    }
}

const deleteLegalCaseController = async (req, res) => {
    try{
        const {id} = req.params
        await legalCaseModel.deleteOne({_id:id})
        res.status(200).json({msg:"Deleted Successfully"})
    }catch(error){
        res.status(500).json({msg:"Data doesn't exist"})
    }
}

export {
    createLegalCaseController,
    getAllLegalCaseController,
    updateLegalCaseController,
    deleteLegalCaseController,
    getLegalCaseByIDController
}