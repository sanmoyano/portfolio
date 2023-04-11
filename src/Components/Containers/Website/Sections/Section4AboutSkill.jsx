import { useState } from "react"
import { Stack } from "@chakra-ui/react"
import { lazy, Suspense } from "react"

import { Skills } from "../Components"
const AboutContainer = lazy(() => import("../Components/About"))

const Section4AboutSkill = () => {
  const [isHovered, setHovered] = useState(false)
  // const [aboutIsVisible, setAboutVisible] = useState(false)

  return (
    <Stack
      alignItems={"center"}
      direction={{ base: "column", md: "row" }}
      height={"100vh"}
      overflow={"hidden"}
      position={"relative"}
      spacing={2}
    >
      <Suspense>
        <AboutContainer hovering={{ isHovered, setHovered }} />
      </Suspense>
      <Skills isHovered={isHovered} />
    </Stack>
  )
}

export default Section4AboutSkill
