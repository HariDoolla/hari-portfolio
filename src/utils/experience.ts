/** Career start: September 1, 2018 */
const CAREER_START_YEAR = 2018
const CAREER_START_MONTH = 8 // September (0-indexed)

export interface ExperienceDuration {
  years: number
  months: number
}

function getReferenceMonth(now: Date): { year: number; month: number } {
  let year = now.getFullYear()
  let month = now.getMonth()

  // Before the 15th: count experience through the previous month only.
  if (now.getDate() < 15) {
    month -= 1
    if (month < 0) {
      month = 11
      year -= 1
    }
  }

  return { year, month }
}

export function getExperienceDuration(now = new Date()): ExperienceDuration {
  const { year, month } = getReferenceMonth(now)
  const totalMonths = Math.max(
    0,
    (year - CAREER_START_YEAR) * 12 + (month - CAREER_START_MONTH),
  )

  return {
    years: Math.floor(totalMonths / 12),
    months: totalMonths % 12,
  }
}

/** Apply display rounding: 10+ months → next full year. */
function getDisplayDuration(now = new Date()): ExperienceDuration {
  const { years, months } = getExperienceDuration(now)

  if (months >= 10) {
    return { years: years + 1, months: 0 }
  }

  return { years, months }
}

function formatYearLabel(years: number): string {
  return years === 1 ? '1 year' : `${years} years`
}

function formatMonthLabel(months: number): string {
  return months === 1 ? '1 month' : `${months} months`
}

export function formatExperience(now = new Date()): string {
  const { years, months } = getDisplayDuration(now)

  if (years === 0 && months === 0) return '0 months'
  if (years === 0) return formatMonthLabel(months)
  if (months === 0) return formatYearLabel(years)

  return `${formatYearLabel(years)} ${formatMonthLabel(months)}`
}

export function formatExperienceBadge(now = new Date()): string {
  return `${formatExperience(now)} Exp.`
}

export function formatExperienceHero(): string {
  return '8+ Years of Experience'
}

export function formatExperienceSubtitle(now = new Date()): string {
  return `${formatExperience(now)} of building scalable frontend applications across healthcare, telecom, logistics, and data analytics.`
}

export function formatAboutLead(now = new Date()): string {
  return `With ${formatExperience(now)} in software development, I specialize in building scalable, high-performance web applications using React.js, TypeScript, JavaScript (ES6+), Redux, HTML5, CSS3, and modern UI libraries across Healthcare, Telecommunications, Supply Chain, and Data Analytics.`
}
