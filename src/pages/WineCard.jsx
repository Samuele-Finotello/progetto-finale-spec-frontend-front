import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function WineCard() {

  const { id } = useParams()
  const [wine, setWine] = useState({})

  const fetchWine = (id) => {
    fetch(`http://localhost:3001/wines/${id}`)
      .then(res => res.json())
      .then(data => setWine(data.wine))
      .catch(error => console.error(error))
  }

  useEffect(() => fetchWine(id), [])

  return (
    <>
      <div className="d-flex">
        <figure>
          <img src={`${wine.image}`} alt={wine.title} />
        </figure>
        <div className="dates">
          <h2 className="title-page">{wine.title}</h2>
          <p className="my-50"><strong><span className="fs-40">{(wine.price)?.toFixed(2)}&euro;</span></strong></p>
          <p><strong>Categoria:</strong> {wine.category}</p>
          <p><strong>Anno:</strong> {wine.year}</p>
          <p><strong>Paese:</strong> {wine.country}</p>
          <p><strong>Tasso alcolico:</strong> {(wine.alcohol)?.toFixed(2)}%</p>
          <p><strong>Descrizione:</strong> {wine.description}</p>
        </div>
      </div>
    </>
  )
}