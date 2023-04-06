import { useState } from "react"
import { Stack } from "@chakra-ui/react"

import { AboutBlock, SkillsBlock } from "../Components"

const Section7 = () => {
  const [isHovered, setHovered] = useState(false)

  return (
    <Stack
      alignItems={"center"}
      direction={{ base: "column", md: "row" }}
      height={"100vh"}
      spacing={2}
      width={"100%"}
    >
      <AboutBlock hovering={{ isHovered, setHovered }} />
      {/* <SkillsBlock isHover={isHovered} /> */}
    </Stack>
  )
}

export default Section7
