import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import Navbar from './components/Navbar'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/"              element={<Home />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
      </Routes>
      <BackToTop />
    </>
  )
}
