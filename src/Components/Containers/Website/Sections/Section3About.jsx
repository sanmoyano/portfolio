import { useState } from "react"
import { Stack } from "@chakra-ui/react"
import { lazy, Suspense } from "react"

const About = lazy(() => import("../Components/About"))

const Section3About = () => {
  const [isHovered, setHovered] = useState(false)

  return (
    <Stack
      alignItems={"center"}
      direction={"row"}
      height={"100%"}
      position={"relative"}
      spacing={2}
      width={"100%"}
    >
      <Suspense>
        <About hovering={{ isHovered, setHovered }} />
      </Suspense>
    </Stack>
  )
}

export default Section3About
