import { useState } from "react"
import { Stack } from "@chakra-ui/react"
import { lazy, Suspense } from "react"

import { ParallaxContainer } from "../Components"

const About = lazy(() => import("../Components/About"))

const Section3About = () => {
  const [isHovered, setHovered] = useState(false)

  return (
    <ParallaxContainer>
      <Stack
        alignItems={"center"}
        direction={"row"}
        height={"100vh"}
        id={2}
        position={"relative"}
        spacing={2}
        width={"100%"}
      >
        <Suspense>
          <About hovering={{ isHovered, setHovered }} />
        </Suspense>
      </Stack>
    </ParallaxContainer>
  )
}

export default Section3About
