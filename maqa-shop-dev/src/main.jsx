import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Contact from './pages/contact/Contact.jsx'
import Login from './pages/login/Login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Kontakt" element={<Contact />} />
        <Route path="Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)