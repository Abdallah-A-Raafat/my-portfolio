const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 gradient-dark animate-gradient"></div>
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full animate-float"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-white/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/15 rounded-full animate-float" style={{animationDelay: '2s'}}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-5xl font-bold text-white mb-6">
            Get In <span className="text-gradient-warm">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-4">
            Ready to work together? Let's connect and bring your ideas to life!
          </p>
          <p className="text-sm text-white/70 max-w-2xl mx-auto">
            Reach out to me through any of the channels below. I'm always excited to discuss new opportunities and projects.
          </p>
        </div>

        {/* Contact Information Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Email */}
          <div className="animate-fadeInUp group" style={{animationDelay: '0.1s'}}>
            <div className="glass backdrop-blur-md bg-white/20 rounded-2xl p-8 shadow-glow hover:shadow-glow-pink transition-all duration-300 text-center">
              <div className="w-20 h-20 glass backdrop-blur-sm bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Email</h3>
              <p className="text-white/80 mb-4">Let's discuss your project</p>
              <a
                href="mailto:abdallah.araafat@gmail.com"
                className="text-white/90 hover:text-white font-medium transition-colors duration-300 break-all"
              >
                abdallah.araafat@gmail.com
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="animate-fadeInUp group" style={{animationDelay: '0.2s'}}>
            <div className="glass backdrop-blur-md bg-white/20 rounded-2xl p-8 shadow-glow hover:shadow-glow-pink transition-all duration-300 text-center">
              <div className="w-20 h-20 glass backdrop-blur-sm bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">LinkedIn</h3>
              <p className="text-white/80 mb-4">Professional networking</p>
              <a
                href="https://www.linkedin.com/in/abdallah-ahmed-112241317"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 hover:text-white font-medium transition-colors duration-300"
              >
                Connect with me
              </a>
            </div>
          </div>

          {/* GitHub */}
          <div className="animate-fadeInUp group" style={{animationDelay: '0.3s'}}>
            <div className="glass backdrop-blur-md bg-white/20 rounded-2xl p-8 shadow-glow hover:shadow-glow-pink transition-all duration-300 text-center">
              <div className="w-20 h-20 glass backdrop-blur-sm bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">GitHub</h3>
              <p className="text-white/80 mb-4">Code repositories</p>
              <a
                href="https://github.com/Abdallah-A-Raafat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 hover:text-white font-medium transition-colors duration-300"
              >
                View my work
              </a>
            </div>
          </div>

          {/* Instagram */}
          <div className="animate-fadeInUp group" style={{animationDelay: '0.4s'}}>
            <div className="glass backdrop-blur-md bg-white/20 rounded-2xl p-8 shadow-glow hover:shadow-glow-pink transition-all duration-300 text-center">
              <div className="w-20 h-20 glass backdrop-blur-sm bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Instagram</h3>
              <p className="text-white/80 mb-4">Behind the scenes</p>
              <a
                href="https://instagram.com/abdallah_ahmedii"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 hover:text-white font-medium transition-colors duration-300"
              >
                @abdallah_ahmedii
              </a>
            </div>
          </div>
        </div>

        {/* Quick Actions Section */}
        <div className="max-w-4xl mx-auto">
          <div className="glass backdrop-blur-md bg-white/20 rounded-2xl p-8 shadow-glow text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Ready to Start Your Project?</h3>
            <p className="text-white/80 mb-8 text-lg">
              I'm always excited to work on new projects and collaborate with amazing people. 
              Whether you have a specific idea in mind or just want to explore possibilities, let's connect!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:abdallah.araafat@gmail.com?subject=Project%20Inquiry&body=Hi%20Abdallah,%0A%0AI'm%20interested%20in%20working%20with%20you%20on%20a%20project.%0A%0A"
                className="btn-secondary py-4 px-8 text-lg font-bold shadow-glow-pink hover-glow flex items-center group"
              >
                <svg className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send me an Email
              </a>
              
              <a
                href="src/assets/myresume.pdf"
                download
                className="btn-outline py-4 px-8 text-lg font-bold flex items-center group border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                <svg className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact