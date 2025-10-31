import express from "express"
import { getBooks } from "../controllers/booksController.js"

const router = express.Router()

// Route to get all books
router.get("/", getBooks)

export default router
