import { useState } from "react"
import { Stack } from "@chakra-ui/react"

import { AboutBlock, SkillsBlock } from "../Components"

const Section7 = () => {
  const [isHover, setHover] = useState(false)

  return (
    <Stack
      alignItems={"center"}
      direction={{ base: "column", md: "row" }}
      height={"100vh"}
      spacing={2}
      width={"100%"}
    >
      <AboutBlock hovering={{ isHover, setHover }} />
      {/* <SkillsBlock isHover={isHover} /> */}
    </Stack>
  )
}

export default Section7
