import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import FavouritesContext from "../contexts/FavouritesContext"
import ComparatorContext from "../contexts/ComparatorContext"

export default function WineCard() {

  const { id } = useParams()
  const [wine, setWine] = useState({})
  const { toggleFavourite, isFavourite } = useContext(FavouritesContext)
  const { comparators, toggleComparator, isInComparator } = useContext(ComparatorContext)

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
          <img className="detail-img" src={`${wine.image}`} alt={wine.title} />
        </figure>
        <div className="dates">
          <h2 className="title-page">{wine.title}</h2>
          <p className="my-40"><strong><span className="fs-40">{(wine.price)?.toFixed(2)}&euro;</span></strong></p>
          <p><strong>Categoria:</strong> {wine.category}</p>
          <p><strong>Anno:</strong> {wine.year}</p>
          <p><strong>Paese:</strong> {wine.country}</p>
          <p><strong>Tasso alcolico:</strong> {(wine.alcohol)?.toFixed(2)}%</p>
          <p><strong>Descrizione:</strong> {wine.description}</p>
          <p>
            <i onClick={() => toggleFavourite(wine)}
              className="fa-solid fa-heart heart-card" style={{ color: isFavourite(wine) ? '#6D1A1A' : '#2E2E2E' }}
            ></i>
            <button onClick={() => toggleComparator(wine.id)}
              className={`add-comparator-card mt-20 ms-40 ${isInComparator(wine.id) ? 'remove-comparator' :
                comparators.length === 2 && !isInComparator(wine.id) ? 'disabled' : ''}`}
              disabled={comparators.length === 2 && !isInComparator(wine.id)}>{isInComparator(wine.id) ? 'Rimuovi dal comparatore' : 'Aggiungi al comparatore'}</button>
          </p>
        </div>
      </div>
    </>
  )
}