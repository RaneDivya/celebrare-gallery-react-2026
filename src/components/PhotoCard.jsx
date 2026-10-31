function PhotoCard({ photo, isFavorite, onToggleFavorite }) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md">

      <img
        src={photo.download_url}
        alt={`Photo by ${photo.author}`}
        className="h-64 w-full object-cover"
      />

      <div className="flex items-center justify-between p-4">

        <p className="font-medium text-gray-800">
          {photo.author}
        </p>

        <button
          onClick={() => onToggleFavorite(photo.id)}
          className="text-2xl text-red-500"
          aria-label="Toggle favourite"
        >
          {isFavorite ? "\u2665" : "\u2661"}
        </button>

      </div>
    </div>
  )
}

export default PhotoCard