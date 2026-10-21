import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { projects, sectionCopy, type Project } from '../data/resume'
import AnimatedSection from './AnimatedSection'
import ProjectModal from './ProjectModal'
import { staggerContainer, scaleIn } from '../utils/animations'

const tagClass = 'tag-pill'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <>
      <AnimatedSection id="projects" className="py-14 sm:py-20">
        <div className="section-container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle mx-auto">{sectionCopy.projects}</p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project) => (
              <motion.article
                key={project.name}
                variants={scaleIn}
                className="card-surface card-surface-interactive group flex cursor-pointer flex-col p-6"
                onClick={() => setSelectedProject(project)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setSelectedProject(project)
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`View details for ${project.name}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                      {project.name}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                      {project.company}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedProject(project)
                    }}
                    aria-label={`Open details for ${project.name}`}
                    className="shrink-0 rounded-lg border border-slate-200 p-1.5 text-slate-400 transition group-hover:border-brand-300 group-hover:text-brand-600 dark:border-slate-700 dark:group-hover:border-brand-700 dark:group-hover:text-brand-400"
                  >
                    <ArrowUpRight size={16} />
                  </button>
                </div>

                <p className="mt-2 text-xs font-medium text-brand-600 dark:text-brand-400">
                  {project.period}
                </p>

                <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className={tagClass}>
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className={tagClass}>+{project.technologies.length - 4} more</span>
                  )}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  )
}
