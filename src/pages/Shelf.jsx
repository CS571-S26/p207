import { useMemo, useState } from 'react'
import { Button } from 'react-bootstrap'
import items from '../data/items.js'
import ShelfRow from '../components/ShelfRow.jsx'
import SearchBar from '../components/SearchBar.jsx'
import FilterPanel from '../components/FilterPanel.jsx'
import SortDropdown from '../components/SortDropdown.jsx'

function matchesQuery(item, query) {
  if (!query) return true
  const q = query.toLowerCase()
  if (item.title.toLowerCase().includes(q)) return true
  if (item.author.toLowerCase().includes(q)) return true
  if (item.genre?.some((g) => g.toLowerCase().includes(q))) return true
  return false
}

function compareItems(a, b, sort) {
  switch (sort) {
    case 'date-asc':
      return a.dateAdded.localeCompare(b.dateAdded)
    case 'date-desc':
      return b.dateAdded.localeCompare(a.dateAdded)
    case 'title-asc':
      return a.title.localeCompare(b.title)
    case 'title-desc':
      return b.title.localeCompare(a.title)
    case 'rating-desc':
      return (b.rating ?? -1) - (a.rating ?? -1)
    case 'type-asc':
      return a.type.localeCompare(b.type) || a.title.localeCompare(b.title)
    default:
      return 0
  }
}

function Shelf() {
  const [query, setQuery] = useState('')
  const [type, setType] = useState('all')
  const [minRating, setMinRating] = useState(0)
  const [sort, setSort] = useState('date-desc')

  const filtersActive =
    query !== '' || type !== 'all' || minRating > 0 || sort !== 'date-desc'

  const clearFilters = () => {
    setQuery('')
    setType('all')
    setMinRating(0)
    setSort('date-desc')
  }

  const visibleItems = useMemo(() => {
    return items
      .filter((item) => {
        if (type !== 'all' && item.type !== type) return false
        if (minRating > 0 && (item.rating ?? 0) < minRating) return false
        if (!matchesQuery(item, query)) return false
        return true
      })
      .sort((a, b) => compareItems(a, b, sort))
  }, [query, type, minRating, sort])

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
          The Shelf
        </h1>
      </section>

      <div className="mb-4">
        <div className="mb-3">
          <SearchBar value={query} onChange={setQuery} />
        </div>
        <div className="d-flex flex-wrap gap-3 align-items-end">
          <FilterPanel
            type={type}
            onTypeChange={setType}
            minRating={minRating}
            onMinRatingChange={setMinRating}
          />
          <SortDropdown value={sort} onChange={setSort} />
          {filtersActive && (
            <Button
              variant="outline-secondary"
              onClick={clearFilters}
              aria-label="Clear all filters"
            >
              Clear filters
            </Button>
          )}
        </div>
      </div>

      <p className="text-muted" aria-live="polite">
        Showing {visibleItems.length} of {items.length} items
      </p>

      {visibleItems.length > 0 ? (
        <ShelfRow items={visibleItems} label="Results" />
      ) : (
        <p className="text-center text-muted py-5">
          Nothing matches those filters. Try loosening the search.
        </p>
      )}
    </>
  )
}

export default Shelf
