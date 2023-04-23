import { useRef } from "react"

import { VerticalText } from "../Decorators"
import useDimensions from "../Hooks/useDimensions"

import { AboutBlock } from "./"

const About = () => {
  const HEIGHT_TEXT_REF = useRef()
  const dimension = useDimensions(HEIGHT_TEXT_REF)

  return (
    <>
      <VerticalText content={"about"} id={"about"} refItem={HEIGHT_TEXT_REF} />
      <AboutBlock dimension={dimension} />
    </>
  )
}

export default About
