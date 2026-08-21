import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import miranaLogo from '../assets/MIrana.jpg'
import chpImage from '../assets/CHP.jpg'

const ConsultationBooking = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    contact: '',
    email: '',
    address: '',
    visitedCountry: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      navigate('/')
    }, 2000)
  }

  return (
    <div className="consultation-booking-page">
      <img src={chpImage} alt="Background" className="booking-background-image" />
      <div className="booking-overlay" />

      <header className="booking-header">
        <div className="booking-brand-wrap">
          <img src={miranaLogo} alt="Mirana logo" className="booking-brand-mark" />
          <div className="booking-brand-text">MIRANA</div>
        </div>
        <nav className="booking-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/countries">Countries</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/support">Support</Link>
        </nav>
      </header>

      <div className="booking-container">
        <div className="booking-card">
          <h1>Schedule Your Free Consultation</h1>
          <p className="booking-subtitle">
            Fill out the form below and our expert consultants will reach out to you shortly
          </p>

          {submitted ? (
            <div className="success-message">
              <h2>✓ Thank You!</h2>
              <p>Your consultation request has been submitted successfully.</p>
              <p>Our team will contact you soon to schedule your consultation.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="consultation-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your first name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="middleName">Middle Name</label>
                  <input
                    type="text"
                    id="middleName"
                    name="middleName"
                    value={formData.middleName}
                    onChange={handleChange}
                    placeholder="Enter your middle name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact">Contact Number *</label>
                  <input
                    type="tel"
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="address">Address *</label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full address"
                  rows="3"
                />Add
              </div>

              <div className="form-group full-width">
                <label htmlFor="visitedCountry">Have you visited any country before? *</label>
                <select
                  id="visitedCountry"
                  name="visitedCountry"
                  value={formData.visitedCountry}
                  onChange={handleChange}
                  required
                >
                  <option value="">-- Select an option --</option>
                  <option value="yes-australia">Yes - Australia</option>
                  <option value="yes-uk">Yes - United Kingdom</option>
                  <option value="yes-canada">Yes - Canada</option>
                  <option value="yes-newzealand">Yes - New Zealand</option>
                  <option value="yes-usa">Yes - USA</option>
                  <option value="yes-other">Yes - Other</option>
                  <option value="no">No - This is my first time</option>
                </select>
              </div>

              <button type="submit" className="submit-btn">
                Submit Consultation Request
              </button>
            </form>
          )}
        </div>
      </div>

      <footer className="booking-footer">
        <p>&copy; 2024 MIRANA Education Consultancy. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default ConsultationBooking
