import { Badge } from 'react-bootstrap'

const TYPE_META = {
  book: { label: 'Book', bg: 'primary', text: 'light' },
  article: { label: 'Article', bg: 'info', text: 'dark' },
  movie: { label: 'Movie', bg: 'dark', text: 'light' },
  tv: { label: 'TV Show', bg: 'success', text: 'light' },
}

function MediaBadge({ type }) {
  const meta = TYPE_META[type] ?? { label: type, bg: 'secondary', text: 'light' }
  return (
    <Badge bg={meta.bg} text={meta.text} aria-label={`Media type: ${meta.label}`}>
      {meta.label}
    </Badge>
  )
}

export default MediaBadge
