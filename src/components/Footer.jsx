const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 gradient-primary animate-gradient"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/5 rounded-full animate-float"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-white/15 rounded-full animate-float" style={{animationDelay: '2s'}}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="animate-fadeInUp">
            <h3 className="text-3xl font-bold mb-6 text-white">
              <span className="text-gradient-warm">Abdallah</span> <span className="text-gradient-cool">Ahmed</span>
            </h3>
            <p className="text-white/80 mb-6 text-lg leading-relaxed">
              Front-end Developer passionate about creating beautiful and functional web experiences.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/abdallah-ahmed-112241317"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass backdrop-blur-sm bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all duration-300 hover-glow"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://github.com/Abdallah-A-Raafat"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass backdrop-blur-sm bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all duration-300 hover-glow"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fadeInUp" style={{animationDelay: '0.1s'}}>
            <h3 className="text-2xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#home" className="text-white/80 hover:text-white transition-colors duration-300 text-lg font-medium group flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full mr-3 group-hover:scale-110 transition-transform duration-300"></div>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors duration-300 text-lg font-medium group flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-3 group-hover:scale-110 transition-transform duration-300"></div>
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-white/80 hover:text-white transition-colors duration-300 text-lg font-medium group flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full mr-3 group-hover:scale-110 transition-transform duration-300"></div>
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-white/80 hover:text-white transition-colors duration-300 text-lg font-medium group flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-teal-400 to-green-400 rounded-full mr-3 group-hover:scale-110 transition-transform duration-300"></div>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors duration-300 text-lg font-medium group flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-yellow-400 rounded-full mr-3 group-hover:scale-110 transition-transform duration-300"></div>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            <h3 className="text-2xl font-bold mb-6 text-white">Get In Touch</h3>
            <div className="space-y-4">
              <p className="text-white/80 text-lg">
                Ready to work together?
              </p>
              <p className="text-white/80 text-lg">
                Let's build something amazing!
              </p>
              <div className="mt-6">
                <a
                  href="src/assets/myresume.pdf"
                  download
                  className="inline-flex items-center btn-primary text-center group"
                >
                  <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8 animate-fadeInUp" style={{animationDelay: '0.3s'}}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © {currentYear} Abdallah Ahmed. All rights reserved.
            </p>
            <p className="text-white/60 text-sm mt-2 md:mt-0">
              Built with <span className="text-gradient-warm font-semibold">React</span> & <span className="text-gradient-cool font-semibold">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer