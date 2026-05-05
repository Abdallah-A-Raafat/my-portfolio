const contacts = [
  {
    label: 'Email',
    value: 'abdallah.araafat@gmail.com',
    href: 'mailto:abdallah.araafat@gmail.com',
    hint: 'Best way to reach me',
  },
  {
    label: 'LinkedIn',
    value: 'abdallah-ahmed-112241317',
    href: 'https://www.linkedin.com/in/abdallah-ahmed-112241317',
    hint: 'Professional profile',
  },
  {
    label: 'GitHub',
    value: 'Abdallah-A-Raafat',
    href: 'https://github.com/Abdallah-A-Raafat',
    hint: 'Code & projects',
  },
  {
    label: 'whatsapp',
    value: '01117145060',
    href: 'https://wa.me/201117145060',
    hint: 'Chat on WhatsApp',
  },

]

const Contact = () => (
  <section id="contact" className="py-28 relative overflow-hidden"
    style={{ background: 'var(--ink)' }}>

    {/* Big background text */}
    <div className="absolute bottom-0 right-0 select-none pointer-events-none"
      style={{
        fontFamily: 'DM Serif Display, serif', fontWeight: 400,
        fontSize: 'clamp(120px, 20vw, 280px)',
        color: 'rgba(200,255,0,0.025)', lineHeight: 0.85,
        letterSpacing: '-0.05em',
      }}>
      HI.
    </div>

    <div className="relative z-10 max-w-6xl mx-auto px-6">

      {/* Header */}
      <div className="flex items-center gap-4 mb-16">
        <span className="text-xs font-bold tracking-widest" style={{ color: 'var(--acid)', fontFamily: 'DM Serif Display, serif' }}>05</span>
        <div className="h-px flex-1 max-w-12" style={{ background: 'var(--wire-2)' }} />
        <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--chalk-3)', fontFamily: 'Inter, sans-serif' }}>Contact</span>
      </div>

      <div className="grid lg:grid-cols-2 gap-20 items-start">
        {/* Left */}
        <div>
          <h2 className="font-display mb-6 leading-tight"
            style={{
              fontFamily: 'DM Serif Display, serif', fontWeight: 400,
              fontSize: 'clamp(36px, 5vw, 64px)',
              color: 'var(--chalk)', letterSpacing: '-0.02em',
            }}>
            Let's build<br />
            something<br />
            <span style={{ color: 'var(--acid)' }}>together.</span>
          </h2>
          <p className="text-base leading-relaxed mb-10"
            style={{ color: 'var(--chalk-3)', fontFamily: 'Inter, sans-serif', maxWidth: '400px' }}>
            I'm actively looking for frontend internship opportunities. Whether you have a project,
            a role, or just want to connect — my inbox is open.
          </p>
          <a
            href="mailto:abdallah.araafat@gmail.com?subject=Internship%20Opportunity"
            className="inline-flex items-center gap-2 px-8 py-4 rounded font-semibold text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style={{ background: 'var(--acid)', color: 'var(--ink)', fontFamily: 'Inter, sans-serif' }}>
            Say Hello →
          </a>
        </div>

        {/* Right — contact cards */}
        <div className="flex flex-col gap-3">
          {contacts.map((c, i) => (
            <a key={i} href={c.href} target={c.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-5 rounded-xl card-border transition-all duration-200"
              style={{ background: 'var(--ink-2)' }}>
              <div>
                <div className="text-xs uppercase tracking-widest mb-1"
                  style={{ color: 'var(--chalk-3)', fontFamily: 'Inter, sans-serif' }}>
                  {c.label}
                </div>
                <div className="text-sm font-medium"
                  style={{ color: 'var(--chalk-2)', fontFamily: 'Inter, sans-serif' }}>
                  {c.value}
                </div>
                <div className="text-xs mt-0.5" style={{ color: 'var(--chalk-3)', fontFamily: 'Inter, sans-serif' }}>
                  {c.hint}
                </div>
              </div>
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0"
                style={{ color: 'var(--acid)' }}
                viewBox="0 0 16 16" fill="none">
                <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default Contact