import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MediaBadge from './MediaBadge.jsx'
import BookmarkButton from './BookmarkButton.jsx'

function Stars({ rating }) {
  if (rating == null) {
    return (
      <span className="text-muted" style={{ fontSize: '0.85rem' }}>
        Currently reading
      </span>
    )
  }
  const full = '★'.repeat(rating)
  const empty = '☆'.repeat(5 - rating)
  return (
    <span aria-label={`Rating: ${rating} out of 5`}>
      <span aria-hidden="true">{full}{empty}</span>
    </span>
  )
}

function ShelfItem({ item }) {
  return (
    <Card className="h-100 shelf-item">
      <div style={{ position: 'relative' }}>
        {item.coverImage ? (
          <Card.Img variant="top" src={item.coverImage} alt={`Cover of ${item.title}`} />
        ) : (
          <div
            className="shelf-item__spine d-flex align-items-end p-3"
            aria-hidden="true"
            style={{ minHeight: '180px', background: 'linear-gradient(135deg, #2b2d42, #1a1b2e)', color: '#fff' }}
          >
            <div className="fw-bold" style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem' }}>
              {item.title}
            </div>
          </div>
        )}
        <div style={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}>
          <BookmarkButton id={item.id} />
        </div>
      </div>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start mb-2 gap-2">
          <Card.Title className="mb-0" style={{ fontSize: '1rem' }}>
            <Link
              to={`/shelf/${item.id}`}
              className="stretched-link text-reset text-decoration-none"
            >
              {item.title}
            </Link>
          </Card.Title>
          <MediaBadge type={item.type} />
        </div>
        <Card.Subtitle className="text-muted mb-2" style={{ fontSize: '0.85rem' }}>
          {item.author}
        </Card.Subtitle>
        <Stars rating={item.rating} />
      </Card.Body>
    </Card>
  )
}

export default ShelfItem
