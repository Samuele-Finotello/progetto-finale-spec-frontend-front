import { createContext } from "react";

const FavouritesContext = createContext({
  favourites: [],
  toggleFavourite: () => { },
  isFavourite: () => false
})

export default FavouritesContext;