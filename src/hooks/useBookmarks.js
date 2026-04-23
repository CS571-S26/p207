import { createContext, useContext } from 'react'

export const BookmarkContext = createContext(null)

export function useBookmarks() {
  return useContext(BookmarkContext)
}
