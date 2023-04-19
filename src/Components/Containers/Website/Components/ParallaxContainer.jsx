import React from "react"
import { Parallax } from "react-scroll-parallax"

const ParallaxContainer = ({ children }) => {
  const speedCalc = (id) => (id % 2 === 0 ? -id * 7 : id * 12)

  return (
    <>
      <Parallax speed={speedCalc(children.props.id)}>{children}</Parallax>
    </>
  )
}

export default ParallaxContainer
