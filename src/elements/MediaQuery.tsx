import facepaint from "facepaint"

const breakpoints = [576, 768, 992, 1200]

export const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

export const fp = facepaint(
  breakpoints.map(bp => `@media (min-width: ${bp}px)`)
)
