import { Stack, useColorModeValue } from "@chakra-ui/react"

import { Marquee } from "../Decorators"

const MarqueeContainer = ({ height }) => {
  const color = useColorModeValue("red", "green")
  const textGenerator = () => {
    let words = []

    for (let i = 0; i < 4; i++) {
      const textContent = i % 2 === 0 ? "developer " : "designer "
      const colorText = i % 2 === 0 ? "" : `${color}`

      words.push(<Marquee key={i} color={colorText} height={height} text={textContent} />)
    }

    return words
  }

  return (
    <Stack
      height={{ base: "100%", lg: `${height}px` }}
      maxW={"100%"}
      width={{ base: `100%`, lg: "auto" }}
    >
      <Stack
        direction={{ base: "column", lg: "row" }}
        justifyContent={"center"}
        maxHeight={"100%"}
        width={"100%"}
      >
        {textGenerator()}
      </Stack>
    </Stack>
  )
}

export default MarqueeContainer
