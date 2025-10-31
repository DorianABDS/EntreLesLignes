import { useParams } from "react-router-dom"

// BookDetails component to show details of a selected book
export default function BookDetails() {
  // Get book slug from URL parameters
  const { slug } = useParams()

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {/* Page title */}
      <h1 className="text-3xl font-bold mb-2">Détails du livre :</h1>

      {/* Display book title from slug */}
      <p className="text-xl text-gray-700 capitalize">
        {slug.replaceAll('-', ' ')}
      </p>
    </div>
  )
}
