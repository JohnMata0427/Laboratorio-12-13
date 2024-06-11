import {Router} from 'express';
import { registerUserController } from '../controllers/user_controller.js';

const router = Router()

router.post('/users/register', registerUserController)


export default router;