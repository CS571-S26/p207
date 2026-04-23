import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <section
      className="rounded-4 p-4 p-md-5 mb-5 text-white text-center"
      style={{ background: '#1a1b2e' }}
    >
      <h1
        className="display-3 fw-bold mb-3"
        style={{ fontFamily: 'Georgia, serif', lineHeight: 1.05 }}
      >
        Jeremy's Shelf
      </h1>
      <p className="lead mb-4">
        Some of the media on my shelf! Are any of them on yours?
      </p>
      <div className="d-flex flex-wrap gap-2 justify-content-center">
        <Link to="/shelf" className="btn btn-light btn-lg">
          Browse the Shelf
        </Link>
        <Link to="/bookmarks" className="btn btn-outline-light btn-lg">
          See Bookmarks
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
