import { Link } from 'react-router-dom';
import { useLang } from '../context/LangContext';

export default function Footer() {
  const { t, lang } = useLang();
  const f = t.footer;
  const n = t.nav;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="navbar__logo" style={{ marginBottom: 12 }}>
              <div className="navbar__logo-icon">⚡</div>
              <span style={{ fontSize: '1.3rem', fontWeight: 800 }}>Volt.iq</span>
            </div>
            <p>{f.tagline}</p>
          </div>
          <div className="footer__col">
            <h5>{lang === 'ar' ? 'التنقل' : 'Navigation'}</h5>
            <ul>
              <li><Link to="/services">{n.services}</Link></li>
              <li><Link to="/about">{n.about}</Link></li>
              <li><Link to="/projects">{n.projects}</Link></li>
              <li><Link to="/contact">{n.contact}</Link></li>
            </ul>
          </div>
          <div className="footer__col">
            <h5>{lang === 'ar' ? 'خدماتنا' : 'Services'}</h5>
            <ul>
              {t.services.items.slice(0, 4).map(s => (
                <li key={s.id}><Link to="/services">{s.title}</Link></li>
              ))}
            </ul>
          </div>
          <div className="footer__col">
            <h5>{lang === 'ar' ? 'تواصل' : 'Connect'}</h5>
            <ul>
              <li>
                <a href="https://wa.me/9647742493300" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>{f.rights}</span>
        </div>
      </div>
    </footer>
  );
}
