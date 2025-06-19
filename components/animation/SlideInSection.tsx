'use client'
// SlideInSection.tsx
import {
  CSSStyleDeclarationWithTransform,
  HTMLMotionProps,
  motion,
  TargetAndTransition,
  useAnimation,
  useInView,
} from 'framer-motion'
import { useEffect, useRef } from 'react'
import { AnimeConfig, AnimeProps } from './anime.interface'

interface Props extends HTMLMotionProps<'section'>, AnimeProps {}

export const SlideInSection = ({
  side,
  delay = 0,
  duration = 0.6,
  offset = 100,
  ...props
}: Props) => {
  const { variants, ...rest } = props

  const variantAnime: Record<string, AnimeConfig> = {
    left: {
      startPos: offset * -1,
      endPos: 0,
      direction: 'x',
    },
    right: {
      startPos: offset,
      endPos: 0,
      direction: 'x',
    },
    top: {
      startPos: offset * -1,
      endPos: 0,
      direction: 'y',
    },
    bottom: {
      startPos: offset,
      endPos: 0,
      direction: 'y',
    },
  }

  const currentVariant = variantAnime[side]

  const direction = currentVariant.direction as string

  const ref = useRef(null)
  const inView = useInView(ref, {
    once: true,
    margin: `-100px`,
  })

  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [inView, controls])
  const visible: any = {
    opacity: 1,
    [direction]: currentVariant.endPos,
    transition: { duration, delay, ease: 'easeOut' },
  }
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {
          opacity: 0,
          [direction]: currentVariant.startPos,
        },
        visible,
        ...variants,
      }}
      {...rest}
    />
  )
}
