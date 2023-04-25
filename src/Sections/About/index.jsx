import { Stack } from "@chakra-ui/react"
import { lazy, Suspense, useRef } from "react"

import { ParallaxContainer, VerticalText } from "../../Components"
import useDimensions from "../../Hooks/useDimensions"

const AboutBlock = lazy(() => import("../../Components/AboutBlock"))

const About = () => {
  const HEIGHT_TEXT_REF = useRef()
  const dimension = useDimensions(HEIGHT_TEXT_REF)

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
        <VerticalText content={"about"} id={"about"} refItem={HEIGHT_TEXT_REF} />
        <Suspense>
          <AboutBlock dimension={dimension} />
        </Suspense>
      </Stack>
    </ParallaxContainer>
  )
}

export default About
