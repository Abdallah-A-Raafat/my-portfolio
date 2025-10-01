const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend Development',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS'],
      icon: '🎨'
    },
    {
      category: 'Backend Development',
      skills: ['Node.js', 'Python', 'API Development'],
      icon: '⚙️'
    },
    {
      category: 'Programming Languages',
      skills: ['JavaScript', 'Python', 'C++'],
      icon: '💻'
    },
    {
      category: 'Tools & Technologies',
      skills: ['Docker', 'Git', 'VS Code', 'Vercel'],
      icon: '🛠️'
    }
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
            A comprehensive overview of my technical expertise and the tools I use to build exceptional digital experiences
          </p>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass backdrop-blur-md bg-white/10 rounded-2xl p-8 shadow-glow hover:shadow-glow-blue transition-all duration-300 hover-lift animate-fadeInUp"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="text-4xl mb-4 text-center">{category.icon}</div>
              <h3 className="text-xl font-bold text-white mb-6 text-center">{category.category}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="text-white/90 text-center py-2 px-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300 group"
                  >
                    <span className="font-medium group-hover:text-white transition-colors duration-300">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technologies Showcase */}
        <div className="animate-fadeInUp">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Core Technologies</h3>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-6 mb-12">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="glass backdrop-blur-sm bg-white/10 rounded-2xl p-4 text-center group hover-lift hover-glow transition-all duration-300"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h4 className="font-bold text-white text-xs lg:text-sm">{tech.name}</h4>
                <div className={`w-full h-1 bg-gradient-to-r ${tech.color} rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass backdrop-blur-md bg-white/20 rounded-2xl p-8 shadow-glow-blue text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-bold text-white mb-3 text-lg">Quality Code</h4>
            <p className="text-white/80">Clean, maintainable, and scalable solutions following industry best practices</p>
          </div>

          <div className="glass backdrop-blur-md bg-white/20 rounded-2xl p-8 shadow-glow-purple text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="font-bold text-white mb-3 text-lg">Fast Performance</h4>
            <p className="text-white/80">Optimized applications with superior performance and user experience</p>
          </div>

          <div className="glass backdrop-blur-md bg-white/20 rounded-2xl p-8 shadow-glow-pink text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h4 className="font-bold text-white mb-3 text-lg">User-Centered</h4>
            <p className="text-white/80">Responsive designs that prioritize accessibility and user satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills