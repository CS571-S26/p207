import { useCallback, useEffect, useState } from 'react'
import { BookmarkContext } from './useBookmarks.js'

const STORAGE_KEY = 'jeremys-shelf:bookmarks'

function readFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function BookmarkProvider({ children }) {
  const [ids, setIds] = useState(readFromStorage)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids))
  }, [ids])

  const toggle = useCallback((id) => {
    setIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
  }, [])

  const isBookmarked = useCallback((id) => ids.includes(id), [ids])

  return (
    <BookmarkContext.Provider value={{ ids, toggle, isBookmarked }}>
      {children}
    </BookmarkContext.Provider>
  )
}
