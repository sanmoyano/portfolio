import { useRef } from "react"
import { Stack } from "@chakra-ui/react"
import { AnimatePresence } from "framer-motion"

import useDimensions from "../../Hooks/useDimensions"
import { SkillsBlock, ParallaxContainer, Titles } from "../../Components"
import { verticalText } from "../../Theme/styles/verticalText"
const Skills = () => {
  const HEIGHT_TEXT_REF = useRef()
  const dimension = useDimensions(HEIGHT_TEXT_REF)

  return (
    <ParallaxContainer>
      <AnimatePresence id={5}>
        <Stack
          alignItems={"center"}
          direction={{ base: "column", md: "row" }}
          height={"100vh"}
          id={"skills"}
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
      </AnimatePresence>
    </ParallaxContainer>
  )
}

export default Skills
