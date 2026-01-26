import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const wineCategories = [
  {
    id: 1,
    category: 'rosso'
  },
  {
    id: 2,
    category: 'rosé'
  },
  {
    id: 3,
    category: 'bianco'
  }
]

export default function Homepage() {

  const [wines, setWines] = useState([])

  const fetchWines = () => {
    fetch('http://localhost:3001/wines')
      .then(res => res.json())
      .then(data => setWines(data))
      .catch(error => console.error(error))
  }

  useEffect(fetchWines, [])

  return (
    <>
      <h2 className="text-center title-page">Esplora le categorie</h2>
      <div className="d-flex mt-20">
        {wineCategories.map(cat => {
          return (
            <div className="flex-column" key={cat.id}>
              <div className="white-circle d-flex">
                <Link to={`/category/${cat.category}`}>
                  <img className='p-10' src={`/icon-${cat.category}.png`} alt={cat.category} />
                </Link>
              </div>
              <p className="text-center fs-18">{cat.category}</p>
            </div>
          )
        })}
      </div>
      <h2 className="text-center title-page mt-50">Tutti i nostri vini</h2>
      <div className="row">
        {wines.map(wine => {
          return (
            <div className="wd-30 p-10" key={wine.id}>
              <Link to={`/wines/${wine.id}`}>
                <img src={`${wine.image}`} alt={wine.title} />
              </Link>
              <div className="px-20">
                <Link className="link-main" to={`/wines/${wine.id}`}>
                  <strong>{wine.title}</strong> <br /> -<i className="fs-18">{wine.category}</i>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}