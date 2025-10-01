const Skills = () => {
  const skills = [
    { name: 'HTML', level: 95, color: 'from-orange-400 to-red-500' },
    { name: 'CSS', level: 90, color: 'from-blue-400 to-cyan-500' },
    { name: 'JavaScript', level: 85, color: 'from-yellow-400 to-orange-500' },
    { name: 'React', level: 80, color: 'from-cyan-400 to-blue-500' },
    { name: 'Tailwind CSS', level: 85, color: 'from-teal-400 to-cyan-500' },
    { name: 'Node.js', level: 70, color: 'from-green-400 to-emerald-500' },
    { name: 'Docker', level: 65, color: 'from-blue-500 to-indigo-600' },
    { name: 'C++', level: 75, color: 'from-purple-400 to-pink-500' },
    { name: 'Python', level: 70, color: 'from-green-500 to-teal-600' },
  ]

  const technologies = [
    { name: 'HTML5', icon: '🌐', color: 'from-orange-400 to-red-500' },
    { name: 'CSS3', icon: '🎨', color: 'from-blue-400 to-cyan-500' },
    { name: 'JavaScript', icon: '⚡', color: 'from-yellow-400 to-orange-500' },
    { name: 'React', icon: '⚛️', color: 'from-cyan-400 to-blue-500' },
    { name: 'Tailwind', icon: '💨', color: 'from-teal-400 to-cyan-500' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-400 to-emerald-500' },
    { name: 'Docker', icon: '🐳', color: 'from-blue-500 to-indigo-600' },
    { name: 'C++', icon: '⚙️', color: 'from-purple-400 to-pink-500' },
    { name: 'Python', icon: '🐍', color: 'from-green-500 to-teal-600' },
  ]

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 gradient-accent animate-gradient"></div>
      <div className="absolute inset-0 bg-black/5"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-white/5 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white/15 rounded-full animate-float" style={{animationDelay: '2s'}}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-5xl font-bold text-white mb-6">
            Skills & <span className="text-gradient-warm">Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills Progress Bars */}
          <div className="animate-fadeInLeft">
            <h3 className="text-3xl font-bold text-white mb-8">Technical Proficiency</h3>
            <div className="space-y-8">
              {skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-white font-semibold text-lg">{skill.name}</span>
                    <span className="text-white/80 text-sm font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-4 overflow-hidden">
                    <div
                      className={`h-4 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out group-hover:shadow-glow`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Grid */}
          <div className="animate-fadeInRight">
            <h3 className="text-3xl font-bold text-white mb-8">Technologies I Use</h3>
            <div className="grid grid-cols-3 gap-6 mb-8">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="glass backdrop-blur-sm bg-white/10 rounded-2xl p-6 text-center group hover-lift hover-glow transition-all duration-300"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <h4 className="font-bold text-white text-sm">{tech.name}</h4>
                  <div className={`w-full h-1 bg-gradient-to-r ${tech.color} rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="glass backdrop-blur-md bg-white/20 rounded-2xl p-8 shadow-glow-blue">
              <h4 className="font-bold text-white mb-6 text-xl">What I Bring to the Table</h4>
              <ul className="space-y-4">
                <li className="flex items-center group">
                  <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300"></div>
                  <span className="text-white/90 font-medium">Clean, maintainable, and scalable code</span>
                </li>
                <li className="flex items-center group">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300"></div>
                  <span className="text-white/90 font-medium">Responsive design principles</span>
                </li>
                <li className="flex items-center group">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300"></div>
                  <span className="text-white/90 font-medium">Modern development workflows</span>
                </li>
                <li className="flex items-center group">
                  <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-red-400 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300"></div>
                  <span className="text-white/90 font-medium">Problem-solving mindset</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills