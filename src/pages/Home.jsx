import { Link } from 'react-router-dom';
import { useLang } from '../context/LangContext';
import useScrollReveal from '../hooks/useScrollReveal';

const imageMap = {
  panels: '/images/electrical_panels_real_1775309704920.png',
  smarthome: '/images/smart_home_real_1775309721550.png',
  fire: '/images/fire_alarm_real_1775309737492.png',
  internet: '/images/internet_infrastructure_real_1775309757478.png',
  tv: '/images/tv_satellite_real_1775309775859.png'
};

function ServiceCard({ item, delay }) {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className={`service-card reveal reveal-delay-${delay}`}>
      <div style={{ marginBottom: 20, borderRadius: 'var(--radius-md)', overflow: 'hidden', height: 160, border: '1px solid var(--border)' }}>
        <img src={imageMap[item.id]} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <h3>{item.title}</h3>
      <p>{item.desc}</p>
      <div className="service-detail">{item.detail}</div>
    </div>
  );
}

function PillarCard({ item, delay }) {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className={`pillar-card reveal reveal-delay-${delay}`}>
      <div className="pillar-icon">{item.icon}</div>
      <div>
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
      </div>
    </div>
  );
}

function StatCard({ stat, delay }) {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className={`stat-card reveal reveal-delay-${delay}`}>
      <div className="stat-value">{stat.value}</div>
      <div className="stat-label">{stat.label}</div>
    </div>
  );
}

