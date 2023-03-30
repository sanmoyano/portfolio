import { useRef } from "react"
import { Divider, Stack, Text } from "@chakra-ui/react"

import useDimensions from "../Hooks/useDimensions"
import { MarqueeContainer } from "../Components"

const Section3 = () => {
  const DIMENSIONS_REF = useRef()
  const dimensions = useDimensions(DIMENSIONS_REF)

  return (
    <Stack
      alignItems={"center"}
      direction={{ base: "column", lg: "row" }}
      height={"100%"}
      justifyContent={"space-between"}
      spacing={{ base: 12, md: 24 }}
      width={"100%"}
    >
      <Stack
        ref={DIMENSIONS_REF}
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
      <Stack display={{ base: "none", lg: "block" }} height={dimensions.height}>
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
