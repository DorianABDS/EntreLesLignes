import jwt from "jsonwebtoken"

// Middleware to verify JWT token
export function verifyToken(req, res, next) {
  // Get token from Authorization header
  const authHeader = req.headers.authorization

  // If no token, block access
  if (!authHeader) {
    return res.status(401).json({ message: "Access denied, no token provided" })
  }

  // Extract token part
  const token = authHeader.split(" ")[1]

  try {
    // Verify and decode token
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    next() // Continue if valid
  } catch (err) {
    // Invalid token case
    res.status(401).json({ message: "Invalid token" })
  }
}
