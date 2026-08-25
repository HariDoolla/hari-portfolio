import { motion } from 'framer-motion'
import { Download, ExternalLink, FileText, Link2, Mail, Phone } from 'lucide-react'
import { profile, resumeFiles } from '../data/resume'
import { formatExperienceHero } from '../utils/experience'
import { fadeUp, staggerContainer } from '../utils/animations'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <motion.div
        className="section-container relative py-14 sm:py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl text-center"
        >
          <motion.p
            variants={fadeUp}
            className="mb-5 inline-flex items-center rounded-full border border-brand-300/40 bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-700 backdrop-blur-sm dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-300"
          >
            {formatExperienceHero()}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl dark:text-white"
          >
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-brand-600 via-violet-500 to-cyan-500 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 text-xl font-semibold text-slate-800 sm:text-2xl dark:text-slate-100"
          >
            {profile.title}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass"
            >
              <Link2 size={16} />
              LinkedIn
            </a>
            <a
              href={resumeFiles.pdf.path}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass"
            >
              <ExternalLink size={16} />
              View Resume
            </a>
            <a
              href={resumeFiles.pdf.path}
              download={resumeFiles.pdf.downloadName}
              className="btn-glass"
            >
              <Download size={16} />
              Download PDF
            </a>
            <a
              href={resumeFiles.docx.path}
              download={resumeFiles.docx.downloadName}
              className="btn-glass"
            >
              <FileText size={16} />
              Download DOCX
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500 dark:text-slate-400"
          >
            <a
              href={`tel:${profile.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 transition hover:text-brand-600 dark:hover:text-brand-400"
            >
              <Phone size={15} />
              {profile.phone}
            </a>
            <span className="hidden h-4 w-px bg-slate-300 sm:block dark:bg-slate-700" />
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 transition hover:text-brand-600 dark:hover:text-brand-400"
            >
              <Mail size={15} />
              {profile.email}
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
