import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import WhatsAppIcon from './icons/WhatsAppIcon'
import { profile } from '../data/resume'
import { whatsappUrl } from '../utils/social'

function XIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

const iconBaseClass =
  'flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300/80 bg-white/90 text-slate-600 shadow-sm backdrop-blur-sm transition-all duration-200 dark:border-white/10 dark:bg-white/5 dark:text-slate-300'

const iconHoverClass =
  'hover:border-brand-400 hover:bg-brand-50 hover:text-brand-600 hover:shadow-md hover:shadow-brand-500/10 dark:hover:border-brand-500/40 dark:hover:bg-brand-500/10 dark:hover:text-brand-400'

const whatsappHoverClass =
  'hover:border-[#25D366]/40 hover:bg-[#25D366]/10 hover:text-[#25D366] hover:shadow-md hover:shadow-[#25D366]/10'

export default function Footer() {
  return (
    <footer className="glass-nav border-t py-8">
      <motion.div
        className="section-container flex justify-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3">
          <span
            role="img"
            aria-label="X (Twitter)"
            className={`${iconBaseClass} ${iconHoverClass} cursor-default`}
          >
            <XIcon size={18} />
          </span>

          <span
            role="img"
            aria-label="Instagram"
            className={`${iconBaseClass} ${iconHoverClass} cursor-default`}
          >
            <InstagramIcon size={18} />
          </span>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message on WhatsApp"
            className={`${iconBaseClass} ${whatsappHoverClass} cursor-pointer hover:scale-105`}
          >
            <WhatsAppIcon size={18} />
          </a>

          <span
            role="img"
            aria-label="Facebook"
            className={`${iconBaseClass} ${iconHoverClass} cursor-default`}
          >
            <FacebookIcon size={18} />
          </span>

          <a
            href={`mailto:${profile.email}`}
            aria-label={`Send email to ${profile.email}`}
            className={`${iconBaseClass} ${iconHoverClass} cursor-pointer hover:scale-105`}
          >
            <Mail size={18} />
          </a>
        </div>
      </motion.div>
    </footer>
  )
}
