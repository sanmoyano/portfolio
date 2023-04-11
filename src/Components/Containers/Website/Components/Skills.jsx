import { useRef } from "react"

import useDimensions from "../Hooks/useDimensions"
import { VerticalText } from "../Decorators"

import { SkillsBlock } from "."

const Skills = ({ isHovered }) => {
  const HEIGHT_TEXT_REF = useRef()
  const dimension = useDimensions(HEIGHT_TEXT_REF)

  return (
    <>
      <VerticalText content={"skills"} id={"skills"} refItem={HEIGHT_TEXT_REF} />
      <SkillsBlock dimension={dimension} isHovered={isHovered} />
    </>
  )
}

export default Skills
