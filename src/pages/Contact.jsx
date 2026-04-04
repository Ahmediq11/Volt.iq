import { useState } from 'react';
import { useLang } from '../context/LangContext';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Contact() {
  const { t, lang } = useLang();
  const c = t.contact;
  const align = lang === 'ar' ? 'right' : 'left';
  const heroRef = useScrollReveal();

  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', phone: '', service: '', message: '' });
  };

  const services = t.services.items.map(s => s.title);

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
        <div className="orb orb-cyan" style={{ top: '-10%', right: '10%', opacity: 0.6 }} />
        <div className="container">
          <div ref={heroRef} className="reveal" style={{ textAlign: align }}>
            <div className="section-label">📞 {c.title}</div>
            <h1 className="section-title">{c.title}</h1>
            <p className="section-sub">{c.subtitle}</p>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="contact__layout">
            {/* Left: Info */}
            <div className="contact__info">
              {/* WhatsApp card */}
              <a
                href="https://wa.me/9647742493300"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-card"
                style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}
              >
                <div className="contact-info-icon green">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#25D366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.82 11.82 0 0020.885 3.49" />
                  </svg>
                </div>
                <div>
                  <h4>WhatsApp</h4>
                  <p>{c.whatsapp}</p>
                </div>
              </a>

              {/* Location */}
              <div className="contact-info-card">
                <div className="contact-info-icon gold">📍</div>
                <div>
                  <h4>{lang === 'ar' ? 'الموقع' : 'Location'}</h4>
                  <p>{c.location}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="contact-info-card">
                <div className="contact-info-icon blue">🕐</div>
                <div>
                  <h4>{lang === 'ar' ? 'ساعات العمل' : 'Working Hours'}</h4>
                  <p>{lang === 'ar' ? 'السبت – الخميس: 9ص – 6م' : 'Sat – Thu: 9AM – 6PM'}</p>
                </div>
              </div>

              {/* Tagline */}
              <div style={{
                padding: '28px',
                background: 'var(--gold-dim)',
                border: '1px solid var(--border-gold)',
                borderRadius: 'var(--radius-md)',
                textAlign: align,
              }}>
                <div style={{ fontSize: '1.5rem', marginBottom: 10 }}>⚡</div>
                <p style={{ color: 'var(--gold)', fontWeight: 700, lineHeight: 1.6 }}>
                  {lang === 'ar'
                    ? 'نرد على استفساراتك خلال ساعات. استشارتك الأولى مجانية تماماً.'
                    : 'We respond within hours. Your first consultation is completely free.'}
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="contact__form">
              <h2 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: 28, textAlign: align }}>
                {lang === 'ar' ? '✉️ أرسل لنا رسالة' : '✉️ Send us a Message'}
              </h2>

              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div className="form-group">
                    <label className="form-label">{c.form.name}</label>
                    <input
                      className="form-input"
                      type="text"
                      placeholder={lang === 'ar' ? 'محمد علي' : 'John Smith'}
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">{c.form.phone}</label>
                    <input
                      className="form-input"
                      type="tel"
                      placeholder={lang === 'ar' ? '07XX XXX XXXX' : '07XX XXX XXXX'}
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">{c.form.service}</label>
                  <select
                    className="form-input"
                    value={form.service}
                    onChange={e => setForm({ ...form, service: e.target.value })}
                    required
                  >
                    <option value="">{lang === 'ar' ? '— اختر الخدمة —' : '— Select Service —'}</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">{c.form.message}</label>
                  <textarea
                    className="form-input"
                    rows={5}
                    placeholder={lang === 'ar' ? 'أخبرنا عن مشروعك...' : 'Tell us about your project...'}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    required
                  />
                </div>

                <button type="submit" className="form-submit">
                  {c.form.submit}
                </button>

                {sent && (
                  <div className="form-success">{c.form.success}</div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
