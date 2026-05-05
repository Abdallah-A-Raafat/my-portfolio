const projects = [
  // {
  //   num: '01',
  //   name: 'NeuralHealer',
  //   tag: 'Graduation Project',
  //   role: 'Frontend & Mobile',
  //   description: 'AI-powered mental health support platform. Built the full React 19 web app and React Native mobile client, with real-time therapeutic chat via WebSocket/STOMP, multilingual support (AR/EN), and WCAG-compliant accessible UI.',
  //   stack: ['React 19', 'React Native', 'Tailwind v4', 'Zustand', 'React Query', 'i18next', 'WebSocket'],
  //   link: 'https://github.com/Abdallah-A-Raafat',
  //   accent: '#c8ff00',
  // },
  {
    num: '01',
    name: 'NeuroPulse',
    tag: 'Healthcare',
    role: 'Frontend Only',
    description: 'Real-time seizure detection dashboard. Built interactive React data visualizations consuming backend ML model outputs for EEG anomaly detection, with user-configurable alert thresholds and WCAG accessibility.',
    stack: ['React', 'Tailwind CSS', 'Data Visualization'],
    link: 'https://seizure-detection-project-7hyi.vercel.app/',
    accent: '#00d4ff',
  },
  {
    num: '02',
    name: 'Mini Games',
    tag: 'Interactive',
    role: 'Full Frontend',
    description: 'Tic-tac-toe with single-player and multiplayer modes across 3 distinct categories. Modular React component architecture with win/loss tracking, restart logic, and customizable themes.',
    stack: ['React', 'Tailwind CSS', 'State Management'],
    link: 'https://tic-tac-toe-sable-zeta.vercel.app/',
    accent: '#ff6b6b',
  },
  {
    num: '03',
    name: 'ToDo App',
    tag: 'Productivity',
    role: 'Full Frontend',
    description: 'Single-page task management app with drag-and-drop prioritization, create/edit/delete, and localStorage persistence via custom React hooks. Mobile-first, performance-optimized with React.memo.',
    stack: ['React', 'Tailwind CSS', 'localStorage', 'React hooks'],
    link: 'https://todo-beta-flax-14.vercel.app/',
    accent: '#a78bfa',
  },
    {
    num: '04',
    name: 'CURRENCY CONVERTER',
    tag: 'Productivity',
    role: 'Full Frontend',
    description: 'Single-page currency converter with real-time exchange rates, multi-currency support, instant swap, favorites, and rate history. Mobile-first, powered by custom React hooks with localStorage caching and React.memo optimization.',
    stack: ['React', 'Tailwind CSS', 'React hooks' , ],
    link: 'https://currency-converter-psi-green.vercel.app/',
    accent: '#a78bfa',
  },
]

const Projects = () => (
  <section id="projects" className="py-28"
    style={{ background: 'var(--ink-2)' }}>
    <div className="max-w-6xl mx-auto px-6">

      {/* Header */}
      <div className="flex items-center gap-4 mb-16">
        <span className="text-xs font-bold tracking-widest" style={{ color: 'var(--acid)', fontFamily: 'DM Serif Display, serif' }}>04</span>
        <div className="h-px flex-1 max-w-12" style={{ background: 'var(--wire-2)' }} />
        <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--chalk-3)', fontFamily: 'Inter, sans-serif' }}>Projects</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 items-start mb-16">
        <h2 className="font-display flex-1"
          style={{
            fontFamily: 'DM Serif Display, serif', fontWeight: 400,
            fontSize: 'clamp(32px, 4vw, 52px)',
            color: 'var(--chalk)', letterSpacing: '-0.02em', lineHeight: 1.1,
          }}>
          Things I've<br /><span style={{ color: 'var(--acid)' }}>shipped.</span>
        </h2>
        <p className="flex-1 text-base leading-relaxed pt-2"
          style={{ color: 'var(--chalk-3)', fontFamily: 'Inter, sans-serif', maxWidth: '420px' }}>
          From graduation projects to side experiments — each one taught me something new.
        </p>
      </div>

      {/* Project cards */}
      <div className="flex flex-col gap-4">
        {projects.map((p, i) => (
          <a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-xl p-6 md:p-8 card-border transition-all duration-300"
            style={{ background: 'var(--ink-3)' }}
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              {/* Number */}
              <div className="font-display text-5xl font-800 leading-none flex-shrink-0 w-16"
                style={{
                  fontFamily: 'DM Serif Display, serif', fontWeight: 400,
                  color: 'rgba(240,237,232,0.08)',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = p.accent + '33'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(240,237,232,0.08)'}
              >
                {p.num}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="font-display text-xl font-700"
                    style={{ fontFamily: 'DM Serif Display, serif', fontWeight: 400, color: 'var(--chalk)' }}>
                    {p.name}
                  </h3>
                  <span className="pill" style={{ background: p.accent }}>{p.tag}</span>
                  <span className="text-xs px-2 py-1 rounded"
                    style={{ background: 'var(--wire)', color: 'var(--chalk-3)', fontFamily: 'Inter, sans-serif' }}>
                    {p.role}
                  </span>
                </div>
                <p className="text-sm leading-relaxed mb-5"
                  style={{ color: 'var(--chalk-3)', fontFamily: 'Inter, sans-serif' }}>
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s, si) => (
                    <span key={si} className="text-xs px-2.5 py-1 rounded"
                      style={{
                        background: 'var(--wire)',
                        color: 'var(--chalk-2)',
                        border: '1px solid var(--wire-2)',
                        fontFamily: 'Inter, sans-serif',
                      }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 group-hover:scale-110"
                style={{ border: '1px solid var(--wire-2)', color: 'var(--chalk-3)' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* GitHub CTA */}
      <div className="mt-10 text-center">
        <a href="https://github.com/Abdallah-A-Raafat" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded card-border transition-all duration-200 hover:scale-105"
          style={{ color: 'var(--chalk-2)', fontFamily: 'Inter, sans-serif' }}>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
          </svg>
          More on GitHub
        </a>
      </div>
    </div>
  </section>
)

export default Projects