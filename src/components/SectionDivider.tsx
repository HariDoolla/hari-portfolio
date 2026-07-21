import { motion } from 'framer-motion'

export default function SectionDivider() {
  return (
    <motion.div
      className="section-container py-1"
      initial={{ opacity: 0, scaleX: 0.6 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative flex items-center justify-center">
        <motion.div
          className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-brand-400/40 to-transparent dark:via-brand-500/30"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute h-1.5 w-1.5 rounded-full bg-brand-500/60 shadow-[0_0_12px_rgba(99,102,241,0.5)] dark:bg-brand-400/50"
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  )
}
