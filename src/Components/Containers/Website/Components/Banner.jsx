import { Stack, Text } from "@chakra-ui/react"

import { HorizontalText } from "../Decorators"

const Banner = ({ dimensionRef }) => {
  const textGenerator = () => {
    let words = []

    for (let i = 0; i < 4; i++) {
      if (i % 2 === 0) {
        words.push(<HorizontalText text={"developer"} textAlign={"left"} />)
      } else {
        words.push(<HorizontalText text={"designer"} textAlign={"right"} />)
      }
    }

    return words
  }

  return (
    <Stack
      bgColor={"blue"}
      height={"auto"}
      maxW={"100%"}
      width={{ base: `${dimensionRef.width}px`, lg: "auto" }}
    >
      <Stack
        direction={{ base: "column", lg: "row" }}
        height={"100%"}
        justifyContent={"center"}
        width={"100%"}
      >
        {textGenerator()}
      </Stack>
    </Stack>
  )
}

export default Banner
