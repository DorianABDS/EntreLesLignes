import { Link } from "react-router-dom"

// Navbar component with links to main pages
export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-100 flex gap-6 justify-center shadow">
      {/* Link to home page */}
      <Link to="/" className="text-blue-600 font-medium hover:underline">
        Accueil
      </Link>

      {/* Link to catalog page */}
      <Link to="/catalog" className="text-blue-600 font-medium hover:underline">
        Catalogue
      </Link>

      {/* Link to user library page */}
      <Link to="/user/library" className="text-blue-600 font-medium hover:underline">
        Utilisateur
      </Link>
    </nav>
  )
}
