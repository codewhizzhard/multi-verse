import { useContext } from "react"
import DataContext from "./context/contextProvider"
import { FaExclamationCircle } from "react-icons/fa"

const Traffic = () => {
  const { photos, err, load } = useContext(DataContext)
  return (
    <main>
      <p>still under construction, but you can view the photos for now, updates will be added soon</p>
      {photos.map((photo) => (
        <li key={photo.id} className="list-none">
          <h2>{photo.title}</h2>
          <img src={photo.url} alt={photo.description} />
        </li>
      ))}
      {load && !err && <p className="pb-2">Loading blogs...</p>}
      {err && <p className="pb-2"><FaExclamationCircle className="inline w-5 h-5"/> {err.message}</p>}
    </main>
  )
}

export default Traffic