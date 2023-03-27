import { useState } from "react"
import { Stack, Text } from "@chakra-ui/react"

import { HeroLogo } from "../Components/"

const Section1Temporary = () => {
  const [imageLoading, setImageLoading] = useState(false)

  return (
    <Stack
      alignItems={"center"}
      height={"100vh"}
      justifyContent={"center"}
      overflow={"hidden"}
      position={"relative"}
      width={"100%"}
    >
      <Stack height={"calc(100% - 90px)"} position={"absolute"} top={"calc(90px)"} width={"100%"}>
        <HeroLogo loadingHandlersImage={{ imageLoading, setImageLoading }} />
      </Stack>
    </Stack>
  )
}

export default Section1Temporary
