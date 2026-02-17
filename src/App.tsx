import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import PostDetail from './pages/PostDetail'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/posts/:slug" element={<PostDetail />} />
    </Routes>
  )
}

export default App
