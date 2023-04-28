import { Stack } from "@chakra-ui/react"
import { lazy, Suspense, useRef } from "react"

import { ParallaxContainer, Titles } from "../../Components"
import useDimensions from "../../Hooks/useDimensions"
import { verticalText } from "../../Theme/styles/verticalText"
const AboutBlock = lazy(() => import("../../Components/Block/About"))

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
        <Titles
          content={"about"}
          refItem={HEIGHT_TEXT_REF}
          textStyle={"h1"}
          tiltingScale={1.2}
          vertical={verticalText}
        />
        <Suspense>
          <AboutBlock dimension={dimension} />
        </Suspense>
      </Stack>
    </ParallaxContainer>
  )
}

export default About
