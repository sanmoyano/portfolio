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
      <Skills isHovered={isHovered} />
      {/* <About hovering={{ isHovered, setHovered }} /> */}
    </Stack>
  )
}

export default Section7
