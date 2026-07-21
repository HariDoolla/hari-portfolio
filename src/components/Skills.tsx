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
  const doubled = [...items, ...items]
  const animationClass =
    direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'

  return (
    <div className="marquee-mask group/row relative overflow-hidden py-3">
      <div
        className={`flex w-max gap-6 ${animationClass} group-hover/row:[animation-play-state:paused]`}
      >
        {doubled.map((skill, index) => (
          <a
            key={`${skill.name}-${index}`}
            href={skill.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center gap-3 rounded-xl border border-slate-200/70 bg-white/85 px-4 py-2.5 shadow-sm transition hover:border-brand-300 hover:bg-white hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:border-brand-500/40 dark:hover:bg-white/10"
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
