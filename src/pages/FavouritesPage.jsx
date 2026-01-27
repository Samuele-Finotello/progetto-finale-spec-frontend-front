import { useContext } from "react"
import FavouritesContext from "../contexts/FavouritesContext"

export default function FavouritesPage() {

  const { favourites, toggleFavourite } = useContext(FavouritesContext)

  console.log(favourites)

  return (
    <div className="row">
      {favourites.map(favourite => {
        return (
          <div className="wd-100" key={favourite.id}>
            <div>
              <img className="favourite-img" src={`/${favourite.id}.png`} alt={favourite.title} />
            </div>
            <h2 className="title-page ms-40">{favourite.title}</h2>
          </div>
        )
      })}
    </div>
  )
}