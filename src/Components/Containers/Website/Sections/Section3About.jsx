import { Stack } from "@chakra-ui/react"
import { lazy, Suspense } from "react"

import { ParallaxContainer } from "../Components"

const About = lazy(() => import("../Components/About"))

const Section3About = () => {
  return (
    <ParallaxContainer>
      <Stack
        alignItems={"center"}
        direction={"row"}
        height={"100vh"}
        id={3}
        position={"relative"}
        spacing={2}
        width={"100%"}
      >
        <Suspense>
          <About />
        </Suspense>
      </Stack>
    </ParallaxContainer>
  )
}

export default Section3About
