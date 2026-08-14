import PageLayout from './PageLayout'

const CountriesPage = () => (
  <PageLayout
    title="Study Destinations"
    subtitle="Explore top study destinations and choose the right place for your future."
  >
    <div className="info-grid">
      <div className="info-box">
        <h3>Australia</h3>
        <p>High-quality education, vibrant cities, and excellent post-study opportunities.</p>
      </div>
      <div className="info-box">
        <h3>United Kingdom</h3>
        <p>World-class universities and globally recognized degrees with strong industry value.</p>
      </div>
      <div className="info-box">
        <h3>New Zealand</h3>
        <p>Safe, student-friendly cities and a high-quality learning environment.</p>
      </div>
      <div className="info-box">
        <h3>Canada</h3>
        <p>Excellent academic standards, welcoming communities, and a strong immigration pathway.</p>
      </div>
    </div>
  </PageLayout>
)

export default CountriesPage
