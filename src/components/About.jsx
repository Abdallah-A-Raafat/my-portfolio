const stats = [
  { num: '15+', label: 'Projects Built' },
  { num: '3+', label: 'Tech Stacks' },
  { num: '2026', label: 'Graduation' },
  { num: '∞', label: 'Curiosity' },
]

const About = () => (
  <section id="about" className="py-28 relative overflow-hidden"
    style={{ background: 'var(--ink-2)' }}>

    {/* Section label */}
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex items-center gap-4 mb-16">
        <span className="text-xs font-bold tracking-widest" style={{ color: 'var(--acid)', fontFamily: 'DM Serif Display, serif' }}>02</span>
        <div className="h-px flex-1 max-w-12" style={{ background: 'var(--wire-2)' }} />
        <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--chalk-3)', fontFamily: 'Inter, sans-serif' }}>About</span>
      </div>

      <div className="grid lg:grid-cols-2 gap-20 items-start">
        {/* Left */}
        <div>
          <h2 className="font-display mb-8 leading-tight"
            style={{
              fontFamily: 'DM Serif Display, serif', fontWeight: 400,
              fontSize: 'clamp(36px, 5vw, 60px)',
              color: 'var(--chalk)', letterSpacing: '-0.02em',
            }}>
            Building interfaces<br />
            <span style={{ color: 'var(--acid)' }}>people love</span><br />
            to use.
          </h2>

          <p className="text-base leading-relaxed mb-6"
            style={{ color: 'var(--chalk-3)', fontFamily: 'Inter, sans-serif' }}>
            I'm a frontend developer and Computer Science student at Modern Academy Cairo,
            graduating in 2026. My work lives at the intersection of clean engineering
            and thoughtful design — I care deeply about how things feel, not just how they work.
          </p>
          <p className="text-base leading-relaxed mb-10"
            style={{ color: 'var(--chalk-3)', fontFamily: 'Inter, sans-serif' }}>
            From a real-time seizure detection dashboard to an AI-powered mental health platform,
            I've shipped React applications that solve real problems. I write clean, maintainable
            code and obsess over the details others skip.
          </p>

          <a href="#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold hover-line transition-colors duration-200"
            style={{ color: 'var(--acid)', fontFamily: 'Inter, sans-serif' }}>
            See my work →
          </a>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-6">
          {/* Stats row */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <div key={i} className="card-border rounded-xl p-6"
                style={{ background: 'var(--ink-3)' }}>
                <div className="font-display text-4xl font-800 mb-1"
                  style={{ fontFamily: 'DM Serif Display, serif', fontWeight: 400, color: 'var(--acid)' }}>
                  {s.num}
                </div>
                <div className="text-xs uppercase tracking-wider"
                  style={{ color: 'var(--chalk-3)', fontFamily: 'Inter, sans-serif' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* What I do */}
          <div className="card-border rounded-xl p-6" style={{ background: 'var(--ink-3)' }}>
            <h3 className="text-xs tracking-widest uppercase mb-5 font-semibold"
              style={{ color: 'var(--chalk-3)', fontFamily: 'Inter, sans-serif' }}>
              What I do
            </h3>
            <div className="flex flex-col gap-3">
              {[
                'Responsive React applications',
                'Mobile-first UI with React Native',
                'Performance & accessibility optimization',
                'Design-to-code implementation',
                'Real-time data visualization',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: 'var(--acid)' }} />
                  <span className="text-sm" style={{ color: 'var(--chalk-2)', fontFamily: 'Inter, sans-serif' }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default About