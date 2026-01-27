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
  const [winesCategoryFilter, setWinesCategoryFilter] = useState(winesCategory)
  const [search, setSearch] = useState('')

  const fetchCategory = (category) => {
    fetch(`http://localhost:3001/wines?category=${category}`)
      .then(res => res.json())
      .then(data => setWinesCategory(data))
      .catch(error => console.error(error))
  }

  useEffect(() => fetchCategory(category), [])
  useEffect(() => {
    const winesCategoryFilter = winesCategory.filter(wine => wine.title.toLowerCase().includes(search.toLowerCase()))
    setWinesCategoryFilter(winesCategoryFilter)
  }, [search, winesCategory])

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
      <SearchBar value={search} onChange={setSearch} />
      <div className="row">
        {winesCategoryFilter.map(wine => {
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