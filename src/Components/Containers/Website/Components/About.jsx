import { useRef } from "react"

import { VerticalText } from "../Decorators"
import useDimensions from "../Hooks/useDimensions"

import { AboutBlock } from "./"

const About = ({ hovering, visible }) => {
  const { isHovered } = hovering
  const { isVisible, setVisible } = visible

  const HEIGHT_TEXT_REF = useRef()
  const dimension = useDimensions(HEIGHT_TEXT_REF)

  return (
    <>
      <VerticalText
        content={"about"}
        hovering={hovering}
        id={"about"}
        refItem={HEIGHT_TEXT_REF}
        setVisible={setVisible}
      />
      <AboutBlock dimension={dimension} isHovered={isHovered} isVisible={isVisible} />
    </>
  )
}

export default About
