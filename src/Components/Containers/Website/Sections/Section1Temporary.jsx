import { useState } from "react"
import { Stack } from "@chakra-ui/react"

import { HeroLogo } from "../Components/"

const Section1Temporary = () => {
  const [imageLoading, setImageLoading] = useState(false)

  return (
    <Stack
      alignItems={"center"}
      height={"90vh"}
      justifyContent={"center"}
      overflow={"hidden"}
      paddingInline={12}
      width={"100%"}
    >
      <HeroLogo loadingHandlersImage={{ imageLoading, setImageLoading }} />
    </Stack>
  )
}

export default Section1Temporary
