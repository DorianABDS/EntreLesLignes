import { Link, useLocation } from "react-router-dom"

export default function Sidebar() {
  const location = useLocation()

  const isActive = (path) =>
    location.pathname === path ? "text-white bg-blue-600" : "text-blue-600 hover:bg-blue-100"

  return (
    <aside className="w-64 bg-gray-50 border-r shadow flex flex-col p-6">
      <h2 className="text-xl font-semibold mb-8 text-gray-700">Utilisateur</h2>

      <nav className="flex flex-col gap-3">
        <Link to="/user/library" className={`px-4 py-2 rounded ${isActive("/user/library")}`}>
          Bibliothèque
        </Link>
        <Link to="/user/wishlist" className={`px-4 py-2 rounded ${isActive("/user/wishlist")}`}>
          Liste de souhaits
        </Link>
        <Link to="/user/favorite" className={`px-4 py-2 rounded ${isActive("/user/favorite")}`}>
          Favoris
        </Link>
      </nav>
    </aside>
  )
}
