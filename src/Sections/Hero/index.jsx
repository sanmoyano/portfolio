import { useState } from "react"
import { Stack } from "@chakra-ui/react"
import { AnimatePresence } from "framer-motion"

import { HeroImage, ParallaxContainer } from "../../Components"

const Hero = () => {
  const [imageLoading, setImageLoading] = useState(false)

  return (
    <ParallaxContainer>
      <AnimatePresence id={1}>
        <Stack
          alignItems={"center"}
          height={"100vh"}
          id={"home"}
          justifyContent={"center"}
          overflow={"hidden"}
          position={"relative"}
          width={"100%"}
        >
          <Stack
            height={"calc(100% - 90px)"}
            position={"absolute"}
            top={"calc(90px)"}
            width={"100%"}
          >
            <HeroImage loadingHandlersImage={{ imageLoading, setImageLoading }} />
          </Stack>
        </Stack>
      </AnimatePresence>
    </ParallaxContainer>
  )
}

export default Hero
