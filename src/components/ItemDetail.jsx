import { Row, Col, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MediaBadge from './MediaBadge.jsx'
import BookmarkButton from './BookmarkButton.jsx'

function Stars({ rating }) {
  if (rating == null) {
    return <span className="text-muted">Currently reading</span>
  }
  const full = '★'.repeat(rating)
  const empty = '☆'.repeat(5 - rating)
  return (
    <span aria-label={`Rating: ${rating} out of 5`}>
      <span aria-hidden="true" style={{ fontSize: '1.25rem' }}>{full}{empty}</span>
    </span>
  )
}

function Cover({ item }) {
  if (item.coverImage) {
    return (
      <img
        src={item.coverImage}
        alt={`Cover of ${item.title}`}
        className="img-fluid rounded shadow-sm"
      />
    )
  }
  return (
    <div
      className="d-flex align-items-end p-4 rounded shadow-sm"
      aria-hidden="true"
      style={{
        minHeight: '360px',
        background: 'linear-gradient(135deg, #2b2d42, #1a1b2e)',
        color: '#fff',
      }}
    >
      <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.5rem', fontWeight: 700 }}>
        {item.title}
      </div>
    </div>
  )
}

function ItemDetail({ item }) {
  return (
    <article>
      <Link to="/shelf" className="d-inline-block mb-3">
        ← Back to shelf
      </Link>

      <Row className="g-4">
        <Col xs={12} md={4}>
          <Cover item={item} />
        </Col>

        <Col xs={12} md={8}>
          <div className="d-flex align-items-start justify-content-between gap-3 mb-2">
            <h1 className="mb-0" style={{ fontFamily: 'Georgia, serif' }}>
              {item.title}
            </h1>
            <BookmarkButton id={item.id} size={undefined} />
          </div>

          <p className="text-muted mb-3" style={{ fontSize: '1.1rem' }}>
            by {item.author}
          </p>

          <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
            <MediaBadge type={item.type} />
            {item.genre?.map((g) => (
              <Badge key={g} bg="secondary" pill>{g}</Badge>
            ))}
          </div>

          <div className="mb-3">
            <Stars rating={item.rating} />
          </div>

          <p className="text-muted small mb-3">
            Added {item.dateAdded}
          </p>

          {item.review && (
            <section className="mb-4">
              <h2 className="h5">Review</h2>
              <p style={{ lineHeight: 1.6 }}>{item.review}</p>
            </section>
          )}

          {item.externalLink && (
            <a
              href={item.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark"
            >
              Learn more ↗
            </a>
          )}
        </Col>
      </Row>
    </article>
  )
}

export default ItemDetail
