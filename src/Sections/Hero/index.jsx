import { useState } from "react"
import { Stack } from "@chakra-ui/react"

import { HeroImage, ParallaxContainer } from "../../Components"

const Hero = () => {
  const [imageLoading, setImageLoading] = useState(false)

  return (
    <ParallaxContainer>
      <Stack
        alignItems={"center"}
        height={"100vh"}
        id={1}
        justifyContent={"center"}
        overflow={"hidden"}
        position={"relative"}
        width={"100%"}
      >
        <Stack height={"calc(100% - 90px)"} position={"absolute"} top={"calc(90px)"} width={"100%"}>
          <HeroImage loadingHandlersImage={{ imageLoading, setImageLoading }} />
        </Stack>
      </Stack>
    </ParallaxContainer>
  )
}

export default Hero
