import { useRef } from "react"

import { VerticalText } from "../Decorators"
import useDimensions from "../Hooks/useDimensions"

import { AboutBlock } from "./"

const About = ({ hovering }) => {
  const { isHovered } = hovering
  const HEIGHT_TEXT_REF = useRef()
  const dimension = useDimensions(HEIGHT_TEXT_REF)

  return (
    <>
      <VerticalText content={"about"} hovering={hovering} id={"about"} refItem={HEIGHT_TEXT_REF} />
      <AboutBlock dimension={dimension} isHovered={isHovered} />
    </>
  )
}

export default About
