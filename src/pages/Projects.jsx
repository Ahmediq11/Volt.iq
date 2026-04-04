import { useState } from 'react';
import { useLang } from '../context/LangContext';
import useScrollReveal from '../hooks/useScrollReveal';

const PROJECT_EMOJIS = { 'Residential': '🏠', 'Commercial': '🏢', 'Smart Home': '🤖', 'سكني': '🏠', 'تجاري': '🏢', 'منازل ذكية': '🤖' };

export default function Projects() {
  const { t, lang } = useLang();
  const p = t.projects;
  const align = lang === 'ar' ? 'right' : 'left';

  const [activeFilter, setActiveFilter] = useState(p.filters[0]);
  const heroRef = useScrollReveal();

  const filtered = activeFilter === p.filters[0]
    ? p.items
    : p.items.filter(i => i.category === activeFilter || i.tag === activeFilter);

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
        <div className="orb orb-gold" style={{ top: '-20%', left: '30%', opacity: 0.5 }} />
        <div className="container">
          <div ref={heroRef} className="reveal" style={{ textAlign: align }}>
            <div className="section-label">🏆 {p.title}</div>
            <h1 className="section-title">{p.subtitle}</h1>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* Filters */}
          <div className="projects__filters">
            {p.filters.map(f => (
              <button
                key={f}
                className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="projects__grid">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} lang={lang} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ project, lang, index }) {
  const ref = useScrollReveal();
  const emoji = PROJECT_EMOJIS[project.category] || '⚡';

  return (
    <div ref={ref} className={`project-card reveal reveal-delay-${Math.min(index + 1, 4)}`}>
      <div className="project-card__img">
        <div className="project-card__img-inner">{emoji}</div>
        <div className="project-tag">{project.tag || project.category}</div>
        {/* Grid overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(245,170,35,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(245,170,35,0.04) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          pointerEvents: 'none',
        }} />
      </div>
      <div className="project-card__body">
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
      </div>
    </div>
  );
}
