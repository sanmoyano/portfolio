import { useRef, useLayoutEffect, useState } from "react"
import { Divider, Stack, Text } from "@chakra-ui/react"

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

  return (
    <Stack
      alignItems={"center"}
      direction={{ base: "column", lg: "row" }}
      height={"100%"}
      justifyContent={"space-between"}
      paddingInline={{ base: 6, lg: 12 }}
      width={"100%"}
    >
      <Stack
        ref={heightRef}
        justifyContent={"space-between"}
        marginBottom={{ base: 6, lg: 0 }}
        // width={{ base: "100%", lg: "60%" }}
      >
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
      <Stack display={{ base: "none", lg: "block" }} height={`${dimensions.height}px`}>
        <Divider orientation={"vertical"} variant={"solid"} />
      </Stack>
      <Stack display={{ base: "block", lg: "none" }} width={`${dimensions.width}px`}>
        <Divider orientation={"horizontal"} variant={"solid"} />
      </Stack>
      <Stack paddingInline={{ base: 6, lg: 12 }}>
        <Banner />
      </Stack>
    </Stack>
  )
}

export default Section3
