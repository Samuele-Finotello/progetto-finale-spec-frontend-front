import { createContext } from "react";

const FavouritesContext = createContext({
  favourites: [],
  toggleFavourite: () => { },
  isFavourite: () => false,
  clearFavourites: () => { }
})

export default FavouritesContext;