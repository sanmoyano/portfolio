import { useRef } from "react"
import { Stack } from "@chakra-ui/react"

import useDimensions from "../../Hooks/useDimensions"
import { SkillsBlock, ParallaxContainer, Titles } from "../../Components"
import { verticalText } from "../../Theme/styles/verticalText"
const Skills = () => {
  const HEIGHT_TEXT_REF = useRef()
  const dimension = useDimensions(HEIGHT_TEXT_REF)

  return (
    <ParallaxContainer>
      <Stack
        alignItems={"center"}
        direction={{ base: "column", md: "row" }}
        height={"100vh"}
        id={5}
      >
        <Titles
          content={"skills"}
          refItem={HEIGHT_TEXT_REF}
          textStyle={"h1"}
          tiltingScale={1.2}
          vertical={verticalText}
        />
        <SkillsBlock dimension={dimension} />
      </Stack>
    </ParallaxContainer>
  )
}

export default Skills
