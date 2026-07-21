import { useEffect, useState } from 'react'

const HEADER_OFFSET = 88

export function useActiveSection(sectionHrefs: string[]) {
  const [activeHref, setActiveHref] = useState(sectionHrefs[0] ?? '#home')

  useEffect(() => {
    const updateActive = () => {
      const scrollPos = window.scrollY + HEADER_OFFSET
      let current = sectionHrefs[0] ?? '#home'

      for (const href of sectionHrefs) {
        const el = document.querySelector(href)
        if (el && el.getBoundingClientRect().top + window.scrollY <= scrollPos) {
          current = href
        }
      }

      setActiveHref(current)
    }

    updateActive()
    window.addEventListener('scroll', updateActive, { passive: true })
    window.addEventListener('resize', updateActive)

    return () => {
      window.removeEventListener('scroll', updateActive)
      window.removeEventListener('resize', updateActive)
    }
  }, [sectionHrefs])

  return activeHref
}
