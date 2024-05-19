import { Router } from 'express'
import {registerNewUser, loginUser,downloadExcel} from '../controllers/api_controllers.js'


const router = Router()

router.post("/registerNewUser",registerNewUser);
router.post("/loginUser",loginUser);
router.get("/downloadExcel",downloadExcel)


export default router