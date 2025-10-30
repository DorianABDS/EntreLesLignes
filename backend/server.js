import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import booksRouter from "./src/routes/books.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middlewares
app.use(cors())
app.use(express.json())

// Routes
app.use("/api/books", booksRouter)

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running")
})

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
