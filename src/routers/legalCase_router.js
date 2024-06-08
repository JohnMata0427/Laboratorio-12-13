import { Router } from "express";
import { createLegalCaseController , deleteLegalCaseController, getAllLegalCaseController, getLegalCaseByIDController, updateLegalCaseController } from "../controllers/legalCase_controller.js";

const router = Router()

router.post('/legalcases', createLegalCaseController)
router.get('/legalcases', getAllLegalCaseController)
router.put('/legalcases/:id', updateLegalCaseController)
router.delete('/legalcases/:id', deleteLegalCaseController)
router.get('/legalcases/:id',getLegalCaseByIDController)

export default router