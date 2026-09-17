import { motion } from 'framer-motion'
import { profile, sectionCopy } from '../data/resume'
import AnimatedSection from './AnimatedSection'
import ProfileImage from './ProfileImage'
import { staggerContainer, fadeUp } from '../utils/animations'

export default function About() {
  return (
    <AnimatedSection id="about" className="py-14 sm:py-20">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle mx-auto">{sectionCopy.about}</p>
        </div>

        <div className="about-card card-surface mx-auto mt-12 max-w-5xl p-6 sm:p-10">
              <div className="grid items-center gap-10 lg:grid-cols-[240px_1fr]">
                <div className="flex flex-col items-center gap-4">
                  <ProfileImage size="md" />
                  <div className="text-center">
                    <p className="font-display text-lg font-bold text-slate-900 dark:text-white">
                      {profile.name}
                    </p>
                    <p className="max-w-[220px] text-sm font-medium leading-snug text-brand-600 dark:text-brand-400">
                      {profile.title}
                    </p>
                    <span className="tag-pill mt-2 inline-block">
                      8+ Years Exp.
                    </span>
                  </div>
                </div>

                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  className="space-y-5"
                >
                  <motion.p
                    variants={fadeUp}
                    className="text-base leading-relaxed text-slate-600 dark:text-slate-300"
                  >
                    {profile.professionalSummary}
                  </motion.p>
                </motion.div>
              </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
