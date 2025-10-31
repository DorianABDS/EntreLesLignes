import { Link } from "react-router-dom"

// Catalog component displaying a list of books
export default function Catalog() {
  // Example book list
  const livres = [
    { slug: "le-petit-prince", titre: "Le Petit Prince" },
    { slug: "harry-potter", titre: "Harry Potter à l'école des sorciers" },
    { slug: "seigneur-des-anneaux", titre: "Le Seigneur des Anneaux" },
  ]

  return (
    <div className="p-8">
      {/* Page title */}
      <h1 className="text-3xl font-bold mb-6">Catalogue</h1>

      {/* List of book links */}
      <ul className="space-y-3">
        {livres.map((livre) => (
          <li key={livre.slug}>
            <Link
              to={`/catalogue/${livre.slug}`}
              className="text-blue-600 hover:underline text-lg"
            >
              {livre.titre}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
