import { Badge } from 'react-bootstrap'

const TYPE_META = {
  book: { label: 'Book', bg: 'primary' },
  article: { label: 'Article', bg: 'info' },
  movie: { label: 'Movie', bg: 'danger' },
  tv: { label: 'TV Show', bg: 'success' },
}

function MediaBadge({ type }) {
  const meta = TYPE_META[type] ?? { label: type, bg: 'secondary' }
  return (
    <Badge bg={meta.bg} aria-label={`Media type: ${meta.label}`}>
      {meta.label}
    </Badge>
  )
}

export default MediaBadge
