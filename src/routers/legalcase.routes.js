import { Router } from "express";
import { createLegalCaseController, deleteLegalCaseController, getAllLegalCaseController, getLegalCaseByIDController, updateLegalCaseController } from "../controllers/legalCase_controller.js";
import { verifyToken } from "../middleware/auth.js";

const router = Router();

router.post("/legalcases", verifyToken, createLegalCaseController);
router.get("/legalcases", getAllLegalCaseController);
router.put("/legalcases/:id", verifyToken, updateLegalCaseController);
router.delete("/legalcases/:id", verifyToken, deleteLegalCaseController);
router.get("/legalcases/:id", getLegalCaseByIDController);

export default router;
