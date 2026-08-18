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
        <h4>Top Universities:</h4>
        <ul>
          <li><strong>University of Melbourne</strong> - Ranked #1 in Australia, excellence in research</li>
          <li><strong>Australian National University (ANU)</strong> - World-leading research and education</li>
          <li><strong>University of Sydney</strong> - Strong programs in Business, Engineering, and Law</li>
          <li><strong>UNSW Sydney</strong> - Innovation-focused with excellent tech programs</li>
          <li><strong>University of Queensland</strong> - Leading research in sciences and medicine</li>
        </ul>
        <p><em>Post-study work visa available for up to 2-3 years depending on qualification.</em></p>
      </div>

      <div className="info-box">
        <h3>United Kingdom</h3>
        <p>World-class universities and globally recognized degrees with strong industry value.</p>
        <h4>Top Universities:</h4>
        <ul>
          <li><strong>University of Oxford</strong> - Oldest university in UK, world-renowned excellence</li>
          <li><strong>University of Cambridge</strong> - Historic institution with exceptional academics</li>
          <li><strong>Imperial College London</strong> - Specialist in Science, Engineering & Medicine</li>
          <li><strong>London School of Economics (LSE)</strong> - Premier business and social sciences</li>
          <li><strong>University College London (UCL)</strong> - Leading research and teaching</li>
        </ul>
        <p><em>Post-study work visa: 2 years for Bachelor's, 3 years for Master's and above.</em></p>
      </div>

      <div className="info-box">
        <h3>Canada</h3>
        <p>Excellent academic standards, welcoming communities, and a strong immigration pathway.</p>
        <h4>Top Universities:</h4>
        <ul>
          <li><strong>University of Toronto</strong> - Canada's #1 university, strong in all disciplines</li>
          <li><strong>McGill University</strong> - Prestigious institution in Montreal</li>
          <li><strong>University of British Columbia (UBC)</strong> - Top-ranked on West Coast</li>
          <li><strong>McMaster University</strong> - Innovation-focused with excellent engineering</li>
          <li><strong>University of Alberta</strong> - Strong in research and professional programs</li>
        </ul>
        <p><em>Post-study work permit: Up to 3 years available. Pathway to permanent residency.</em></p>
      </div>

      <div className="info-box">
        <h3>United States of America</h3>
        <p>World-leading education system with diverse universities and global recognition.</p>
        <h4>Top Universities:</h4>
        <ul>
          <li><strong>Harvard University</strong> - Ivy League institution, prestigious worldwide</li>
          <li><strong>Stanford University</strong> - Innovation hub in Silicon Valley</li>
          <li><strong>MIT</strong> - Leading in Science, Technology, Engineering & Mathematics</li>
          <li><strong>Yale University</strong> - Elite institution with strong liberal arts focus</li>
          <li><strong>University of California (Berkeley)</strong> - Top public research university</li>
        </ul>
        <p><em>Optional Practical Training (OPT): 1-3 years work authorization after graduation.</em></p>
      </div>
    </div>
  </PageLayout>
)

export default CountriesPage
