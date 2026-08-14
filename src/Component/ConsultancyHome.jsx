import { Link } from 'react-router-dom'
import bcImage from '../assets/bc.jpg'
import miranaLogo from '../assets/MIrana.jpg'

const ConsultancyHome = () => {
  return (
    <div className="consultancy-page">
      <img src={bcImage} alt="Background" className="background-image" />
      <div className="overlay" />

      <header className="topbar">
        <div className="brand-wrap">
          <img src={miranaLogo} alt="Mirana logo" className="brand-mark" />
          <div className="brand-text">MIRANA</div>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/countries">Countries</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/support">Support</Link>
        </nav>
      </header>

      <main className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">Mirana  Education Consultancy</span>
          <h1>MIRANA</h1>
          <h2>INTERNATIONAL EDUCATION</h2>
          <p>
            We guide students toward world-class universities and career opportunities
            across Australia, the UK, New Zealand, Canada, and beyond. From admissions
            to visa support, our team provides trusted, student-focused consultancy.
          </p>

          <div className="hero-actions">
            <button type="button" className="primary-btn">Book a Counselling</button>
            <button type="button" className="secondary-btn">Explore Programs</button>
          </div>

          <div className="hero-tags">
            <span>Australia</span>
            <span>UK</span>
            <span>New Zealand</span>
            <span>Canada</span>
          </div>
        </div>

        <div className="hero-panel">
          <div className="panel-card">
            <p className="card-label">Success Rate</p>
            <h3>95%</h3>
            <span>University placement support</span>
          </div>
          <div className="panel-card small">
            <p className="card-label">Students</p>
            <h3>5000+</h3>
            <span>Guided globally</span>
          </div>
        </div>
      </main>

      <section className="info-strip">
        <div>
          <strong>Study Abroad</strong>
          <span>University selection & admission</span>
        </div>
        <div>
          <strong>Visa Guidance</strong>
          <span>Support from application to approval</span>
        </div>
        <div>
          <strong>Scholarships</strong>
          <span>Access to funding opportunities</span>
        </div>
      </section>
    </div>
  )
}

export default ConsultancyHome
