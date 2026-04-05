import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLang } from '../context/LangContext';

export default function Navbar() {
  const { t, lang, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const links = [
    { href: '/services', label: t.nav.services },
    { href: '/about', label: t.nav.about },
    { href: '/projects', label: t.nav.projects },
    { href: '/contact', label: t.nav.contact },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar__inner">
          <Link to="/" className="navbar__logo">
            <div className="navbar__logo-icon">⚡</div>
            <span>Volt.iq</span>
          </Link>

          <ul className="navbar__links">
            {links.map(l => (
              <li key={l.href}>
                <Link to={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>

          <div className="navbar__actions">
            <button className="lang-btn" onClick={toggle}>
              🌐 {lang === 'ar' ? 'EN' : 'عربي'}
            </button>
            <Link to="/contact" className="btn-primary" style={{ display: 'none' }}>
              {t.nav.cta}
            </Link>
            <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {links.map(l => (
          <Link to={l.href} key={l.href}>{l.label}</Link>
        ))}
        <button className="lang-btn" onClick={toggle} style={{ marginTop: 8 }}>
          🌐 {lang === 'ar' ? 'English' : 'عربي'}
        </button>
        <Link to="/contact" className="btn-primary">{t.nav.cta}</Link>
      </div>
    </>
  );
}
