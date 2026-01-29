import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import SearchBar from "../components/SearchBar"
import FavouritesContext from "../contexts/FavouritesContext"
import ComparatorContext from "../contexts/ComparatorContext"

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
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState('')
  const { toggleFavourite, isFavourite } = useContext(FavouritesContext)
  const { comparators, toggleComparator, isInComparator } = useContext(ComparatorContext)

  const fetchWines = () => {
    fetch('http://localhost:3001/wines')
      .then(res => res.json())
      .then(data => setWines(data))
      .catch(error => console.error(error))
  }

  useEffect(fetchWines, [])

  const filteredAndSortedWines = [...wines]
    .filter(wine => wine.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'az') {
        return a.title.localeCompare(b.title)
      }
      if (sortBy === 'za') {
        return b.title.localeCompare(a.title)
      }
      if (sortBy === 'category-az') {
        return a.category.localeCompare(b.category)
      }
      if (sortBy === 'category-za') {
        return b.category.localeCompare(a.category)
      }
      return 0;
    })

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
      <div className="text-center mt-30 d-flex">
        <SearchBar value={search} onChange={setSearch} />
        <select className="sort" name="sort" value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="">Ordina per</option>
          <option value="az">Nome A-Z</option>
          <option value="za">Nome Z-A</option>
          <option value="category-az">Categoria A-Z</option>
          <option value="category-za">Categoria Z-A</option>
        </select>
      </div>
      {filteredAndSortedWines.length === 1
        ? <p className="fs-15 mt-5 text-center">{filteredAndSortedWines.length} risultato trovato</p>
        : <p className="fs-15 mt-5 text-center">{filteredAndSortedWines.length} risultati trovati</p>}
      <div className="row">
        {filteredAndSortedWines.map(wine => {
          return (
            <div className="wd-30 p-10" key={wine.id}>
              <i onClick={() => toggleFavourite(wine)}
                className="fa-solid fa-heart heart" style={{ color: isFavourite(wine) ? '#6D1A1A' : '#2E2E2E' }}
              ></i>
              <button onClick={() => toggleComparator(wine.id)}
                className={`add-comparator ${isInComparator(wine.id) ? 'remove-comparator' :
                  comparators.length === 2 && !isInComparator(wine.id) ? 'disabled' : ''}`}
                disabled={comparators.length === 2 && !isInComparator(wine.id)}>{isInComparator(wine.id) ? 'Rimuovi dal comparatore' : 'Aggiungi al comparatore'}</button>
              <Link to={`/wines/${wine.id}`}>
                <img src={`/${wine.id}.png`} alt={wine.title} />
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