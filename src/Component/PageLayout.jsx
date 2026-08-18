import { Link } from 'react-router-dom'
import MiranaLogo from '../assets/MIrana.jpg'
import BackgroundImage from '../assets/bc.jpg'

const PageLayout = ({ title, subtitle, children }) => {
  return (
    <div className="page-layout" style={{backgroundImage: `url(${BackgroundImage})`}}>
      <div className="page-background-overlay"></div>
      <header className="page-header">
        <div className="page-brand">
          <img src={MiranaLogo} alt="Mirana" className="brand-logo" />
          <span>Mirana</span>
        </div>
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
