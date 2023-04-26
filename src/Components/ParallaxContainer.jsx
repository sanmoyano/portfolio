import React from "react"
import { Parallax } from "react-scroll-parallax"

const ParallaxContainer = ({ children }) => {
  const childId = children?.props?.id
  const speedCalc = (id) => (id % 2 === 0 ? id * -1.5 : id * 1.5)

  return <Parallax speed={speedCalc(childId)}>{children}</Parallax>
}

export default ParallaxContainer
