import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { navLinks } from '../data/resume'
import { useTheme } from '../context/ThemeContext'
import { useActiveSection } from '../hooks/useActiveSection'

const linkBaseClass =
  'rounded-lg px-3 py-2 text-sm font-medium transition-colors'

const linkInactiveClass =
  'text-slate-600 hover:bg-white/50 hover:text-brand-600 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-brand-400'

const linkActiveClass =
  'bg-brand-500/10 font-semibold text-brand-700 dark:bg-brand-500/15 dark:text-brand-300'

const mobileLinkInactiveClass =
  'block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-white/50 dark:text-slate-200 dark:hover:bg-white/5'

const mobileLinkActiveClass =
  'block rounded-lg bg-brand-500/10 px-3 py-2.5 text-sm font-semibold text-brand-700 dark:bg-brand-500/15 dark:text-brand-300'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const activeHref = useActiveSection(navLinks.map((link) => link.href))

  const handleNavClick = (href: string) => {
    setOpen(false)
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="glass-nav fixed inset-x-0 top-0 z-50">
      <nav className="section-container flex h-16 items-center justify-between">
        <button
          type="button"
          className="rounded-lg border border-slate-300/90 bg-white/60 p-2 text-slate-600 shadow-sm backdrop-blur-sm transition hover:border-slate-400 hover:bg-white/80 md:hidden dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:shadow-none dark:hover:bg-white/10"
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>

        <ul className="hidden flex-1 items-center justify-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href)
                }}
                className={`${linkBaseClass} ${
                  activeHref === link.href ? linkActiveClass : linkInactiveClass
                }`}
                aria-current={activeHref === link.href ? 'page' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <motion.div
          className="flex items-center md:ml-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            className="rounded-lg border border-slate-300/90 bg-white/60 p-2 text-slate-600 shadow-sm backdrop-blur-sm transition hover:border-slate-400 hover:bg-white/80 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:shadow-none dark:hover:bg-white/10"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </motion.div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/20 md:hidden dark:border-white/10"
          >
            <ul className="section-container flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }}
                    className={
                      activeHref === link.href ? mobileLinkActiveClass : mobileLinkInactiveClass
                    }
                    aria-current={activeHref === link.href ? 'page' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
