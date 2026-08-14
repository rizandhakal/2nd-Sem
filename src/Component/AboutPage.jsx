import PageLayout from './PageLayout'

const AboutPage = () => (
  <PageLayout
    title="About Us"
    subtitle="We help students build a confident path to global education and successful careers."
  >
    <div className="info-grid">
      <div className="info-box">
        <h3>Our Mission</h3>
        <p>
          To make studying abroad accessible, transparent, and tailored for every
          student and family we serve.
        </p>
      </div>
      <div className="info-box">
        <h3>Our Vision</h3>
        <p>
          To become a trusted education partner known for quality guidance, honest
          support, and life-changing opportunities.
        </p>
      </div>
      <div className="info-box">
        <h3>Why Choose Us</h3>
        <p>
          Personalized counselling, admissions support, visa guidance, and long-term
          career planning for students across the world.
        </p>
      </div>
    </div>
  </PageLayout>
)

export default AboutPage
