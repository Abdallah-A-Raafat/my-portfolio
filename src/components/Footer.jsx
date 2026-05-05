const Footer = () => (
  <footer className="py-8" style={{ background: 'var(--ink-2)', borderTop: '1px solid var(--wire)' }}>
    <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <a href="#home" className="flex items-center">
          <img src="/logo.svg" alt="Abdallah Ahmed" className="h-9 w-auto" />
        </a>
      <span className="text-xs" style={{ color: 'var(--chalk-3)', fontFamily: 'DM Sans, sans-serif' }}>
        © {new Date().getFullYear()} Abdallah Ahmed — Built with React & Tailwind
      </span>
      <div className="flex gap-6">
        {[
          { l: 'GitHub', h: 'https://github.com/Abdallah-A-Raafat' },
          { l: 'LinkedIn', h: 'https://www.linkedin.com/in/abdallah-ahmed-112241317' },
          { l: 'Email', h: 'mailto:abdallah.araafat@gmail.com' },
        ].map(s => (
          <a key={s.l} href={s.h} target={s.h.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            className="text-xs hover-line transition-colors duration-200"
            style={{ color: 'var(--chalk-3)', fontFamily: 'DM Sans, sans-serif' }}>
            {s.l}
          </a>
        ))}
      </div>
    </div>
  </footer>
)

export default Footer
