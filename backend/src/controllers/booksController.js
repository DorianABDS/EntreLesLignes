// Controller to handle GET request for books
export const getBooks = (req, res) => {
  // Example static list of books
  const books = [
    { id: 1, title: "The Great Gatsby" },
    { id: 2, title: "To Kill a Mockingbird" },
  ]

  // Send books as JSON response
  res.json(books)
}
