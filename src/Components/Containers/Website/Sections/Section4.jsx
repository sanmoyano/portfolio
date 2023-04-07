import { useState } from "react"
import { Stack } from "@chakra-ui/react"

import { About, SkillsBlock } from "../Components"

const Section7 = () => {
  const [isHovered, setHovered] = useState(false)

  return (
    <Stack
      alignItems={"center"}
      // bgColor={"red"}
      direction={{ base: "column", md: "row" }}
      height={"100vh"}
      position={"relative"}
      spacing={2}
      width={"100%"}
    >
      <About hovering={{ isHovered, setHovered }} />
      {/* <SkillsBlock isHovered={isHovered} /> */}
    </Stack>
  )
}

export default Section7
