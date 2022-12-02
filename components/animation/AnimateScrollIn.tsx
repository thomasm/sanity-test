import React, { HTMLProps } from 'react'

import { Anime, AnimeProps } from './Anime'
import { useScrollProgress } from './ScrollProgressContext'

export type AnimeScrollProps = {
  startProgress?: number
  stopProgress?: number
}

export function AnimateScrollIn(
  props: AnimeScrollProps & AnimeProps & Omit<HTMLProps<HTMLDivElement>, 'ref'>
) {
  const { startProgress = 0, stopProgress = 1, ...rest } = props
  const progress = useScrollProgress()
  const duration = stopProgress - startProgress
  const scaledProgress = Math.min(
    Math.max((progress.in - startProgress) / duration, 0),
    1
  )
  return <Anime {...rest} progress={scaledProgress} />
}
