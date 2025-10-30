import { useParams } from "react-router-dom"

export default function BookDetails() {
  const { slug } = useParams()

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-2">Détails du livre :</h1>
      <p className="text-xl text-gray-700 capitalize">{slug.replaceAll('-', ' ')}</p>
    </div>
  )
}
