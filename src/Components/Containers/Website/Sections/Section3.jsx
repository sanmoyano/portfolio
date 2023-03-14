import { useRef, useLayoutEffect, useState } from "react"
import { Divider, Stack, Text, useColorModeValue } from "@chakra-ui/react"

import { Banner } from "../Components"

const Section3 = () => {
  const heightRef = useRef()
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {
    if (heightRef.current) {
      setDimensions({
        width: heightRef.current.offsetWidth,
        height: heightRef.current.offsetHeight,
      })
    }
  }, [])
  const colorValue = useColorModeValue("solidRed", "solidGreen")

  return (
    <Stack
      alignItems={"center"}
      direction={{ base: "column", lg: "row" }}
      height={"100%"}
      justifyContent={"space-between"}
      paddingInline={12}
      width={"100%"}
    >
      <Stack ref={heightRef} justifyContent={"space-between"}>
        <Text
          fontWeight={700}
          lineHeight={1}
          textAlign={"justify"}
          textStyle={"robotos"}
          textTransform={"uppercase"}
        >
          I see every project as a chance to leave my footprint
        </Text>
        <Text
          fontFamily={"Roboto"}
          fontSize={{ base: "2rem", md: "4rem" }}
          lineHeight={1}
          textAlign={"justify"}
          textTransform={"uppercase"}
        >
          and explore unique UX/UI solutions for the users.
        </Text>
      </Stack>
      <Stack height={`${dimensions.height}px`}>
        <Divider orientation="vertical" variant={"solid"} />
      </Stack>
      <Stack>
        <Banner />
      </Stack>
    </Stack>
  )
}

export default Section3
