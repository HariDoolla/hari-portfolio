import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { experiences } from '../data/resume'
import { formatExperienceSubtitle } from '../utils/experience'
import AnimatedSection from './AnimatedSection'
import { staggerContainer, fadeUp } from '../utils/animations'

const TIMELINE_LEFT = 'left-8'

export default function Experience() {
  return (
    <AnimatedSection id="experience" className="py-14 sm:py-20">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle mx-auto">{formatExperienceSubtitle()}</p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="relative mx-auto mt-14 max-w-3xl"
        >
          <div
            className={`absolute top-0 ${TIMELINE_LEFT} h-full w-px -translate-x-1/2 bg-gradient-to-b from-brand-400 via-brand-200 to-transparent dark:from-brand-600 dark:via-brand-900`}
          />

          <div className="space-y-8">
            {experiences.map((exp) => (
              <motion.article
                key={`${exp.company}-${exp.period}`}
                variants={fadeUp}
                className="relative pl-16 sm:pl-20"
              >
                <div
                  className={`absolute ${TIMELINE_LEFT} top-0 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-brand-500 bg-white dark:bg-slate-950`}
                >
                  <Briefcase size={14} className="text-brand-600 dark:text-brand-400" />
                </div>

                <div className="card-surface p-5 sm:p-6">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <p className="mt-0.5 text-sm font-medium text-brand-600 dark:text-brand-400">
                        {exp.company}
                      </p>
                    </div>
                    <span className="mt-1 shrink-0 text-sm font-medium text-slate-500 dark:text-slate-400">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {exp.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
