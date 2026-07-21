import { profile } from '../data/resume'

const phoneDigits = profile.phone.replace(/\D/g, '')

export const whatsappUrl = phoneDigits ? `https://wa.me/${phoneDigits}` : '#'
