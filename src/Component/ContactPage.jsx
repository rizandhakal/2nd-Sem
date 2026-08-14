import PageLayout from './PageLayout'

const ContactPage = () => (
  <PageLayout
    title="Contact Us"
    subtitle="Let’s talk about your study plans and the right next step for you."
  >
    <div className="contact-list">
      <div className="contact-item">
        <strong>Email</strong>
        <a href="mailto:miranaintl.edu@gmail.com?subject=Study%20Consultation" className="contact-link">
          miranaintl.edu@gmail.com
        </a>
      </div>
      <div className="contact-item">
        <strong>Phone</strong>
        <a href="tel:+9779861410002" className="contact-link">
          +977 9861410002
        </a>
      </div>
      <div className="contact-item">
        <strong>Office</strong>
        <p>Kathmandu, Nepal</p>
      </div>
    </div>
  </PageLayout>
)

export default ContactPage
