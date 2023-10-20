import { Router } from "express";
import { login, register } from "./controller.js";

const router = Router()

router.get('/login',login)
router.post('/register',register)

export default router