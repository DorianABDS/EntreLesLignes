import express from "express"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const router = express.Router()

// Mock user
const users = [
  { id: 1, email: "test@test.com", password: "$2b$10$..." }
]

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body

  const user = users.find(user => user.email === email)
  if (!user) return res.status(401).json({ message: "User not found" })

  const valid = await bcrypt.compare(password, user.password)
  if (!valid) return res.status(401).json({ message: "Invalid password" })

  const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  })

  res.json({ token })
})

export default router
