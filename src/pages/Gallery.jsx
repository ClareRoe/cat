import { useState, useEffect } from 'react'
import CatCard from '../components/CatCard'
import { useFavourites } from '../hooks/useFavourites'

const CAT_API_KEY = import.meta.env.VITE_CAT_API_KEY

function buildUrl(limit = 12) {
  let url = `https://api.thecatapi.com/v1/images/search?limit=${limit}`
  if (CAT_API_KEY) url += `&api_key=${CAT_API_KEY}`
  return url
}

export default function Gallery() {
  const [cats, setCats] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [error, setError] = useState(null)
  const { isFavourite, toggleFavourite } = useFavourites()

  const fetchCats = async (append = false) => {
    if (append) setLoadingMore(true)
    else setLoading(true)
    setError(null)
    try {
      const res = await fetch(buildUrl(12))
      if (!res.ok) throw new Error(`Failed to fetch cats (${res.status})`)
      const data = await res.json()
      // Normalise: ensure each cat has an id
      const normalised = data.map((cat, i) => ({
        id: cat.id || `cat-${Date.now()}-${i}`,
        url: cat.url,
      }))
      if (append) {
        setCats((prev) => [...prev, ...normalised])
      } else {
        setCats(normalised)
      }
    } catch (e) {
      setError(e.message || 'Could not load cats.')
    } finally {
      setLoading(false)
      setLoadingMore(false)
    }
  }

  useEffect(() => {
    fetchCats(false)
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
          🖼️ Cat Gallery
        </div>
        <h1 className="text-4xl font-extrabold text-indigo-900 mb-3">Cat Gallery</h1>
        <p className="text-indigo-500 text-lg">
          Fresh cats, straight from The Cat API. Heart your favourites, or let AI name them!
        </p>
      </div>

      {/* Error */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-2xl p-4 text-center mb-8">
          <p className="font-semibold">Oops! {error}</p>
          <button
            onClick={() => fetchCats(false)}
            className="mt-2 px-4 py-2 bg-red-600 text-white rounded-xl text-sm hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      )}

      {/* Loading skeleton */}
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm border border-purple-100 overflow-hidden animate-pulse">
              <div className="aspect-square bg-purple-100" />
              <div className="p-4 space-y-2">
                <div className="h-8 bg-purple-100 rounded-xl" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Grid */}
      {!loading && cats.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cats.map((cat) => (
            <CatCard
              key={cat.id}
              cat={cat}
              isFavourite={isFavourite(cat.id)}
              onToggleFavourite={toggleFavourite}
            />
          ))}
        </div>
      )}

      {/* Load More */}
      {!loading && !error && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => fetchCats(true)}
            disabled={loadingMore}
            className="px-8 py-3 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-300 text-white font-bold rounded-xl shadow-md transition-colors duration-200 flex items-center gap-2"
          >
            {loadingMore ? (
              <>
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Loading more cats...
              </>
            ) : (
              '🐱 Load More Cats'
            )}
          </button>
        </div>
      )}
    </div>
  )
}