function TestimonialCard({ item, delay }) {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className={`testimonial-card reveal reveal-delay-${delay}`}>
      <div className="quote-icon">"</div>
      <p>{item.text}</p>
      <div className="testimonial-author">
        <div className="author-avatar">{item.name[0]}</div>
        <div>
          <div className="author-name">{item.name}</div>
          <div className="author-role">{item.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { t, lang } = useLang();
  const heroRef = useScrollReveal();
  const servicesRef = useScrollReveal();
  const whyRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  return (
    <div className="page-enter">
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero__bg" />
        <div className="grid-bg" />
        <div className="orb orb-gold" style={{ top: '-10%', right: '10%' }} />
        <div className="orb orb-cyan" style={{ bottom: '10%', left: '5%' }} />

        {/* Decorative SVG */}
        <svg className="hero__deco" viewBox="0 0 600 700" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F5AA23" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#00C2FF" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
          {/* Circuit board lines */}
          <line x1="100" y1="200" x2="300" y2="200" stroke="url(#g1)" strokeWidth="1.5"/>
          <line x1="300" y1="200" x2="300" y2="350" stroke="url(#g1)" strokeWidth="1.5"/>
          <line x1="300" y1="350" x2="500" y2="350" stroke="url(#g1)" strokeWidth="1.5"/>
          <line x1="200" y1="100" x2="200" y2="300" stroke="#F5AA23" strokeWidth="1" strokeOpacity="0.3"/>
          <line x1="200" y1="300" x2="400" y2="300" stroke="#F5AA23" strokeWidth="1" strokeOpacity="0.3"/>
          <line x1="400" y1="300" x2="400" y2="500" stroke="#F5AA23" strokeWidth="1" strokeOpacity="0.3"/>
          <line x1="150" y1="450" x2="450" y2="450" stroke="#00C2FF" strokeWidth="1" strokeOpacity="0.2"/>
          <line x1="450" y1="450" x2="450" y2="600" stroke="#00C2FF" strokeWidth="1" strokeOpacity="0.2"/>
          {/* Nodes */}
          <circle cx="300" cy="200" r="5" fill="#F5AA23" fillOpacity="0.7"/>
          <circle cx="300" cy="350" r="5" fill="#F5AA23" fillOpacity="0.5"/>
          <circle cx="200" cy="300" r="4" fill="#F5AA23" fillOpacity="0.4"/>
          <circle cx="400" cy="300" r="6" fill="#F5AA23" fillOpacity="0.6"/>
          <circle cx="450" cy="450" r="4" fill="#00C2FF" fillOpacity="0.5"/>
          <circle cx="150" cy="450" r="3" fill="#00C2FF" fillOpacity="0.3"/>
          {/* IC chips */}
          <rect x="260" y="390" width="80" height="50" rx="4" fill="none" stroke="#F5AA23" strokeWidth="1.5" strokeOpacity="0.4"/>
          <rect x="370" y="250" width="60" height="40" rx="4" fill="none" stroke="#00C2FF" strokeWidth="1" strokeOpacity="0.3"/>
          <rect x="120" y="160" width="70" height="50" rx="4" fill="none" stroke="#F5AA23" strokeWidth="1" strokeOpacity="0.25"/>
          {/* Dots */}
          {[100,150,200,250,300,350,400,450,500].map(x => 
            [150,250,380,500,620].map(y => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="1.5" fill="#F5AA23" fillOpacity="0.12"/>
            ))
          )}
        </svg>

        <div className="container">
          <div className="hero__content" ref={heroRef}>
            <div className="hero__badge">{t.hero.badge}</div>
            <h1 className="hero__title">
              {t.hero.headline1}<br />
              <span className="gradient-text">{t.hero.headline2}</span>
            </h1>
            <p className="hero__sub">{t.hero.sub}</p>
            <div className="hero__actions">
              <Link to="/contact" className="btn-primary">
                {t.hero.cta} →
              </Link>
              <Link to="/services" className="btn-secondary">
                {t.hero.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>

        <div className="hero__scroll">
          <div className="hero__scroll-line" />
          <span>{lang === 'ar' ? 'اكتشف' : 'Scroll'}</span>
        </div>
      </section>

      {/* ===== SERVICES STRIP ===== */}
      <section className="section" id="services">
        <div className="container">
          <div ref={servicesRef} className="reveal" style={{ textAlign: lang === 'ar' ? 'right' : 'left' }}>
            <div className="section-label">⚡ {t.services.title}</div>
            <h2 className="section-title">{t.services.subtitle}</h2>
          </div>
          <div className="services__grid">
            {t.services.items.map((item, i) => (
              <ServiceCard key={item.id} item={item} delay={Math.min(i + 1, 4)} />
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ===== WHY WATTIQ ===== */}
      <section className="section" id="why">
        <div className="container">
          <div ref={whyRef} className="reveal" style={{ textAlign: lang === 'ar' ? 'right' : 'left', marginBottom: 56 }}>
            <div className="section-label">🛡️ {t.whyUs.title}</div>
            <h2 className="section-title">{t.whyUs.subtitle}</h2>
          </div>
          <div className="why-us__layout">
            <div className="why-us__pillars">
              {t.whyUs.pillars.map((p, i) => (
                <PillarCard key={p.title} item={p} delay={i + 1} />
              ))}
            </div>
            <div className="why-us__stats">
              {t.whyUs.stats.map((s, i) => (
                <StatCard key={s.label} stat={s} delay={i + 1} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ===== FEATURED PROJECT ===== */}
      <section className="section">
        <div className="container">
          <div className="featured-project reveal" ref={useScrollReveal()}>
            <div className="featured-project__visual">🏙️</div>
            <div className="featured-project__body">
              <div className="section-label">
                {lang === 'ar' ? '🏆 مشروع مميز' : '🏆 Featured Project'}
              </div>
              <h3>
                {lang === 'ar' ? 'برج تجاري — الكرادة، بغداد' : 'Commercial Tower — Karada, Baghdad'}
              </h3>
              <p>
                {lang === 'ar'
                  ? 'تصميم وتنفيذ كامل للبنية الكهربائية لبرج تجاري من 12 طابقاً. يشمل المشروع لوحات كهربائية رئيسية، شبكة إنترنت مؤسسية، نظام إنذار حريق متكامل، وتمديدات شبكة التوزيع الرئيسية.'
                  : 'Complete design and execution of electrical infrastructure for a 12-floor commercial tower. Includes main panels, enterprise internet, integrated fire alarm system, and main distribution wiring.'}
              </p>
              <Link to="/projects" className="btn-secondary" style={{ width: 'fit-content' }}>
                {lang === 'ar' ? 'عرض جميع المشاريع' : 'View All Projects'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ===== TESTIMONIALS ===== */}
      <section className="section">
        <div className="container">
          <div className="reveal" ref={useScrollReveal()} style={{ textAlign: lang === 'ar' ? 'right' : 'left' }}>
            <div className="section-label">💬 {t.testimonials.title}</div>
          </div>
          <div className="testimonials__grid">
            {t.testimonials.items.map((item, i) => (
              <TestimonialCard key={item.name} item={item} delay={i + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="section" style={{ paddingBottom: 'var(--section-py)' }}>
        <div ref={ctaRef} className="cta-banner reveal">
          <h2 className="gradient-text">{t.cta.title}</h2>
          <p>{t.cta.sub}</p>
          <a
            href="https://wa.me/9647801234567"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-banner__btn"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.82 11.82 0 0020.885 3.49"/>
            </svg>
            {t.cta.btn}
          </a>
        </div>
      </section>
    </div>
  );
}
