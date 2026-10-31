
import { useMemo } from 'react'
import useFetchPhotos from '../hooks/useFetchPhotos'
import PhotoCard from './PhotoCard'

function Gallery({ favorites, onToggleFavorite, searchTerm }) {
  const { photos, loading, error } = useFetchPhotos()

  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [photos, searchTerm])

  if (loading) {
    return (
      <div className="flex justify-center items-center py-10">
        <div className="w-10 h-10 border-4 border-purple-300 border-t-purple-700 rounded-full animate-spin"></div>
      </div>
    )
  }

  if (error) {
    return (
      <p className="text-center text-red-500">
        Error: {error}
      </p>
    )
  }

  return (
    <>
      {filteredPhotos.length === 0 ? (
        <p className="text-center text-gray-500">
          No photos found.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {filteredPhotos.map((photo) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              isFavorite={favorites.includes(photo.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default Gallery
