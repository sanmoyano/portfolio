import { useRef, useLayoutEffect, useState } from "react"
import { Divider, Stack, Text } from "@chakra-ui/react"

import { MarqueeContainer } from "../Components"

const Section3 = () => {
  const dimensionRef = useRef()
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {
    if (dimensionRef.current) {
      setDimensions({
        width: dimensionRef.current.offsetWidth,
        height: dimensionRef.current.offsetHeight,
      })
    }
  }, [])

  return (
    <Stack
      alignItems={"center"}
      animation={"g 1s forwards"}
      direction={{ base: "column", lg: "row" }}
      height={"100%"}
      justifyContent={"space-between"}
      paddingInline={{ base: 6, lg: 12 }}
      spacing={{ base: 12, md: 24 }}
      width={"100%"}
    >
      <Stack
        ref={dimensionRef}
        height={"100%"}
        justifyContent={"space-between"}
        paddingRight={{ lg: 12 }}
        width={{ base: "100%", lg: "70%" }}
      >
        <Text
          fontWeight={700}
          lineHeight={1}
          textAlign={"justify"}
          textStyle={"paragraphPhrases"}
          textTransform={"uppercase"}
        >
          I see every project as a chance to leave my footprint
        </Text>
        <Text
          fontFamily={"Roboto"}
          fontSize={{ base: "calc(4rem / 1.618)", md: "calc(10rem / 1.618)" }}
          lineHeight={1}
          textAlign={"justify"}
          textTransform={"uppercase"}
        >
          and explore unique UX/UI solutions for the users.
        </Text>
      </Stack>
      <Stack display={{ base: "none", lg: "block" }} height={`${dimensions.height}px`}>
        <Divider orientation={"vertical"} variant={"solid"} />
      </Stack>
      <Stack display={{ base: "block", lg: "none" }} width={`100%`}>
        <Divider orientation={"horizontal"} variant={"solid"} />
      </Stack>
      <MarqueeContainer height={dimensions.height} />
    </Stack>
  )
}

export default Section3
