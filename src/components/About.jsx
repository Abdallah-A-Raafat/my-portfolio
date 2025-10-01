const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            About <span className="text-gradient-warm">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-700 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeInLeft">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Front-end Developer with a 
              <span className="text-gradient-cool"> Passion</span> for Innovation
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
              I'm a dedicated front-end developer who loves creating engaging and intuitive user experiences. 
              With a strong foundation in modern web technologies, I specialize in building responsive, 
              performant, and accessible web applications.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              My journey in web development started with a curiosity for how things work on the web, 
              and has evolved into a passion for crafting digital solutions that make a difference. 
              I enjoy working with React, JavaScript, and modern CSS frameworks to bring designs to life.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-slate-50 hover:bg-blue-50 rounded-lg p-6 hover-lift transition-all duration-300 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-2 text-lg">Experience</h4>
                <p className="text-slate-600">Building modern web applications</p>
              </div>
              <div className="bg-slate-50 hover:bg-blue-50 rounded-lg p-6 hover-lift transition-all duration-300 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-2 text-lg">Focus</h4>
                <p className="text-slate-600">User experience & performance</p>
              </div>
              <div className="bg-slate-50 hover:bg-blue-50 rounded-lg p-6 hover-lift transition-all duration-300 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-2 text-lg">Approach</h4>
                <p className="text-slate-600">Clean, maintainable code</p>
              </div>
              <div className="bg-slate-50 hover:bg-blue-50 rounded-lg p-6 hover-lift transition-all duration-300 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-2 text-lg">Goal</h4>
                <p className="text-slate-600">Continuous learning & growth</p>
              </div>
            </div>
          </div>

          <div className="relative animate-fadeInRight">
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-slate-200">
              <h4 className="text-2xl font-bold text-slate-900 mb-8 text-center">My Expertise</h4>
              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300"></div>
                  <span className="text-slate-700 font-medium text-lg">Responsive Web Design</span>
                </div>
                <div className="flex items-center group">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-700 to-slate-600 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300"></div>
                  <span className="text-slate-700 font-medium text-lg">Modern JavaScript (ES6+)</span>
                </div>
                <div className="flex items-center group">
                  <div className="w-6 h-6 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300"></div>
                  <span className="text-slate-700 font-medium text-lg">React Development</span>
                </div>
                <div className="flex items-center group">
                  <div className="w-6 h-6 bg-gradient-to-r from-slate-700 to-blue-600 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300"></div>
                  <span className="text-slate-700 font-medium text-lg">UI/UX Implementation</span>
                </div>
                <div className="flex items-center group">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-slate-600 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300"></div>
                  <span className="text-slate-700 font-medium text-lg">Performance Optimization</span>
                </div>
                <div className="flex items-center group">
                  <div className="w-6 h-6 bg-gradient-to-r from-slate-600 to-blue-700 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300"></div>
                  <span className="text-slate-700 font-medium text-lg">Cross-browser Compatibility</span>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full animate-pulse-slow"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About