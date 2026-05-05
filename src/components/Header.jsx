import { useState, useEffect } from 'react'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['About', 'Skills', 'Projects', 'Contact']

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(240,237,232,0.08)' : '1px solid transparent',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <img src="/logo.svg" alt="Abdallah Ahmed" className="h-9 w-auto" />
        </a>
        
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="hover-line text-sm font-medium tracking-wide transition-colors duration-200"
              style={{ color: 'var(--chalk-2)', fontFamily: 'DM Sans, sans-serif' }}
            >
              {l}
            </a>
          ))}
          <a
            href="/myresume.pdf"
            download
            className="text-sm font-semibold px-5 py-2 rounded transition-all duration-200"
            style={{
              background: 'var(--acid)', color: 'var(--ink)',
              fontFamily: 'DM Sans, sans-serif',
            }}
          >
            Resume ↓
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-6 h-px transition-all duration-300"
            style={{ background: 'var(--chalk)', transform: menuOpen ? 'rotate(45deg) translateY(4px)' : '' }} />
          <span className="block h-px transition-all duration-300"
            style={{ background: 'var(--chalk)', width: menuOpen ? '0' : '24px', opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-6 h-px transition-all duration-300"
            style={{ background: 'var(--chalk)', transform: menuOpen ? 'rotate(-45deg) translateY(-4px)' : '' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{ background: 'rgba(10,10,10,0.97)', borderTop: '1px solid var(--wire)' }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className="text-base font-medium py-2"
              style={{ color: 'var(--chalk-2)', fontFamily: 'DM Sans, sans-serif' }}
              onClick={() => setMenuOpen(false)}>
              {l}
            </a>
          ))}
          <a href="/myresume.pdf" download
            className="text-sm font-semibold px-5 py-3 rounded text-center"
            style={{ background: 'var(--acid)', color: 'var(--ink)', fontFamily: 'DM Sans, sans-serif' }}>
            Download Resume ↓
          </a>
        </div>
      )}
    </header>
  )
}

export default Header
