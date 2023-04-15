import { useState } from "react"
import { Stack } from "@chakra-ui/react"
import { lazy, Suspense } from "react"

import { Skills } from "../Components"
const About = lazy(() => import("../Components/About"))

const Section4AboutSkill = () => {
  const [isHovered, setHovered] = useState(false)
  const [isVisible, setVisible] = useState(false)

  return (
    <Stack
      alignItems={"center"}
      direction={"row"}
      height={"100vh"}
      overflow={"hidden"}
      position={"relative"}
      spacing={2}
      width={"100%"}
    >
      <Suspense>
        <About hovering={{ isHovered, setHovered }} visible={{ isVisible, setVisible }} />
      </Suspense>
      <Skills isHovered={isHovered} />
    </Stack>
  )
}

export default Section4AboutSkill
