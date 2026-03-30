import { Link } from 'react-router-dom'
import CatCard from '../components/CatCard'
import { useFavourites } from '../hooks/useFavourites'

export default function Favourites() {
  const { favourites, isFavourite, toggleFavourite } = useFavourites()

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
          ❤️ My Favourites
        </div>
        <h1 className="text-4xl font-extrabold text-indigo-900 mb-3">My Favourite Cats</h1>
        <p className="text-indigo-500 text-lg">
          {favourites.length > 0
            ? `You have ${favourites.length} saved cat${favourites.length === 1 ? '' : 's'}.`
            : 'Your favourites will appear here.'}
        </p>
      </div>

      {/* Empty state */}
      {favourites.length === 0 && (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🤍</div>
          <h2 className="text-xl font-bold text-indigo-900 mb-2">No favourites yet</h2>
          <p className="text-indigo-400 mb-6 max-w-sm mx-auto">
            Head to the gallery and tap the heart on any cat you love.
          </p>
          <Link
            to="/gallery"
            className="inline-block px-6 py-3 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 transition-colors shadow-md"
          >
            🖼️ Browse the Gallery
          </Link>
        </div>
      )}

      {/* Grid */}
      {favourites.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favourites.map((cat) => (
            <CatCard
              key={cat.id}
              cat={cat}
              isFavourite={isFavourite(cat.id)}
              onToggleFavourite={toggleFavourite}
            />
          ))}
        </div>
      )}
    </div>
  )
}
