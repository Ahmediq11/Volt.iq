import { useLang } from '../context/LangContext';
import useScrollReveal from '../hooks/useScrollReveal';

const imageMap = {
  panels: '/images/electrical_panels_real_1775309704920.png',
  smarthome: '/images/smart_home_real_1775309721550.png',
  fire: '/images/fire_alarm_real_1775309737492.png',
  internet: '/images/internet_infrastructure_real_1775309757478.png',
  tv: '/images/tv_satellite_real_1775309775859.png'
};

function ServiceDetailCard({ item, index }) {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className={`reveal reveal-delay-${Math.min(index + 1, 4)}`}
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-xl)',
        padding: '32px 32px 40px',
        transition: 'var(--transition)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'var(--border-gold)';
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = '0 20px 48px rgba(0,0,0,0.4), var(--shadow-gold)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.transform = '';
        e.currentTarget.style.boxShadow = '';
      }}
    >
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 3,
        background: `linear-gradient(90deg, var(--gold), transparent)`,
      }} />
      <div style={{ marginBottom: 24, borderRadius: 'var(--radius-md)', overflow: 'hidden', height: 200, flexShrink: 0, border: '1px solid var(--border)' }}>
        <img src={imageMap[item.id]} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 12 }}>{item.title}</h3>
      <div className="accent-line" />
      <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: 20 }}>
        {item.desc}
      </p>
      <div style={{
        padding: '16px 20px',
        background: 'var(--gold-dim)',
        border: '1px solid var(--border-gold)',
        borderRadius: 'var(--radius-sm)',
        fontSize: '0.88rem',
        color: 'var(--gold)',
      }}>
        ✓ {item.detail}
      </div>
    </div>
  );
}

export default function Services() {
  const { t, lang } = useLang();
  const heroRef = useScrollReveal();

  return (
    <div className="page-enter">
      {/* Page Header */}
      <div style={{
        paddingTop: 140,
        paddingBottom: 80,
        background: 'linear-gradient(180deg, var(--bg-surface) 0%, var(--bg-base) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div className="grid-bg" />
        <div className="orb orb-gold" style={{ top: '-20%', right: '20%', opacity: 0.7 }} />
        <div className="container">
          <div ref={heroRef} className="reveal" style={{ textAlign: lang === 'ar' ? 'right' : 'left' }}>
            <div className="section-label">⚡ {t.services.title}</div>
            <h1 className="section-title">{t.services.subtitle}</h1>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 28,
          }}>
            {t.services.items.map((item, i) => (
              <ServiceDetailCard key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div style={{ margin: '0 24px' }}>
          <div className="cta-banner">
            <h2 className="gradient-text" style={{ fontSize: 'clamp(1.8rem,4vw,2.5rem)', marginBottom: 16 }}>
              {lang === 'ar' ? 'احتاج مساعدة في اختيار الخدمة المناسبة؟' : 'Need Help Choosing the Right Service?'}
            </h2>
            <p>{t.cta.sub}</p>
            <a href="https://wa.me/9647801234567" target="_blank" rel="noopener noreferrer" className="cta-banner__btn" style={{ marginTop: 8 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.82 11.82 0 0020.885 3.49"/></svg>
              {t.cta.btn}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
