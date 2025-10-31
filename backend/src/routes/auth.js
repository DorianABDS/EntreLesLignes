import express from "express"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const router = express.Router()

// Mock user list for demo
const users = [
  { id: 1, email: "test@test.com", password: "$2b$10$..." }
]

// Login route
router.post("/login", async (req, res) => {
  // Get email and password from body
  const { email, password } = req.body

  // Find user by email
  const user = users.find(user => user.email === email)
  if (!user) return res.status(401).json({ message: "User not found" })

  // Compare password with hashed one
  const valid = await bcrypt.compare(password, user.password)
  if (!valid) return res.status(401).json({ message: "Invalid password" })

  // Create JWT token (1h expiration)
  const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  })

  // Send token to client
  res.json({ token })
})

export default router
