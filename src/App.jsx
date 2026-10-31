
import { useReducer, useEffect, useState, useCallback } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import favoritesReducer from './reducers/FavouritesReducer.js'

function App() {
  const [favorites, dispatch] = useReducer(
    favoritesReducer,
    [],
    () => {
      const savedFavorites = localStorage.getItem('favorites')
      return savedFavorites ? JSON.parse(savedFavorites) : []
    }
  )

  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const handleToggleFavorite = useCallback((id) => {
    dispatch({
      type: 'TOGGLE_FAVORITE',
      id: id
    })
  }, [])

  const handleSearchChange = useCallback((value) => {
    setSearchTerm(value)
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
        Photo Gallery
      </h1>

      <div className="mx-auto mb-8 max-w-xl">
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
        />
      </div>

      <Gallery
        favorites={favorites}
        onToggleFavorite={handleToggleFavorite}
        searchTerm={searchTerm}
      />

    </div>
  )
}

export default App
