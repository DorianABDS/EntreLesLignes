export const getBooks = (req, res) => {
  const books = [
    { id: 1, title: "The Great Gatsby" },
    { id: 2, title: "To Kill a Mockingbird" },
  ]
  res.json(books)
}
