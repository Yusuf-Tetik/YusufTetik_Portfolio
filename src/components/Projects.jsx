import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { projects } from '../data/projects'

function Projects() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const commercialProjects = projects.filter((p) => p.isCommercial)
  const otherProjects = projects.filter((p) => !p.isCommercial)

  const ProjectCard = ({ project, isCommercial }) => (
    <div
      key={project.id}
      className={`rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow ${
        isCommercial
          ? 'bg-violet-50/90 dark:bg-violet-950/40 border-2 border-violet-400 dark:border-violet-500'
          : 'bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
      }`}
    >
      {isCommercial && (
        <span className="inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full bg-violet-200 dark:bg-violet-800 text-violet-800 dark:text-violet-200 mb-3">
          {t('projects.commercialSection')}
        </span>
      )}
      <h3
        className={`text-2xl font-semibold mb-3 ${
          isCommercial
            ? 'text-violet-800 dark:text-violet-300'
            : 'text-primary-600 dark:text-primary-400'
        }`}
      >
        {t(`projects.items.${project.slug}.title`)}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
        {t(`projects.items.${project.slug}.shortDescription`)}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.techStack.map((tech, index) => (
          <span
            key={index}
            className={`px-3 py-1 text-sm rounded-full ${
              isCommercial
                ? 'bg-violet-100 dark:bg-violet-900/50 text-violet-800 dark:text-violet-200'
                : 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300'
            }`}
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4 flex-wrap">
        <button
          onClick={() => navigate(`/projects/${project.slug}`)}
          className={`px-4 py-2 rounded-lg transition-colors ${
            isCommercial
              ? 'bg-violet-600 dark:bg-violet-500 text-white hover:bg-violet-700 dark:hover:bg-violet-600'
              : 'bg-primary-600 dark:bg-primary-500 text-white hover:bg-primary-700 dark:hover:bg-primary-600'
          }`}
        >
          {t('projects.detail')}
        </button>
        {project.siteUrl && (
          <a
            href={project.siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2 rounded-lg border-2 transition-colors ${
              isCommercial
                ? 'bg-white dark:bg-gray-900 text-violet-600 dark:text-violet-400 border-violet-600 dark:border-violet-400 hover:bg-violet-50 dark:hover:bg-gray-800'
                : 'bg-white dark:bg-gray-900 text-primary-600 dark:text-primary-400 border-primary-600 dark:border-primary-400 hover:bg-primary-50 dark:hover:bg-gray-800'
            }`}
          >
            {t('projects.visitSite')}
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            {t('projects.github')}
          </a>
        )}
      </div>
    </div>
  )

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          {t('projects.title')}
        </h2>

        {commercialProjects.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-violet-700 dark:text-violet-400 mb-6 flex items-center gap-2">
              <span className="w-1 h-6 rounded-full bg-violet-500" />
              {t('projects.commercialSection')}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {commercialProjects.map((project) => (
                <ProjectCard key={project.id} project={project} isCommercial />
              ))}
            </div>
          </div>
        )}

        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-6 flex items-center gap-2">
              <span className="w-1 h-6 rounded-full bg-primary-500" />
              {t('projects.otherSection')}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} isCommercial={false} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
