import express from 'express'
import { register, login } from '../controllers/auth.js'
const router = express.Router()

// url prefix: /auth
router.post('/register', register)
router.post('/login', login)

export default router