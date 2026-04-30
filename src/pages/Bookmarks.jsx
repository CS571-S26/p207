import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import items from '../data/items.js'
import { useBookmarks } from '../hooks/useBookmarks.js'
import BookmarkList from '../components/BookmarkList.jsx'

function Bookmarks() {
  const { ids } = useBookmarks()

  const bookmarkedItems = useMemo(() => {
    const idSet = new Set(ids)
    return items.filter((item) => idSet.has(item.id))
  }, [ids])

  return (
    <>
      <section
        className="rounded-4 p-4 p-md-5 mb-4 text-white text-center"
        style={{ background: '#1a1b2e' }}
      >
        <h1
          className="display-4 fw-bold mb-0"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Bookmarks
        </h1>
      </section>

      <p className="text-muted" aria-live="polite">
        {bookmarkedItems.length === 0
          ? 'No bookmarks yet.'
          : `${bookmarkedItems.length} saved item${bookmarkedItems.length === 1 ? '' : 's'}`}
      </p>

      {bookmarkedItems.length > 0 ? (
        <BookmarkList items={bookmarkedItems} />
      ) : (
        <p className="text-center text-muted py-5">
          Tap the star on any item in <Link to="/shelf">the shelf</Link> to save it here.
        </p>
      )}
    </>
  )
}

export default Bookmarks
