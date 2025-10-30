import express from "express"
import { verifyToken } from "../middlewares/auth.js"

const router = express.Router()

router.get("/library", verifyToken, (req, res) => {
  res.json({ message: `Welcome user ${req.user.email} to your library` })
})

export default router
