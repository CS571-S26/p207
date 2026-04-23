import { Button } from 'react-bootstrap'
import { useBookmarks } from '../hooks/useBookmarks.js'

function BookmarkButton({ id, size = 'sm', className = '' }) {
  const { isBookmarked, toggle } = useBookmarks()
  const active = isBookmarked(id)

  const handleClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    toggle(id)
  }

  return (
    <Button
      variant={active ? 'warning' : 'light'}
      size={size}
      onClick={handleClick}
      aria-pressed={active}
      aria-label={active ? 'Remove bookmark' : 'Add bookmark'}
      className={`bookmark-button ${className}`.trim()}
      style={{ position: 'relative', zIndex: 2, lineHeight: 1 }}
    >
      <span aria-hidden="true">{active ? '★' : '☆'}</span>
    </Button>
  )
}

export default BookmarkButton
