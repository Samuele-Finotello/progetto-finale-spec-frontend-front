import { useContext, useState, useEffect } from "react"
import ComparatorContext from "../contexts/ComparatorContext"
import FavouritesContext from "../contexts/FavouritesContext"
import { Link } from "react-router-dom"
import Header from "../components/Header"

export default function ComparatorPage() {

  const { comparators, toggleComparator } = useContext(ComparatorContext)
  const { toggleFavourite, isFavourite } = useContext(FavouritesContext)
  const [comparedWines, setComparedWines] = useState([])

  useEffect(() => {
    Promise.all(
      comparators.map(id =>
        fetch(`http://localhost:3001/wines/${id}`)
          .then(res => res.json())
      )
    ).then(data => setComparedWines(data))
  }, [comparators])

  return (
    <>
      <Header />
      <div className="main-page">
        {comparators.length === 0 ?
          <>
            <h2 className="text-center fs-18">Scegli almeno 2 vini da confrontare</h2>
            <div className="row-comparator">
              <div className="comparator-empty">
                <div>
                  <Link className="link-main fs-30" to={'/'}><i className="fa-solid fa-plus"></i></Link>
                </div>
              </div>
              <div className="comparator-empty">
                <div>
                  <Link className="link-main fs-30" to={'/'}><i className="fa-solid fa-plus"></i></Link>
                </div>
              </div>
              <div className="comparator-empty">
                <div>
                  <Link className="link-main fs-30" to={'/'}><i className="fa-solid fa-plus"></i></Link>
                </div>
              </div>
              <div className="comparator-empty">
                <div>
                  <Link className="link-main fs-30" to={'/'}><i className="fa-solid fa-plus"></i></Link>
                </div>
              </div>
            </div>
          </>
          : comparators.length === 1 ?
            <>
              <h2 className="text-center fs-18">Scegli almeno un altro vino da confrontare</h2>
              <div className="row-comparator">
                {comparedWines.map(w => {
                  const { wine } = w
                  return (
                    <div className="align-center wd-40" key={wine.id}>
                      <figure>
                        <img className="comparator-img" src={`${wine.image}`} alt={wine.title} />
                      </figure>
                      <div className="dates-comparator relative">
                        <h2 className="title-page">{wine.title}</h2>
                        <p className="my-40"><strong><span className="fs-40">{(wine.price)?.toFixed(2)}&euro;</span></strong></p>
                        <p><strong>Categoria:</strong> {wine.category}</p>
                        <p><strong>Anno:</strong> {wine.year}</p>
                        <p><strong>Paese:</strong> {wine.country}</p>
                        <p><strong>Tasso alcolico:</strong> {(wine.alcohol)?.toFixed(2)}%</p>
                        <p><strong>Descrizione:</strong> {wine.description}</p>
                        <button onClick={() => toggleComparator(wine.id)} className="add-comparator-card remove-comparator mt-20">Rimuovi vino</button>
                        <p>
                          <i onClick={() => toggleFavourite(wine)}
                            className="fa-solid fa-heart heart-comparator" style={{ color: isFavourite(wine) ? '#6D1A1A' : '#2E2E2E' }}
                          ></i>
                        </p>
                      </div>
                    </div>
                  )
                })}
                <div className="comparator-empty wd-40">
                  <div>
                    <Link className="link-main fs-30" to={'/'}><i className="fa-solid fa-plus"></i></Link>
                  </div>
                </div>
                <div className="comparator-empty wd-40">
                  <div>
                    <Link className="link-main fs-30" to={'/'}><i className="fa-solid fa-plus"></i></Link>
                  </div>
                </div>
                <div className="comparator-empty wd-40">
                  <div>
                    <Link className="link-main fs-30" to={'/'}><i className="fa-solid fa-plus"></i></Link>
                  </div>
                </div>
              </div>
            </>
            : comparators.length === 2 ?
              <>
                <div className="row-comparator">
                  {comparedWines.map(w => {
                    const { wine } = w
                    return (
                      <div className="align-center wd-40" key={wine.id}>
                        <figure>
                          <img className="comparator-img" src={`${wine.image}`} alt={wine.title} />
                        </figure>
                        <div className="dates-comparator relative">
                          <h2 className="title-page">{wine.title}</h2>
                          <p className="my-40"><strong><span className="fs-40">{(wine.price)?.toFixed(2)}&euro;</span></strong></p>
                          <p><strong>Categoria:</strong> {wine.category}</p>
                          <p><strong>Anno:</strong> {wine.year}</p>
                          <p><strong>Paese:</strong> {wine.country}</p>
                          <p><strong>Tasso alcolico:</strong> {(wine.alcohol)?.toFixed(2)}%</p>
                          <p><strong>Descrizione:</strong> {wine.description}</p>
                          <button onClick={() => toggleComparator(wine.id)} className="add-comparator-card remove-comparator mt-20">Rimuovi vino</button>
                          <p>
                            <i onClick={() => toggleFavourite(wine)}
                              className="fa-solid fa-heart heart-comparator" style={{ color: isFavourite(wine) ? '#6D1A1A' : '#2E2E2E' }}
                            ></i>
                          </p>
                        </div>
                      </div>
                    )
                  })}
                  <div className="comparator-empty wd-40">
                    <div>
                      <Link className="link-main fs-30" to={'/'}><i className="fa-solid fa-plus"></i></Link>
                    </div>
                  </div>
                  <div className="comparator-empty wd-40">
                    <div>
                      <Link className="link-main fs-30" to={'/'}><i className="fa-solid fa-plus"></i></Link>
                    </div>
                  </div>
                </div>
              </>
              : comparators.length === 3 ?
                <>
                  <div className="row-comparator">
                    {comparedWines.map(w => {
                      const { wine } = w
                      return (
                        <div className="align-center wd-40" key={wine.id}>
                          <figure>
                            <img className="comparator-img" src={`${wine.image}`} alt={wine.title} />
                          </figure>
                          <div className="dates-comparator relative">
                            <h2 className="title-page">{wine.title}</h2>
                            <p className="my-40"><strong><span className="fs-40">{(wine.price)?.toFixed(2)}&euro;</span></strong></p>
                            <p><strong>Categoria:</strong> {wine.category}</p>
                            <p><strong>Anno:</strong> {wine.year}</p>
                            <p><strong>Paese:</strong> {wine.country}</p>
                            <p><strong>Tasso alcolico:</strong> {(wine.alcohol)?.toFixed(2)}%</p>
                            <p><strong>Descrizione:</strong> {wine.description}</p>
                            <button onClick={() => toggleComparator(wine.id)} className="add-comparator-card remove-comparator mt-20">Rimuovi vino</button>
                            <p>
                              <i onClick={() => toggleFavourite(wine)}
                                className="fa-solid fa-heart heart-comparator" style={{ color: isFavourite(wine) ? '#6D1A1A' : '#2E2E2E' }}
                              ></i>
                            </p>
                          </div>
                        </div>
                      )
                    })}
                    <div className="comparator-empty wd-40">
                      <div>
                        <Link className="link-main fs-30" to={'/'}><i className="fa-solid fa-plus"></i></Link>
                      </div>
                    </div>
                  </div>
                </>
                :
                <>
                  <div className="row-comparator">
                    {comparedWines.map(w => {
                      const { wine } = w
                      return (
                        <div className="align-center wd-40" key={wine.id}>
                          <figure>
                            <img className="comparator-img" src={`${wine.image}`} alt={wine.title} />
                          </figure>
                          <div className="dates-comparator relative">
                            <h2 className="title-page">{wine.title}</h2>
                            <p className="my-40"><strong><span className="fs-40">{(wine.price)?.toFixed(2)}&euro;</span></strong></p>
                            <p><strong>Categoria:</strong> {wine.category}</p>
                            <p><strong>Anno:</strong> {wine.year}</p>
                            <p><strong>Paese:</strong> {wine.country}</p>
                            <p><strong>Tasso alcolico:</strong> {(wine.alcohol)?.toFixed(2)}%</p>
                            <p><strong>Descrizione:</strong> {wine.description}</p>
                            <button onClick={() => toggleComparator(wine.id)} className="add-comparator-card remove-comparator mt-20">Rimuovi vino</button>
                            <p>
                              <i onClick={() => toggleFavourite(wine)}
                                className="fa-solid fa-heart heart-comparator" style={{ color: isFavourite(wine) ? '#6D1A1A' : '#2E2E2E' }}
                              ></i>
                            </p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </>
        }
      </div>
    </>
  )
}