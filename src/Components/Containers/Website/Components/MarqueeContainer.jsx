import { Stack, useColorModeValue, useTheme } from "@chakra-ui/react"

import { Marquee } from "../Decorators"

const MarqueeContainer = ({ height }) => {
  const { colors } = useTheme()
  const color = useColorModeValue(`${colors.red}`, `${colors.green}`)
  const textGenerator = () => {
    let words = []

    for (let i = 0; i < 4; i++) {
      const textContent = i % 2 === 0 ? "developer " : "designer "
      const outLineText = i % 2 === 0 ? "" : `1.5px ${color}`

      words.push(<Marquee key={i} height={height} outlined={outLineText} text={textContent} />)
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
