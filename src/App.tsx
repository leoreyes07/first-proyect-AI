import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { HomePage } from './pages/home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="news" element={<div className="p-8">News Page</div>} />
          <Route path="team" element={<div className="p-8">Team Page</div>} />
          <Route path="matches" element={<div className="p-8">Matches Page</div>} />
          <Route path="shop" element={<div className="p-8">Shop Page</div>} />
          <Route path="tickets" element={<div className="p-8">Tickets Page</div>} />
          <Route path="contact" element={<div className="p-8">Contact Page</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
