import { Form } from 'react-bootstrap'

const SORT_OPTIONS = [
  { value: 'date-desc', label: 'Newest first' },
  { value: 'date-asc', label: 'Oldest first' },
  { value: 'title-asc', label: 'Title (A–Z)' },
  { value: 'title-desc', label: 'Title (Z–A)' },
  { value: 'rating-desc', label: 'Rating (high → low)' },
  { value: 'type-asc', label: 'Media type' },
]

function SortDropdown({ value, onChange }) {
  return (
    <Form.Group controlId="sort-by">
      <Form.Label className="mb-1 small fw-semibold">Sort by</Form.Label>
      <Form.Select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Sort shelf items"
      >
        {SORT_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  )
}

export default SortDropdown
