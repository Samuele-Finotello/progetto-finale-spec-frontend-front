import DefaultLayout from "./layouts/DefaultLayout";
import Homepage from "./pages/Homepage";
import WineCard from "./pages/WineCard";
import ComparatorPage from "./pages/ComparatorPage"
import FavouritesPage from "./pages/FavouritesPage"
import RedCategory from "./pages/RedCategory";
import PinkCategory from "./pages/PinkCategory";
import WhiteCategory from "./pages/WhiteCategory";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavouritesContext from "./contexts/FavouritesContext";
import { useState } from "react";

function App() {

  const [favourites, setFavourites] = useState([])

  const toggleFavourite = wine => {
    setFavourites(prev => prev.includes(wine) ? prev.filter(favId => favId.id !== wine.id) : [...prev, wine])
  }

  const isFavourite = wine => {
    return favourites.includes(wine)
  }

  return (
    <>
      <FavouritesContext.Provider value={{ favourites, toggleFavourite, isFavourite }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<Homepage />} />
              <Route path="/category/rosso" element={<RedCategory />} />
              <Route path="/category/rosé" element={<PinkCategory />} />
              <Route path="/category/bianco" element={<WhiteCategory />} />
              <Route path="/wines/:id" element={<WineCard />} />
              <Route path="/comparator" element={<ComparatorPage />} />
              <Route path="/favourites" element={<FavouritesPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </FavouritesContext.Provider>
    </>
  )
}

export default App;