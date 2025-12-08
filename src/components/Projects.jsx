import { useNavigate } from 'react-router-dom'
import { projects } from '../data/projects'

function Projects() {
  const navigate = useNavigate()

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Projeler
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-2xl font-semibold mb-3 text-primary-600 dark:text-primary-400">
                {project.projectTitle}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {project.shortDescription}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => navigate(`/projects/${project.slug}`)}
                  className="px-4 py-2 bg-primary-600 dark:bg-primary-500 text-white rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors"
                >
                  Detay
                </button>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

