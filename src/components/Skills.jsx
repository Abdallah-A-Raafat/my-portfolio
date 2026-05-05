const skillGroups = [
  {
    label: 'Frontend',
    skills: [
      { name: 'React', level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'HTML / CSS', level: 92 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'React Native', level: 75 },
    ]
  },
  {
    label: 'State & Data',
    skills: [
      { name: 'Zustand', level: 78 },
      { name: 'React Query', level: 75 },
      { name: 'i18next', level: 72 },
      { name: 'localStorage / hooks', level: 88 },
    ]
  },
  {
    label: 'Languages',
    skills: [
      { name: 'JavaScript', level: 88 },
      { name: 'Python', level: 65 },
      { name: 'Java', level: 60 },
      { name: 'C / C++', level: 62 },
    ]
  },
  {
    label: 'Tools',
    skills: [
      { name: 'Git / GitHub', level: 85 },
      { name: 'Docker', level: 60 },
      { name: 'Vite', level: 80 },
      { name: 'VS Code', level: 95 },
    ]
  },
]

const techPills = ['React 19', 'React Native', 'Vite', 'Tailwind v4', 'Zustand', 'React Query', 'i18next',
  'HTML5', 'CSS3', 'JavaScript ES6+', 'Git', 'Docker', 'Python', 'Java', 'C++', 'REST APIs', 'WebSocket', 'WCAG']

const Skills = () => (
  <section id="skills" className="py-28 relative overflow-hidden"
    style={{ background: 'var(--ink)' }}>

    <div className="max-w-6xl mx-auto px-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-16">
        <span className="text-xs font-bold tracking-widest" style={{ color: 'var(--acid)', fontFamily: 'DM Serif Display, serif' }}>03</span>
        <div className="h-px flex-1 max-w-12" style={{ background: 'var(--wire-2)' }} />
        <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--chalk-3)', fontFamily: 'Inter, sans-serif' }}>Skills</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 items-start mb-16">
        <h2 className="font-display flex-1"
          style={{
            fontFamily: 'DM Serif Display, serif', fontWeight: 400,
            fontSize: 'clamp(32px, 4vw, 52px)',
            color: 'var(--chalk)', letterSpacing: '-0.02em', lineHeight: 1.1,
          }}>
          Tools of<br /><span style={{ color: 'var(--acid)' }}>the craft.</span>
        </h2>
        <p className="flex-1 text-base leading-relaxed pt-2"
          style={{ color: 'var(--chalk-3)', fontFamily: 'Inter, sans-serif', maxWidth: '420px' }}>
          Focused on the frontend, but comfortable across the stack. Every project sharpens a new edge.
        </p>
      </div>

      {/* Skill groups with bars */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {skillGroups.map((group, gi) => (
          <div key={gi} className="card-border rounded-xl p-6"
            style={{ background: 'var(--ink-2)' }}>
            <h3 className="text-xs tracking-widest uppercase font-semibold mb-6"
              style={{ color: 'var(--acid)', fontFamily: 'DM Serif Display, serif' }}>
              {group.label}
            </h3>
            <div className="flex flex-col gap-4">
              {group.skills.map((s, si) => (
                <div key={si}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm font-medium" style={{ color: 'var(--chalk-2)', fontFamily: 'Inter, sans-serif' }}>
                      {s.name}
                    </span>
                    <span className="text-xs" style={{ color: 'var(--chalk-3)', fontFamily: 'Inter, sans-serif' }}>
                      {s.level}%
                    </span>
                  </div>
                  <div className="h-1 rounded-full overflow-hidden" style={{ background: 'var(--wire-2)' }}>
                    <div className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: `${s.level}%`,
                        background: `linear-gradient(to right, var(--acid-dim), var(--acid))`
                      }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Marquee pills */}
      <div className="overflow-hidden rounded-xl py-4"
        style={{ background: 'var(--ink-3)', border: '1px solid var(--wire-2)' }}>
        <div className="flex gap-3 animate-marquee whitespace-nowrap">
          {[...techPills, ...techPills].map((t, i) => (
            <span key={i} className="pill flex-shrink-0">{t}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default Skills