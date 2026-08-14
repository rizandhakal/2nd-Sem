import PageLayout from './PageLayout'

const ServicesPage = () => (
  <PageLayout
    title="Our Services"
    subtitle="Comprehensive support for every stage of your international education journey."
  >
    <div className="info-grid">
      <div className="info-box">
        <h3>University Selection</h3>
        <p>We help you choose the best universities based on your profile, budget, and goals.</p>
      </div>
      <div className="info-box">
        <h3>Application Assistance</h3>
        <p>From document review to deadline tracking, we ensure a smooth application process.</p>
      </div>
      <div className="info-box">
        <h3>Visa Support</h3>
        <p>Our team guides students through the visa process with clarity and step-by-step help.</p>
      </div>
      <div className="info-box">
        <h3>Scholarship Guidance</h3>
        <p>We identify scholarship options that help reduce the cost of international education.</p>
      </div>
    </div>
  </PageLayout>
)

export default ServicesPage
