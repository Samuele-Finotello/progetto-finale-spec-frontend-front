import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import SearchBar from "../components/SearchBar"

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

export default function CategoryPage({ category }) {

  const [winesCategory, setWinesCategory] = useState([])
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState('')

  const fetchCategory = (category) => {
    fetch(`http://localhost:3001/wines?category=${category}`)
      .then(res => res.json())
      .then(data => setWinesCategory(data))
      .catch(error => console.error(error))
  }

  useEffect(() => fetchCategory(category), [])

  const filteredAndSortedWines = [...winesCategory].filter(wine => wine.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'az') {
        return a.title.localeCompare(b.title)
      }
      if (sortBy === 'za') {
        return b.title.localeCompare(a.title)
      }
    })

  const capitalize = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <>
      <h2 className="text-center title-page">Esplora le altre categorie</h2>
      <div className="d-flex mt-20">
        {wineCategories.filter(cat => cat.category.toLowerCase() !== category.toLowerCase())
          .map(cat => {
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
      <h2 className="text-center title-page mt-50">Vino {capitalize}</h2>
      <div className="text-center mt-30 d-flex">
        <SearchBar value={search} onChange={setSearch} />
        <select className="sort" name="sort" value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="">Ordina per</option>
          <option value="az">Nome A-Z</option>
          <option value="za">Nome Z-A</option>
        </select>
      </div>
      {filteredAndSortedWines.length === 1
        ? <p className="fs-15 mt-5 text-center">{filteredAndSortedWines.length} risultato trovato</p>
        : <p className="fs-15 mt-5 text-center">{filteredAndSortedWines.length} risultati trovati</p>}
      <div className="row">
        {filteredAndSortedWines.map(wine => {
          return (
            <div className="wd-30 p-10" key={wine.id}>
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