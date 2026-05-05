import { useEffect, useState } from 'react'

const roles = ['Frontend Developer', 'React Specialist', 'UI Craftsman', 'CS Student']

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIndex]
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 1800)
        return () => clearTimeout(t)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
        return () => clearTimeout(t)
      } else {
        setRoleIndex((roleIndex + 1) % roles.length)
        setTyping(true)
      }
    }
  }, [displayed, typing, roleIndex])

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden grid-line"
      style={{ background: 'var(--ink)' }}>

      {/* Large background number */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none"
        style={{
          fontFamily: 'DM Serif Display, serif', fontWeight: 400,
          fontSize: 'clamp(180px, 30vw, 400px)',
          color: 'rgba(200,255,0,0.03)', lineHeight: 1,
          letterSpacing: '-0.05em',
        }}>
        01
      </div>

      {/* Acid horizontal line accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-48 hidden lg:block"
        style={{ background: 'var(--acid)' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-16">

          {/* Text side */}
          <div className="flex-1">
            <p className="animate-fade-up delay-1 text-sm font-medium mb-6 flex items-center gap-3"
              style={{ color: 'var(--acid)', fontFamily: 'Inter, sans-serif', letterSpacing: '0.12em' }}>
              <span className="inline-block w-8 h-px" style={{ background: 'var(--acid)' }} />
              Hi, My name is ...
            </p>

            <h1 className="animate-fade-up delay-2 font-display leading-none mb-4"
              style={{
                fontFamily: 'DM Serif Display, serif', fontWeight: 400,
                fontSize: 'clamp(52px, 8vw, 110px)',
                color: 'var(--chalk)', letterSpacing: '-0.03em',
              }}>
              Abdallah<br />
              <span style={{ color: 'var(--acid)' }}>Ahmed</span>
            </h1>

            <div className="animate-fade-up delay-3 mb-8 h-10 flex items-center">
              <span className="text-2xl md:text-3xl font-light cursor"
                style={{ color: 'var(--chalk-2)', fontFamily: 'Inter, sans-serif' }}>
                {displayed}
              </span>
            </div>

            <p className="animate-fade-up delay-4 text-base leading-relaxed mb-10 max-w-md"
              style={{ color: 'var(--chalk-3)', fontFamily: 'Inter, sans-serif' }}>
              CS student at Modern Academy Cairo, building polished React interfaces —
              from medical dashboards to AI-powered mental health platforms.
            </p>

            <div className="animate-fade-up delay-5 flex flex-wrap gap-4">
              <a href="#projects"
                className="px-7 py-3.5 font-semibold text-sm rounded transition-all duration-200 hover:scale-105"
                style={{ background: 'var(--acid)', color: 'var(--ink)', fontFamily: 'Inter, sans-serif' }}>
                View Projects →
              </a>
              <a href="#contact"
                className="px-7 py-3.5 font-semibold text-sm rounded transition-all duration-200 hover:scale-105 card-border"
                style={{ color: 'var(--chalk)', fontFamily: 'Inter, sans-serif' }}>
                Get In Touch
              </a>
            </div>

            {/* Social row */}
            <div className="animate-fade-up delay-6 flex items-center gap-6 mt-10">
              <span className="text-xs tracking-widest" style={{ color: 'var(--chalk-3)' }}>FIND ME ON</span>
              <div className="h-px flex-1 max-w-8" style={{ background: 'var(--wire-2)' }} />
              {[
                { label: 'GH', href: 'https://github.com/Abdallah-A-Raafat' },
                { label: 'LI', href: 'https://www.linkedin.com/in/abdallah-ahmed-112241317' },
                { label: 'PT', href: 'https://my-portfolio-black-nu-fqjhf84jfu.vercel.app/' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="text-xs font-bold tracking-widest hover-line transition-colors duration-200"
                  style={{ color: 'var(--chalk-2)', fontFamily: 'DM Serif Display, serif' }}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Photo side */}
          <div className="relative flex-shrink-0 animate-fade-up delay-3">
            {/* Frame decoration */}
            <div className="absolute -top-3 -right-3 w-full h-full rounded-2xl"
              style={{ border: '1px solid var(--acid)', zIndex: 0 }} />
            <div className="relative z-10 rounded-2xl overflow-hidden"
              style={{ width: 'clamp(240px, 30vw, 340px)', aspectRatio: '3/4' }}>
              <img
                src="/myphoto.jpeg"
                alt="Abdallah Ahmed"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* Acid overlay tint on hover */}
              <div className="absolute inset-0 opacity-0 hover:opacity-10 transition-opacity duration-500"
                style={{ background: 'var(--acid)' }} />
            </div>
            {/* Tag */}
            <div className="absolute -bottom-4 -left-4 z-20 px-4 py-2 rounded text-xs font-semibold"
              style={{ background: 'var(--ink-3)', border: '1px solid var(--wire-2)', color: 'var(--chalk-2)', fontFamily: 'Inter, sans-serif' }}>
              📍 Cairo, Egypt
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
          <span className="text-xs tracking-widest" style={{ color: 'var(--chalk-3)' }}>SCROLL</span>
          <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, var(--chalk-3), transparent)' }} />
        </div>
      </div>
    </section>
  )
}

export default Hero