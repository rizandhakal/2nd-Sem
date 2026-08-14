import PageLayout from './PageLayout'

const SupportPage = () => (
  <PageLayout
    title="Support"
    subtitle="We are here to support you before, during, and after your application process."
  >
    <div className="info-grid">
      <div className="info-box">
        <h3>Pre-application Help</h3>
        <p>We guide students in choosing the right courses, universities, and destinations.</p>
      </div>
      <div className="info-box">
        <h3>Application Tracking</h3>
        <p>Our team monitors your progress and keeps everything on schedule.</p>
      </div>
      <div className="info-box">
        <h3>Visa & Arrival Support</h3>
        <p>We help with document preparation and the steps you need after approval.</p>
      </div>
    </div>
  </PageLayout>
)

export default SupportPage
