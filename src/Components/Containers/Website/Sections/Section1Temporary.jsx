import { useState } from "react"
import { Stack } from "@chakra-ui/react"

import { HeroLogo } from "../Components/"

const Section1Temporary = () => {
  const [imageLoading, setImageLoading] = useState(false)

  return (
    <Stack
      alignItems={"center"}
      minH={imageLoading ? "" : "100vh"}
      overflow={"hidden"}
      paddingInline={12}
    >
      <HeroLogo loadingHandlersImage={{ imageLoading, setImageLoading }} />
    </Stack>
  )
}

export default Section1Temporary
