import { motion } from 'framer-motion'

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Light mode base — clean, neutral, low saturation */}
      <motion.div
        className="absolute inset-0 dark:hidden"
        animate={{
          background: [
            'linear-gradient(135deg, rgb(248 250 252) 0%, rgb(255 255 255) 60%, rgb(241 245 249) 100%)',
            'linear-gradient(135deg, rgb(248 250 252) 0%, rgb(252 252 255) 60%, rgb(241 245 249) 100%)',
            'linear-gradient(135deg, rgb(248 250 252) 0%, rgb(255 255 255) 60%, rgb(241 245 249) 100%)',
          ],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Dark mode base — reverted to original deep slate tones */}
      <div className="absolute inset-0 hidden bg-gradient-to-br from-[#0a0a12] via-[#0d0d1a] to-[#0f0a1a] dark:block" />

      {/* Aurora blobs — toned down in light mode */}
      <motion.div
        className="absolute -top-40 left-[10%] h-[500px] w-[500px] rounded-full bg-brand-400/8 blur-[120px] dark:bg-brand-600/10"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-[40%] -right-40 h-[400px] w-[400px] rounded-full bg-violet-400/6 blur-[100px] dark:bg-violet-600/8"
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-40 left-[30%] h-[450px] w-[450px] rounded-full bg-cyan-400/5 blur-[100px] dark:bg-cyan-600/6"
        animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.12] dark:opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(100, 116, 139, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100, 116, 139, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Dot texture — very subtle in light */}
      <motion.div
        className="absolute inset-0 opacity-[0.15] dark:opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(99,102,241,0.08) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(241,245,249,0.6)_100%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(8,8,15,0.7)_100%)]" />
    </div>
  )
}
