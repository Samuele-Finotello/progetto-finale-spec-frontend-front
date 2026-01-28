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
import ComparatorContext from "./contexts/ComparatorContext";
import { useState, useEffect } from "react";

function App() {

  const [favourites, setFavourites] = useState(() => {
    const saved = localStorage.getItem("favourites");
    return saved ? JSON.parse(saved) : [];
  })

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const [comparators, setComparators] = useState(() => {
    const saved = localStorage.getItem("comparators");
    return saved ? JSON.parse(saved) : [];
  })

  useEffect(() => {
    localStorage.setItem("comparators", JSON.stringify(comparators));
  }, [comparators]);

  const toggleFavourite = wine => {
    setFavourites(prev => prev.some(w => w.id === wine.id) ? prev.filter(favId => favId.id !== wine.id) : [...prev, wine])
  }

  const toggleComparator = id => {
    setComparators(prev => {

      if (prev.find(elemId => elemId === id)) {
        return prev.filter(elemId => elemId !== id)
      }

      if (prev.length === 2) {
        return prev;
      }

      return [...prev, id];
    })
  }

  const isFavourite = wine => {
    return favourites.some(elem => elem.id === wine.id)
  }

  const isInComparator = id => {
    return comparators.includes(id)
  }

  const clearFavourites = () => {
    setFavourites([])
  }

  return (
    <>
      <ComparatorContext.Provider value={{ comparators, toggleComparator, isInComparator }}>
        <FavouritesContext.Provider value={{ favourites, toggleFavourite, isFavourite, clearFavourites }}>
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
      </ComparatorContext.Provider>
    </>
  )
}

export default App;