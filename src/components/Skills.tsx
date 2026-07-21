import { useCallback, useEffect, useRef, useState, type MouseEvent, type WheelEvent } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { SkillItem } from '../data/resume'
import AnimatedSection from './AnimatedSection'
import { skillsWithIcons, sectionCopy } from '../data/resume'

function SkillIcon({ skill }: { skill: SkillItem }) {
  if (skill.letterIcon) {
    return (
      <span
        className="flex h-7 w-7 items-center justify-center rounded-md bg-slate-800 text-sm font-bold text-white dark:bg-slate-200 dark:text-slate-900"
        aria-hidden="true"
      >
        {skill.letterIcon}
      </span>
    )
  }

  return (
    <img
      src={skill.icon}
      alt=""
      width={28}
      height={28}
      className="h-7 w-7 object-contain"
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
    />
  )
}

function SkillMarqueeRow({
  items,
  direction,
}: {
  items: SkillItem[]
  direction: 'left' | 'right'
}) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)
  const isDragging = useRef(false)
  const dragStart = useRef({ x: 0, scrollLeft: 0 })
  const doubled = [...items, ...items]

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    if (direction === 'right') {
      el.scrollLeft = el.scrollWidth / 2
    }
  }, [direction, items])

  useEffect(() => {
    const el = scrollRef.current
    if (!el || hovered) return

    let raf = 0
    const step = () => {
      const half = el.scrollWidth / 2
      if (half <= 0) {
        raf = requestAnimationFrame(step)
        return
      }

      if (direction === 'left') {
        el.scrollLeft += 0.7
        if (el.scrollLeft >= half) el.scrollLeft -= half
      } else {
        el.scrollLeft -= 0.7
        if (el.scrollLeft <= 0) el.scrollLeft += half
      }

      raf = requestAnimationFrame(step)
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [hovered, direction, items])

  const scrollBy = useCallback((delta: number) => {
    scrollRef.current?.scrollBy({ left: delta, behavior: 'smooth' })
  }, [])

  const handleMouseDown = (e: MouseEvent) => {
    if (!scrollRef.current) return
    isDragging.current = true
    dragStart.current = {
      x: e.clientX,
      scrollLeft: scrollRef.current.scrollLeft,
    }
    scrollRef.current.style.cursor = 'grabbing'
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return
    e.preventDefault()
    const dx = e.clientX - dragStart.current.x
    scrollRef.current.scrollLeft = dragStart.current.scrollLeft - dx
  }

  const endDrag = () => {
    isDragging.current = false
    if (scrollRef.current) {
      scrollRef.current.style.cursor = hovered ? 'grab' : 'default'
    }
  }

  const handleWheel = (e: WheelEvent) => {
    if (!hovered || !scrollRef.current) return
    e.preventDefault()
    scrollRef.current.scrollLeft += e.deltaY + e.deltaX
  }

  return (
    <div
      className="marquee-mask group/row relative py-3"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false)
        endDrag()
      }}
    >
      {hovered && (
        <>
          <button
            type="button"
            onClick={() => scrollBy(-240)}
            aria-label="Scroll skills left"
            className="absolute top-1/2 left-1 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200/80 bg-white/95 text-slate-600 shadow-md transition hover:border-brand-300 hover:text-brand-600 dark:border-white/10 dark:bg-slate-900/90 dark:text-slate-200 dark:hover:border-brand-500/40 dark:hover:text-brand-400"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(240)}
            aria-label="Scroll skills right"
            className="absolute top-1/2 right-1 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200/80 bg-white/95 text-slate-600 shadow-md transition hover:border-brand-300 hover:text-brand-600 dark:border-white/10 dark:bg-slate-900/90 dark:text-slate-200 dark:hover:border-brand-500/40 dark:hover:text-brand-400"
          >
            <ChevronRight size={18} />
          </button>
        </>
      )}

      <div
        ref={scrollRef}
        className={`scrollbar-hide flex gap-6 overflow-x-auto py-1 ${hovered ? 'cursor-grab' : ''}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
        onWheel={handleWheel}
      >
        {doubled.map((skill, index) => (
          <a
            key={`${skill.name}-${index}`}
            href={skill.url}
            target="_blank"
            rel="noopener noreferrer"
            draggable={false}
            className="flex shrink-0 items-center gap-3 rounded-xl border border-slate-200/70 bg-white/85 px-4 py-2.5 shadow-sm transition hover:border-brand-300 hover:bg-white hover:shadow-md select-none dark:border-white/10 dark:bg-white/5 dark:hover:border-brand-500/40 dark:hover:bg-white/10"
            aria-label={`Visit ${skill.name} official website`}
          >
            <SkillIcon skill={skill} />
            <span className="whitespace-nowrap text-sm font-medium text-slate-700 dark:text-slate-200">
              {skill.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const midpoint = Math.ceil(skillsWithIcons.length / 2)
  const topRow = skillsWithIcons.slice(0, midpoint)
  const bottomRow = skillsWithIcons.slice(midpoint)

  return (
    <AnimatedSection id="skills" className="py-14 sm:py-20">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle mx-auto">{sectionCopy.skills}</p>
        </div>

        <div className="mt-12 space-y-4">
          <SkillMarqueeRow items={topRow} direction="left" />
          <SkillMarqueeRow items={bottomRow} direction="right" />
        </div>
      </div>
    </AnimatedSection>
  )
}
