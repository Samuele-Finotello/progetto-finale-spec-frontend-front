import { useContext } from "react"
import FavouritesContext from "../contexts/FavouritesContext"

export default function FavouritesPage() {

  const { favourites, toggleFavourite } = useContext(FavouritesContext)

  console.log(favourites)

  return (
    <>
      {favourites.length === 0 ?
        <h2 className="text-center title-page">Lista dei preferiti vuota 😢</h2> :
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
                  <button className="add-comparator-card mt-20">Aggiungi al comparatore</button>
                </div>
              </div>
            )
          })
          }
        </div>
      }
    </>
  )
}