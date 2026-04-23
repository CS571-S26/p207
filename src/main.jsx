import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.jsx'
import { BookmarkProvider } from './hooks/useBookmarks.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/p207">
      <BookmarkProvider>
        <App />
      </BookmarkProvider>
    </BrowserRouter>
  </StrictMode>,
)
