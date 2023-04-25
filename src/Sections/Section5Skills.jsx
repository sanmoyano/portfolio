import { useRef } from "react"
import { Stack } from "@chakra-ui/react"

import useDimensions from "../Hooks/useDimensions"
import { SkillsBlock, ParallaxContainer, VerticalText } from "../Components"

const Section5Skills = () => {
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
        <VerticalText content={"skills"} id={"skills"} refItem={HEIGHT_TEXT_REF} />
        <SkillsBlock dimension={dimension} />
      </Stack>
    </ParallaxContainer>
  )
}

export default Section5Skills
