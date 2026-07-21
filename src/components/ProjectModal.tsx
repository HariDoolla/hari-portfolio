import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Building2, Calendar, Code2, X } from 'lucide-react'
import type { Project } from '../data/resume'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="card-surface scrollbar-hide relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto p-6 sm:p-8 shadow-2xl shadow-brand-500/10"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold tracking-widest text-brand-600 uppercase dark:text-brand-400">
                  Project Details
                </p>
                <h3
                  id="project-modal-title"
                  className="mt-2 font-display text-2xl font-bold text-slate-900 dark:text-white"
                >
                  {project.name}
                </h3>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="shrink-0 rounded-lg border border-slate-200 p-2 text-slate-500 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mt-5 flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <Building2 size={16} className="shrink-0 text-brand-500" />
                <span>
                  <span className="font-medium text-slate-800 dark:text-slate-100">Company:</span>{' '}
                  {project.company}
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <Calendar size={16} className="shrink-0 text-brand-500" />
                <span>
                  <span className="font-medium text-slate-800 dark:text-slate-100">Duration:</span>{' '}
                  {project.period}
                </span>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {project.fullDescription.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-6">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-100">
                <Code2 size={16} className="text-brand-500" />
                Technologies Used
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tag-pill px-3 py-1.5">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
