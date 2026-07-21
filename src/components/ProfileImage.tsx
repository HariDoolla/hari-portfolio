import { useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/resume'

interface ProfileImageProps {
  size?: 'md' | 'lg'
  className?: string
}

export default function ProfileImage({ size = 'md', className = '' }: ProfileImageProps) {
  const [hasError, setHasError] = useState(false)

  const sizeClasses =
    size === 'lg'
      ? 'h-56 w-56 sm:h-64 sm:w-64'
      : 'h-44 w-44 sm:h-52 sm:w-52'

  const initials = profile.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`relative ${className}`}
    >
      <div
        className={`relative overflow-hidden rounded-2xl border-2 border-slate-200/80 shadow-lg dark:border-slate-700/60 ${sizeClasses}`}
      >
        {!hasError ? (
          <img
            src="/profile.jpg"
            alt={profile.name}
            className="h-full w-full object-cover object-top"
            onError={() => setHasError(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-600 to-violet-600">
            <span className="font-display text-4xl font-bold text-white">{initials}</span>
          </div>
        )}
      </div>
    </motion.div>
  )
}
