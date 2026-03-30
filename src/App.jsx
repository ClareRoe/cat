import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import History from './pages/History'
import Gallery from './pages/Gallery'
import Favourites from './pages/Favourites'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-purple-50 flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </main>
        <footer className="bg-white border-t border-purple-100 py-6 text-center text-sm text-indigo-400">
          <span>🐱 Cat Lab — Built with React + Vite + Tailwind</span>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
