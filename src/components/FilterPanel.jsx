import { Form } from 'react-bootstrap'

const TYPE_OPTIONS = [
  { value: 'all', label: 'All types' },
  { value: 'book', label: 'Books' },
  { value: 'article', label: 'Articles' },
  { value: 'movie', label: 'Movies' },
  { value: 'tv', label: 'TV Shows' },
]

const RATING_OPTIONS = [
  { value: 0, label: 'Any rating' },
  { value: 3, label: '3★ and up' },
  { value: 4, label: '4★ and up' },
  { value: 5, label: '5★ only' },
]

function FilterPanel({ type, onTypeChange, minRating, onMinRatingChange }) {
  return (
    <div className="d-flex flex-wrap gap-3">
      <Form.Group controlId="filter-type">
        <Form.Label className="mb-1 small fw-semibold">Media type</Form.Label>
        <Form.Select
          value={type}
          onChange={(e) => onTypeChange(e.target.value)}
          aria-label="Filter by media type"
        >
          {TYPE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group controlId="filter-rating">
        <Form.Label className="mb-1 small fw-semibold">Rating</Form.Label>
        <Form.Select
          value={minRating}
          onChange={(e) => onMinRatingChange(Number(e.target.value))}
          aria-label="Filter by minimum rating"
        >
          {RATING_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
    </div>
  )
}

export default FilterPanel
