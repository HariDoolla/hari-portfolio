import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { education, sectionCopy } from '../data/resume'
import AnimatedSection from './AnimatedSection'
import { staggerContainer, fadeUp } from '../utils/animations'

export default function Education() {
  return (
    <AnimatedSection id="education" className="py-14 sm:py-20">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle mx-auto">{sectionCopy.education}</p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mx-auto mt-12 grid max-w-4xl gap-5"
        >
          {education.map((item) => (
            <motion.div
              key={item.degree}
              variants={fadeUp}
              className="card-surface card-surface-interactive flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 dark:bg-brand-950/50">
                  <GraduationCap className="text-brand-600 dark:text-brand-400" size={22} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-slate-900 dark:text-white">
                    {item.degree}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    {item.institution}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 sm:flex-col sm:items-end sm:gap-1">
                <span className="tag-pill text-sm px-3 py-1">
                  {item.score}
                </span>
                <span className="text-sm text-slate-500 dark:text-slate-400">{item.period}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
