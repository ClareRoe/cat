import { useState, useEffect } from 'react'

const STORAGE_KEY = 'cat-lab-favourites'

export function useFavourites() {
  const [favourites, setFavourites] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favourites))
    } catch {
      // localStorage unavailable
    }
  }, [favourites])

  const addFavourite = (cat) => {
    setFavourites((prev) => {
      if (prev.find((c) => c.id === cat.id)) return prev
      return [...prev, cat]
    })
  }

  const removeFavourite = (catId) => {
    setFavourites((prev) => prev.filter((c) => c.id !== catId))
  }

  const isFavourite = (catId) => {
    return favourites.some((c) => c.id === catId)
  }

  const toggleFavourite = (cat) => {
    if (isFavourite(cat.id)) {
      removeFavourite(cat.id)
    } else {
      addFavourite(cat)
    }
  }

  return { favourites, addFavourite, removeFavourite, isFavourite, toggleFavourite }
}
