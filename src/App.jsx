import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Shelf from './pages/Shelf.jsx'
import ItemDetailPage from './pages/ItemDetailPage.jsx'
import Bookmarks from './pages/Bookmarks.jsx'

function App() {
  return (
    <>
      <Navbar />
      <main className="container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shelf" element={<Shelf />} />
          <Route path="/shelf/:id" element={<ItemDetailPage />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
