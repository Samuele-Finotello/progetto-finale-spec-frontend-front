import { useContext } from "react"
import FavouritesContext from "../contexts/FavouritesContext"
import ComparatorContext from "../contexts/ComparatorContext"

export default function FavouritesPage() {

  const { favourites, toggleFavourite, clearFavourites } = useContext(FavouritesContext)
  const { comparators, toggleComparator, isInComparator } = useContext(ComparatorContext)

  return (
    <>
      {favourites.length === 0 ?
        <h2 className="text-center title-page">Lista dei preferiti vuota</h2> :
        <div>
          <button className="add-favourites-card" onClick={() => clearFavourites()}>Rimuovi tutti i preferiti</button>
          <div className="row">
            {favourites.map(favourite => {
              return (
                <div className="wd-80" key={favourite.id}>
                  <div>
                    <img className="favourite-img" src={`/${favourite.id}.png`} alt={favourite.title} />
                  </div>
                  <h2 className="title-page ms-40 wd-50">{favourite.title}</h2>
                  <div className="ms-40">
                    <button onClick={() => toggleFavourite(favourite)} className="add-favourites-card">Rimuovi dai preferiti</button> <br />
                    <button onClick={() => toggleComparator(favourite.id)}
                      className={`add-comparator-card mt-20 ${isInComparator(favourite.id) ? 'remove-comparator' :
                        comparators.length === 2 && !isInComparator(favourite.id) ? 'disabled' : ''}`}
                      disabled={comparators.length === 2 && !isInComparator(favourite.id)}>{isInComparator(favourite.id) ? 'Rimuovi dal comparatore' : 'Aggiungi al comparatore'}</button>
                  </div>
                </div>
              )
            })
            }
          </div>
        </div>
      }
    </>
  )
}