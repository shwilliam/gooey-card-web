import React from 'react'

// https://css-tricks.com/gooey-effect/
export const Goo = () => (
  <svg className="goo-filter" viewBox="0 0 1 1">
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
      <feColorMatrix
        in="blur"
        mode="matrix"
        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 50 -20"
        result="goo"
      />
      <feBlend in="SourceGraphic" in2="goo" />
    </filter>
  </svg>
)
