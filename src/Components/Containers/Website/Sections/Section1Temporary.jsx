import { useState } from "react"
import { Stack } from "@chakra-ui/react"

import { HeroLogo, ParallaxContainer } from "../Components/"

const Section1Temporary = () => {
  const [imageLoading, setImageLoading] = useState(false)

  return (
    <ParallaxContainer>
      <Stack
        alignItems={"center"}
        height={"100vh"}
        id={0}
        justifyContent={"center"}
        overflow={"hidden"}
        position={"relative"}
        width={"100%"}
      >
        <Stack height={"calc(100% - 90px)"} position={"absolute"} top={"calc(90px)"} width={"100%"}>
          <HeroLogo loadingHandlersImage={{ imageLoading, setImageLoading }} />
        </Stack>
      </Stack>
    </ParallaxContainer>
  )
}

export default Section1Temporary
