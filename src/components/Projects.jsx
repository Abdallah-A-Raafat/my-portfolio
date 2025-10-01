import { useState, useEffect } from 'react'

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0)

  const projects = [
    {
      id: 1,
      title: 'Tic Tac Toe Game',
      description: 'Interactive tic-tac-toe game built with React featuring smooth animations and game state management.',
      previewUrl: 'https://tic-tac-toe-sable-zeta.vercel.app/',
      technologies: ['React', 'CSS', 'JavaScript'],
      liveUrl: 'https://tic-tac-toe-sable-zeta.vercel.app/',
      features: ['Interactive gameplay', 'Responsive design', 'Game state management']
    },
    {
      id: 2,
      title: 'Currency Converter',
      description: 'Real-time currency converter application with live exchange rates and clean user interface.',
      previewUrl: 'https://currency-converter-psi-green.vercel.app/',
      technologies: ['React', 'API Integration', 'CSS'],
      liveUrl: 'https://currency-converter-psi-green.vercel.app/',
      features: ['Live exchange rates', 'Multiple currencies', 'Clean UI']
    },
    {
      id: 3,
      title: 'Todo Application',
      description: 'Feature-rich todo application with task management, filtering, and local storage persistence.',
      previewUrl: 'https://todo-beta-flax-14.vercel.app/',
      technologies: ['React', 'Local Storage', 'CSS'],
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
      technologies: ['Python', 'Machine Learning', 'Data Analysis'],
      liveUrl: 'https://seizure-detection-project-7hyi.vercel.app/',
      features: ['ML algorithms', 'Data visualization', 'Medical analysis']
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
          <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white">
            {/* Project Preview */}
            <div className="relative h-96 md:h-[500px] overflow-hidden">
              <iframe
                src={projects[currentProject].previewUrl}
                title={projects[currentProject].title}
                className="w-full h-full border-0 transition-all duration-500"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Project Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  {projects[currentProject].title}
                </h3>
                <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl">
                  {projects[currentProject].description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[currentProject].technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Live Demo Button */}
                <a
                  href={projects[currentProject].liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-white transition-all duration-300 shadow-lg hover:scale-110 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-white transition-all duration-300 shadow-lg hover:scale-110 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject
                    ? 'bg-blue-600 scale-125'
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          {/* Project Thumbnails */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
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
                <iframe
                  src={project.previewUrl}
                  title={project.title}
                  className="w-full h-20 border-0 pointer-events-none"
                  sandbox="allow-scripts allow-same-origin"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-2 h-2 rounded-full ${
                    index === currentProject ? 'bg-blue-600' : 'bg-white/60'
                  }`}></div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects