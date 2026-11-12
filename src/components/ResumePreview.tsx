import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Download, X } from 'lucide-react'
import { profile, resumeFiles } from '../data/resume'

interface ResumePreviewProps {
  open: boolean
  onClose: () => void
}

export default function ResumePreview({ open, onClose }: ResumePreviewProps) {
  useEffect(() => {
    if (!open) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-end justify-center p-3 sm:items-center sm:p-6"
        >
          <button
            type="button"
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
            aria-label="Close resume preview"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="card-surface relative z-10 flex h-[92vh] w-full max-w-5xl flex-col overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-preview-title"
          >
            <div className="flex shrink-0 items-center justify-between gap-3 border-b border-slate-200/70 px-4 py-3 dark:border-slate-700/60 sm:px-6">
              <div className="min-w-0">
                <p className="text-xs font-semibold tracking-widest text-brand-600 uppercase dark:text-brand-400">
                  Resume preview
                </p>
                <h3
                  id="resume-preview-title"
                  className="truncate font-display text-lg font-bold text-slate-900 dark:text-white"
                >
                  {profile.name} — Front-End Developer
                </h3>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <a
                  href={resumeFiles.pdf.path}
                  download={resumeFiles.pdf.downloadName}
                  className="btn-glass px-3 py-2 text-sm"
                >
                  <Download size={15} />
                  Download
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close resume preview"
                  className="rounded-lg border border-slate-200 p-2 text-slate-500 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <iframe
              title={`${profile.name} resume`}
              src={resumeFiles.pdf.path}
              className="h-full w-full flex-1 bg-slate-100 dark:bg-slate-900"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
