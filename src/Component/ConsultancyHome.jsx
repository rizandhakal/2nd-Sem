import { Link, useNavigate } from 'react-router-dom'
import bcImage from '../assets/bc.jpg'
import miranaLogo from '../assets/MIrana.jpg'

const ConsultancyHome = () => {
  const navigate = useNavigate()

  const handleConsultationClick = () => {
    navigate('/consultation-booking')
  }

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

      {/* Why Choose Mirana Section */}
      <section className="why-choose-section">
        <div className="section-container">
          <h2>Why Choose Mirana?</h2>
          <p className="section-subtitle">Your trusted partner in international education</p>
          <div className="features-grid">
            <div className="feature-card">
              <h3>🎓 Expert Guidance</h3>
              <p>Personalized counseling from experienced education consultants with industry expertise</p>
            </div>
            <div className="feature-card">
              <h3>🌍 Global Network</h3>
              <p>Strong partnerships with universities and institutions across multiple countries</p>
            </div>
            <div className="feature-card">
              <h3>📋 End-to-End Support</h3>
              <p>Complete assistance from university selection through visa processing and arrival</p>
            </div>
            <div className="feature-card">
              <h3>💰 Scholarship Access</h3>
              <p>Exclusive access to scholarships and financial aid opportunities worth millions</p>
            </div>
            <div className="feature-card">
              <h3>✅ Proven Success</h3>
              <p>95% university placement rate with thousands of satisfied students worldwide</p>
            </div>
            <div className="feature-card">
              <h3>🤝 Career Support</h3>
              <p>Job placement assistance and internship opportunities post-graduation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="services-overview">
        <div className="section-container">
          <h2>Our Comprehensive Services</h2>
          <div className="services-list">
            <div className="service-item">
              <div className="service-icon">📚</div>
              <h3>University Selection</h3>
              <p>Expert analysis of your profile to identify ideal universities matching your academic goals and aspirations</p>
            </div>
            <div className="service-item">
              <div className="service-icon">📝</div>
              <h3>Application Assistance</h3>
              <p>Complete guidance through application portals, essay writing, and document preparation</p>
            </div>
            <div className="service-item">
              <div className="service-icon">🎯</div>
              <h3>IELTS/TOEFL Prep</h3>
              <p>Coaching and resources to achieve competitive scores in English proficiency tests</p>
            </div>
            <div className="service-item">
              <div className="service-icon">✈️</div>
              <h3>Visa Processing</h3>
              <p>Comprehensive support for student visa applications including document verification and interviews</p>
            </div>
            <div className="service-item">
              <div className="service-icon">🏨</div>
              <h3>Accommodation Help</h3>
              <p>Assistance in finding suitable accommodation options and pre-arrival arrangements</p>
            </div>
            <div className="service-item">
              <div className="service-icon">💼</div>
              <h3>Career Planning</h3>
              <p>Career counseling and job search support to help you succeed after graduation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Universities Section */}
      <section className="featured-universities">
        <div className="section-container">
          <h2>Featured Partner Universities</h2>
          <div className="university-grid">
            <div className="university-card">
              <h4>University of Melbourne</h4>
              <p>Australia</p>
              <small>World Ranking: #37</small>
            </div>
            <div className="university-card">
              <h4>University of Oxford</h4>
              <p>United Kingdom</p>
              <small>World Ranking: #3</small>
            </div>
            <div className="university-card">
              <h4>University of Toronto</h4>
              <p>Canada</p>
              <small>World Ranking: #25</small>
            </div>
            <div className="university-card">
              <h4>University of Auckland</h4>
              <p>New Zealand</p>
              <small>World Ranking: #85</small>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="section-container">
          <h2>Student Success Stories</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">"Mirana's team made my university selection process smooth and stress-free. I'm now studying at University of Melbourne!"</p>
              <p className="testimonial-author">- Yatin Sharma, Dubai</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">"The visa guidance and document preparation support was exceptional. Highly recommended for anyone planning to study abroad."</p>
              <p className="testimonial-author">- Bishal Shrestha, UK</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">"Mirana not only helped me get into my dream university but also secured a scholarship. Grateful for their dedication!"</p>
              <p className="testimonial-author">- Amir Shrestha, Canada</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="statistics">
        <div className="section-container">
          <h2>Our Impact</h2>
          <div className="stats-grid">
            <div className="stat-box">
              <h3>5000+</h3>
              <p>Students Guided</p>
            </div>
            <div className="stat-box">
              <h3>95%</h3>
              <p>Success Rate</p>
            </div>
            <div className="stat-box">
              <h3>50+</h3>
              <p>Partner Universities</p>
            </div>
            <div className="stat-box">
              <h3>5</h3>
              <p>Countries Covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="section-container cta-content">
          <h2>Ready to Start Your International Education Journey?</h2>
          <p>Get personalized guidance from our expert consultants</p>
          <button type="button" className="cta-button" onClick={handleConsultationClick}>Schedule a Free Consultation</button>
        </div>
      </section>
    </div>
  )
}

export default ConsultancyHome
