import { useLang } from '../context/LangContext';
import useScrollReveal from '../hooks/useScrollReveal';

export default function About() {
  const { t, lang } = useLang();
  const a = t.about;
  const align = lang === 'ar' ? 'right' : 'left';

  const heroRef = useScrollReveal();
  const vmRef = useScrollReveal();
  const goalsRef = useScrollReveal();

  return (
    <div className="page-enter">
      {/* Header */}
      <div style={{
        paddingTop: 140,
        paddingBottom: 80,
        background: 'linear-gradient(180deg, var(--bg-surface) 0%, var(--bg-base) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div className="grid-bg" />
        <div className="orb orb-cyan" style={{ top: '-10%', left: '10%', opacity: 0.6 }} />
        <div className="container">
          <div ref={heroRef} className="reveal" style={{ textAlign: align }}>
            <div className="section-label">🏢 {a.badge}</div>
            <h1 className="section-title">{a.title}</h1>
            <p className="section-sub" style={{ maxWidth: 580 }}>{a.intro}</p>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <section className="section">
        <div className="container">
          <div ref={vmRef} className="reveal" style={{ textAlign: align, marginBottom: 48 }}>
            <div className="section-label">
              {lang === 'ar' ? '📖 رؤيتنا ورسالتنا' : '📖 Vision & Mission'}
            </div>
          </div>
          <div className="vision-mission">
            <div className="vm-card reveal" ref={useScrollReveal()}>
              <div className="vm-label">
                {lang === 'ar' ? '👁️ رؤيتنا' : '👁️ Vision'}
              </div>
              <h3>{a.vision.title}</h3>
              <p>{a.vision.text}</p>
            </div>
            <div className="vm-card mission reveal" ref={useScrollReveal()} style={{ '--bottom-color': 'var(--cyan)' }}>
              <div className="vm-label cyan">
                {lang === 'ar' ? '🎯 مهمتنا' : '🎯 Mission'}
              </div>
              <h3>{a.mission.title}</h3>
              <p>{a.mission.text}</p>
            </div>
          </div>

          {/* Why Wattiq block */}
          <div style={{
            background: 'linear-gradient(135deg, var(--bg-card) 0%, rgba(214,141,18,0.03) 100%)',
            border: '1px solid var(--border-gold)',
            borderRadius: 'var(--radius-xl)',
            padding: '48px',
            marginBottom: 80,
            position: 'relative',
            overflow: 'hidden',
            textAlign: align,
          }} className="reveal" ref={useScrollReveal()}>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(ellipse 50% 80% at 80% 50%, rgba(245,170,35,0.06), transparent)',
            }} />
            <div className="section-label" style={{ marginBottom: 20 }}>
              {lang === 'ar' ? '⭐ لماذا Volt.iq؟' : '⭐ Why Volt.iq?'}
            </div>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: 20 }}>
              {lang === 'ar'
                ? 'نبني بالمواصفات الدولية، ونُسلّم بالوعد العراقي'
                : 'Built to International Standards, Delivered with Iraqi Commitment'}
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.8, maxWidth: 680, position: 'relative' }}>
              {lang === 'ar'
                ? 'Volt.iq ليست مجرد شركة هندسية — نحن شركاؤك في بناء مستقبل آمن ومتكامل. نجمع بين الخبرة التقنية العالية والفهم العميق لاحتياجات السوق العراقي لنقدم حلولاً تدوم.'
                : 'Volt.iq isn\'t just an engineering firm — we\'re your partner in building a safe and integrated future. We combine deep technical expertise with a thorough understanding of the Iraqi market to deliver solutions that last.'}
            </p>
          </div>

          {/* Goals */}
          <div ref={goalsRef} className="reveal" style={{ textAlign: align, marginBottom: 40 }}>
            <div className="section-label">🎯 {a.goals.title}</div>
          </div>
          <div className="goals__grid">
            {a.goals.items.map((g, i) => (
              <div key={g.num} className={`goal-card reveal reveal-delay-${Math.min(i+1,4)}`} ref={useScrollReveal()}>
                <div className="goal-num">{g.num}</div>
                <h4>{g.title}</h4>
                <p>{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
