import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Catalog from "./pages/Catalog"
import BookDetails from "./pages/BookDetails"
import UserLayout from "./pages/user/UserLayout"
import Library from "./pages/user/Library"
import Wishlist from "./pages/user/Wishlist"
import Favorite from "./pages/user/Favorite"

export default function App() {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />

      <Routes>
        {/* Main pages */}
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:slug" element={<BookDetails />} />

        {/* User section */}
        <Route path="/user" element={<UserLayout />}>
          <Route path="library" element={<Library />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="favorite" element={<Favorite />} />
        </Route>
      </Routes>
    </Router>
  )
}
