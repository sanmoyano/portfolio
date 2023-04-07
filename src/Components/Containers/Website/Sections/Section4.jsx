import { useState } from "react"
import { Stack } from "@chakra-ui/react"

import { About, Skills } from "../Components"

const Section7 = () => {
  const [isHovered, setHovered] = useState(false)

  return (
    <Stack
      alignItems={"center"}
      direction={{ base: "column", md: "row" }}
      height={"100vh"}
      position={"relative"}
      spacing={2}
      width={"100%"}
    >
      <About hovering={{ isHovered, setHovered }} />
      <Skills isHovered={isHovered} />
    </Stack>
  )
}

export default Section7
