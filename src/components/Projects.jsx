import { useState, useEffect, useRef } from 'react'

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const carouselRef = useRef(null)

  const projects = [
    {
      id: 1,
      title: 'Tic Tac Toe Game',
      description: 'Interactive tic-tac-toe game built with React featuring smooth animations and game state management.',
      previewUrl: 'https://tic-tac-toe-sable-zeta.vercel.app/',
      technologies: ['React', 'tailwindcss', 'JavaScript'],
      liveUrl: 'https://tic-tac-toe-sable-zeta.vercel.app/',
      features: ['Interactive gameplay', 'Responsive design', 'Game state management']
    },
    {
      id: 2,
      title: 'Currency Converter',
      description: 'Real-time currency converter application with live exchange rates and clean user interface.',
      previewUrl: 'https://currency-converter-psi-green.vercel.app/',
      technologies: ['React', 'API Integration', 'tailwindcss'],
      liveUrl: 'https://currency-converter-psi-green.vercel.app/',
      features: ['Live exchange rates', 'Multiple currencies', 'Clean UI']
    },
    {
      id: 3,
      title: 'Todo Application',
      description: 'Feature-rich todo application with task management, filtering, and local storage persistence.',
      previewUrl: 'https://todo-beta-flax-14.vercel.app/',
      technologies: ['React', 'Local Storage', 'tailwindcss'],
      liveUrl: 'https://todo-beta-flax-14.vercel.app/',
      features: ['Task management', 'Filter options', 'Data persistence']
    },
    {
      id: 4,
      title: 'GitHub User Search',
      description: 'GitHub user search application that displays user profiles and repository information.',
      previewUrl: 'https://github-user-search-kappa-pink.vercel.app/',
      technologies: ['React', 'GitHub API', 'CSS'],
      liveUrl: 'https://github-user-search-kappa-pink.vercel.app/',
      features: ['User search', 'Profile display', 'Repository listing']
    },
    {
      id: 5,
      title: 'Seizure Detection Project',
      description: 'Advanced machine learning project for seizure detection with data analysis and visualization.',
      previewUrl: 'https://seizure-detection-project-7hyi.vercel.app/',
      technologies: ['React', 'tailwindcss', 'Api integration'],
      liveUrl: 'https://seizure-detection-project-7hyi.vercel.app/',
      features: ['ML algorithms', 'Data visualization', 'Medical analysis']
    },
    {
      id: 6,
      title: 'SootheAI',
      description: 'An innovative AI-powered application designed to provide personalized wellness solutions and mental health support.',
      previewUrl: 'coming-soon',
      technologies: ['React', 'AI/ML', 'Node.js', 'TailwindCSS'],
      liveUrl: 'coming-soon',
      features: ['AI-powered recommendations', 'Personalized content', 'User-friendly interface']
    }
  ]

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [projects.length])

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const goToProject = (index) => {
    setCurrentProject(index)
  }

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextProject()
    } else if (isRightSwipe) {
      prevProject()
    }
  }

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            My <span className="text-gradient-warm">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-700 mx-auto rounded-full"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Carousel */}
          <div 
            ref={carouselRef}
            className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-2xl bg-white"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Project Preview */}
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden">
              {projects[currentProject].previewUrl === 'coming-soon' ? (
                <div className="w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
                  <div className="text-center px-4">
                    <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto mb-4 md:mb-6 bg-white/10 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 md:mb-4">Coming Soon</h4>
                    <p className="text-white/80 text-sm sm:text-base md:text-lg">This project is currently in development</p>
                  </div>
              </div>
              ) : (
                <iframe
                  src={projects[currentProject].previewUrl}
                  title={projects[currentProject].title}
                  className="w-full h-full border-0 transition-all duration-500"
                  sandbox="allow-scripts allow-forms allow-popups allow-top-navigation"
                  loading="lazy"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none"></div>
              
              {/* Project Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
                  {projects[currentProject].title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-4 md:mb-6 max-w-2xl leading-relaxed">
                  {projects[currentProject].description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 md:mb-6">
                  {projects[currentProject].technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium text-xs sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Live Demo Button */}
                {projects[currentProject].liveUrl === 'coming-soon' ? (
                  <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-gray-600/80 text-white/80 font-semibold rounded-lg cursor-not-allowed text-sm sm:text-base">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Coming Soon
                </div>
                ) : (
                  <a
                    href={projects[currentProject].liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span className="hidden sm:inline">View Live Demo</span>
                    <span className="sm:hidden">Demo</span>
                  </a>
                )}
              </div>
            </div>
        </div>

          {/* Navigation Arrows - Hidden on mobile, visible on tablet+ */}
          <button
            onClick={prevProject}
            className="hidden sm:flex absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/90 backdrop-blur-sm rounded-full items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-white transition-all duration-300 shadow-lg hover:scale-110 z-10"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextProject}
            className="hidden sm:flex absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/90 backdrop-blur-sm rounded-full items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-white transition-all duration-300 shadow-lg hover:scale-110 z-10"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Mobile Navigation Buttons */}
          <div className="flex sm:hidden justify-between items-center mt-4 px-4">
            <button
              onClick={prevProject}
              className="flex items-center justify-center w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full text-slate-600 hover:text-blue-600 hover:bg-white transition-all duration-300 shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="text-slate-600 font-medium">
              {currentProject + 1} / {projects.length}
            </div>
            
            <button
              onClick={nextProject}
              className="flex items-center justify-center w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full text-slate-600 hover:text-blue-600 hover:bg-white transition-all duration-300 shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 md:mt-8 space-x-2 md:space-x-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentProject
                    ? 'bg-blue-600 scale-125'
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          {/* Project Thumbnails - Hidden on mobile, visible on larger screens */}
          <div className="hidden md:grid mt-8 grid-cols-3 lg:grid-cols-6 gap-4">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => goToProject(index)}
                className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                  index === currentProject
                    ? 'ring-2 ring-blue-600 scale-105'
                    : 'hover:scale-105'
                }`}
              >
                {project.previewUrl === 'coming-soon' ? (
                  <div className="w-full h-16 md:h-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
                    <div className="w-4 h-4 md:w-6 md:h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-2 h-2 md:w-4 md:h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                  </div>
                ) : (
                  <iframe
                    src={project.previewUrl}
                    title={project.title}
                    className="w-full h-16 md:h-20 border-0 pointer-events-none"
                    sandbox="allow-scripts allow-forms allow-popups allow-top-navigation"
                    loading="lazy"
                  />
                )}
                <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${
                    index === currentProject ? 'bg-blue-600' : 'bg-white/60'
                  }`}></div>
                </div>
              </button>
            ))}
          </div>

          {/* Mobile Project List - Visible only on mobile */}
          <div className="md:hidden mt-6">
            <h4 className="text-slate-600 font-medium mb-4 text-center">Other Projects</h4>
            <div className="grid grid-cols-2 gap-3">
              {projects.map((project, index) => (
                index !== currentProject && (
                  <button
                    key={project.id}
                    onClick={() => goToProject(index)}
                    className="p-3 bg-white rounded-lg shadow-sm border border-slate-200 hover:border-blue-300 transition-all duration-300 text-left"
                  >
                    <h5 className="font-semibold text-slate-800 text-sm mb-1 line-clamp-1">
                      {project.title}
                    </h5>
                    <p className="text-xs text-slate-600 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {project.technologies.slice(0, 2).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 2 && (
                        <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-xs">
                          +{project.technologies.length - 2}
                        </span>
                      )}
                    </div>
                  </button>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects