const Hero = () => {
  return (
    <section id="home" className="relative pt-20 pb-16 min-h-screen flex items-center overflow-hidden bg-slate-50">
      {/* Professional background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50"></div>
      
      {/* Subtle floating elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-blue-100/50 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-slate-200/50 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 left-1/4 w-8 h-8 bg-blue-200/50 rounded-full animate-float" style={{animationDelay: '4s'}}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side - Text content */}
          <div className="md:w-1/2 mb-8 md:mb-0 animate-fadeInLeft">
            <div className="mb-4">
              <span className="text-lg md:text-xl text-slate-600 font-medium animate-fadeInUp">Hello, I'm</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-4 leading-tight">
              <span className="text-gradient-warm">Abdallah</span>
              <br />
              <span className="text-gradient-cool">Ahmed</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-700 mb-6 font-light">
              Front-end Developer
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
              Passionate about creating beautiful, responsive, and user-friendly web applications 
              using modern technologies like React, JavaScript, and Tailwind CSS.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="src/assets/myresume.pdf"
                download
                className="btn-primary text-center"
              >
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download CV
                </span>
              </a>
              <a
                href="#contact"
                className="btn-outline text-center"
              >
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Contact Me
                </span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/abdallah-ahmed-112241317"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-100 hover:bg-blue-100 rounded-full flex items-center justify-center text-slate-600 hover:text-blue-600 transition-all duration-300 hover:scale-105"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://github.com/Abdallah-A-Raafat"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:text-slate-800 transition-all duration-300 hover:scale-105"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right side - Photo */}
          <div className="md:w-1/2 flex justify-center animate-fadeInRight">
            <div className="relative">
              {/* Professional background circles */}
              <div className="absolute -top-8 -left-8 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-slate-200/30 rounded-full animate-pulse-slow"></div>
              <div className="absolute -top-4 -left-4 w-80 h-80 bg-gradient-to-br from-slate-200/40 to-blue-100/40 rounded-full animate-float"></div>
              <div className="absolute top-4 left-4 w-72 h-72 bg-gradient-to-br from-blue-50/20 to-slate-100/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
              
              {/* Main photo */}
              <div className="relative z-10">
                <img
                  src="src/assets/myphoto.jpeg"
                  alt="Abdallah Ahmed"
                  className="w-80 h-80 rounded-full object-cover border-4 border-white shadow-2xl hover:scale-105 transition-transform duration-500"
                />
                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-100/20 to-slate-200/20 blur-xl -z-10 animate-pulse-slow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero