import { Link } from 'react-router-dom'

const PageLayout = ({ title, subtitle, children }) => {
  return (
    <div className="page-layout">
      <header className="page-header">
        <div className="page-brand">Mirana</div>
        <nav className="page-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/countries">Countries</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/support">Support</Link>
        </nav>
      </header>

      <main className="page-content">
        <div className="page-card">
          <p className="page-kicker">Mirana Education Consultancy</p>
          <h1>{title}</h1>
          <p className="page-subtitle">{subtitle}</p>
          {children}
        </div>
      </main>
    </div>
  )
}

export default PageLayout
