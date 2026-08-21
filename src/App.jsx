import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import LoginForm from './Component/LoginForm'
import ConsultancyHome from './Component/ConsultancyHome'
import ConsultationBooking from './Component/ConsultationBooking'
import AboutPage from './Component/AboutPage'
import ServicesPage from './Component/ServicesPage'
import CountriesPage from './Component/CountriesPage'
import ContactPage from './Component/ContactPage'
import SupportPage from './Component/SupportPage'
import CircleCursor from './Component/CircleCursor'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <div className="consultancy-app">
          <CircleCursor />
          <Routes>
            <Route path="/" element={<ConsultancyHome />} />
            <Route path="/consultation-booking" element={<ConsultationBooking />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/countries" element={<CountriesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      ) : (
        <main className="app-shell">
          <div className="background-glow" />
          <LoginForm onLoginSuccess={() => setIsLoggedIn(true)} />
        </main>
      )}
    </BrowserRouter>
  )
}

export default App

