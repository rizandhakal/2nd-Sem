import PageLayout from './PageLayout'

const Home = () => (
  <PageLayout
    title="Welcome to Your University Journey"
    subtitle="Your trusted partner in global higher education consultancy"
  >
    {/* Hero Section */}
    <div className="hero-section">
      <h2>Unlock Your Academic Potential Worldwide</h2>
      <p>We help students like you achieve their dreams of studying at top universities across the globe.</p>
    </div>

    {/* About Section */}
    <div className="home-section">
      <h2>About Our University Consultancy</h2>
      <p>
        We are dedicated to guiding students through the complex journey of international higher education. 
        With years of experience and thousands of successful placements, we provide personalized counseling 
        and support to help you find the perfect university and program.
      </p>
      <div className="features-grid">
        <div className="feature-card">
          <h3>Expert Guidance</h3>
          <p>Our consultants have deep knowledge of universities worldwide and admission requirements.</p>
        </div>
        <div className="feature-card">
          <h3>Personalized Support</h3>
          <p>Individual attention to your profile, goals, and aspirations from start to finish.</p>
        </div>
        <div className="feature-card">
          <h3>Proven Track Record</h3>
          <p>Thousands of students successfully placed in top universities globally.</p>
        </div>
      </div>
    </div>

    {/* Featured Universities Section */}
    <div className="home-section">
      <h2>Featured Universities</h2>
      <div className="universities-grid">
        <div className="uni-card">
          <h3>Top US Universities</h3>
          <ul>
            <li>Harvard University</li>
            <li>Stanford University</li>
            <li>MIT</li>
            <li>Yale University</li>
          </ul>
          <p className="visa-info"><strong>F-1 Visa:</strong> Up to 3 years OPT</p>
        </div>
        <div className="uni-card">
          <h3>UK Excellence</h3>
          <ul>
            <li>University of Oxford</li>
            <li>University of Cambridge</li>
            <li>Imperial College London</li>
            <li>LSE</li>
          </ul>
          <p className="visa-info"><strong>Student Visa:</strong> 2-3 years PSW</p>
        </div>
        <div className="uni-card">
          <h3>Australian Leaders</h3>
          <ul>
            <li>University of Melbourne</li>
            <li>Australian National University</li>
            <li>University of Sydney</li>
            <li>UNSW Sydney</li>
          </ul>
          <p className="visa-info"><strong>Student Visa:</strong> 2-3 years work</p>
        </div>
        <div className="uni-card">
          <h3>Canadian Institutes</h3>
          <ul>
            <li>University of Toronto</li>
            <li>McGill University</li>
            <li>University of British Columbia</li>
            <li>McMaster University</li>
          </ul>
          <p className="visa-info"><strong>Study Permit:</strong> Up to 3 years PGWP</p>
        </div>
      </div>
    </div>

    {/* Services Section */}
    <div className="home-section">
      <h2>Our Services</h2>
      <div className="services-list">
        <div className="service-item">
          <h3>📋 University Selection</h3>
          <p>Personalized recommendations based on your academic profile and career goals</p>
        </div>
        <div className="service-item">
          <h3>📝 Application Support</h3>
          <p>Comprehensive assistance with application forms, essays, and document preparation</p>
        </div>
        <div className="service-item">
          <h3>🎓 Admission Guidance</h3>
          <p>Expert advice on admissions requirements and procedures for each university</p>
        </div>
        <div className="service-item">
          <h3>📚 Exam Preparation</h3>
          <p>Support for IELTS, TOEFL, GMAT, GRE and other entrance exams</p>
        </div>
        <div className="service-item">
          <h3>💼 Visa Consultation</h3>
          <p>Complete guidance on student visa applications and documentation</p>
        </div>
        <div className="service-item">
          <h3>🏫 Pre-Arrival Support</h3>
          <p>Accommodation, travel arrangements, and pre-arrival orientation assistance</p>
        </div>
      </div>
    </div>

    {/* Why Choose Us */}
    <div className="home-section">
      <h2>Why Choose Us?</h2>
      <div className="reasons-grid">
        <div className="reason">
          <h3>✓ 15+ Years Experience</h3>
          <p>Extensive experience in international education consultancy</p>
        </div>
        <div className="reason">
          <h3>✓ 5000+ Students Placed</h3>
          <p>Successfully guided thousands to their dream universities</p>
        </div>
        <div className="reason">
          <h3>✓ 200+ Partner Universities</h3>
          <p>Access to top universities across USA, UK, Canada, Australia, and more</p>
        </div>
        <div className="reason">
          <h3>✓ 95% Success Rate</h3>
          <p>High placement success across all major programs and universities</p>
        </div>
        <div className="reason">
          <h3>✓ Personalized Approach</h3>
          <p>One-on-one counseling tailored to your unique profile and goals</p>
        </div>
        <div className="reason">
          <h3>✓ Affordable Services</h3>
          <p>Competitive pricing with flexible payment options</p>
        </div>
      </div>
    </div>

    {/* University Requirements Section */}
    <div className="home-section">
      <h2>General University Requirements</h2>
      <div className="requirements-container">
        <div className="requirement-box">
          <h3>Academic Requirements</h3>
          <ul>
            <li>High school diploma or equivalent</li>
            <li>Bachelor's degree (for Master's programs)</li>
            <li>Minimum GPA: 2.5-4.0 (varies by university)</li>
            <li>Strong academic transcript</li>
          </ul>
        </div>
        <div className="requirement-box">
          <h3>English Language Proficiency</h3>
          <ul>
            <li>IELTS: 6.0-7.5+ (depending on program)</li>
            <li>TOEFL: 79-100+ (iBT)</li>
            <li>PTE Academic: 50-67+</li>
            <li>DUOLINGO: 105-130+</li>
          </ul>
        </div>
        <div className="requirement-box">
          <h3>Entrance Exams</h3>
          <ul>
            <li>GMAT (Business programs)</li>
            <li>GRE (Graduate programs)</li>
            <li>SAT/ACT (Undergraduate programs)</li>
            <li>MCAT (Medical programs)</li>
          </ul>
        </div>
        <div className="requirement-box">
          <h3>Documentation</h3>
          <ul>
            <li>Passport and visa documents</li>
            <li>Bank statements (financial proof)</li>
            <li>Letters of recommendation</li>
            <li>Statement of purpose/Personal essay</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Application Timeline */}
    <div className="home-section">
      <h2>Application Timeline</h2>
      <div className="timeline">
        <div className="timeline-item">
          <h3>Months 1-3: Preparation</h3>
          <p>Research universities, prepare exams (IELTS/TOEFL/GMAT/GRE)</p>
        </div>
        <div className="timeline-item">
          <h3>Months 4-6: Application</h3>
          <p>Complete applications, submit required documents and transcripts</p>
        </div>
        <div className="timeline-item">
          <h3>Months 7-9: Wait & Interview</h3>
          <p>Attend interviews if required, wait for admission decisions</p>
        </div>
        <div className="timeline-item">
          <h3>Months 10-12: Visa & Arrangements</h3>
          <p>Apply for student visa, arrange accommodation, finalize travel plans</p>
        </div>
      </div>
    </div>

    {/* Call to Action */}
    <div className="cta-section">
      <h2>Ready to Start Your Journey?</h2>
      <p>Book a free consultation with our expert counselors today!</p>
      <button className="cta-button">Schedule Free Consultation</button>
    </div>
  </PageLayout>
)

export default Home