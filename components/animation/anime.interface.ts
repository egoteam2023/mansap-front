import { HTMLMotionProps } from 'framer-motion'

interface AnimeConfig {
  direction: 'x' | 'y'
  startPos: number
  endPos: number
}
interface AnimeProps {
  side: 'left' | 'top' | 'bottom' | 'right'
  delay?: number
  offset?: number
  duration?: number
}
export type { AnimeConfig, AnimeProps }
