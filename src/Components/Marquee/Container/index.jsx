import { Stack, useColorModeValue, useTheme } from "@chakra-ui/react"

import { Marquee } from "../.."

const MarqueeContainer = ({ height }) => {
  //Styles settings
  const { colors } = useTheme()
  const color = useColorModeValue(colors.brand[100], colors.brand[200])

  const textGenerator = () => {
    let words = []

    for (let i = 0; i < 4; i++) {
      const textContent = i % 2 === 0 ? "developer " : "designer "
      const outLineText = i % 2 === 0 ? "" : `1px ${color}`

      words.push(<Marquee key={i} outlined={outLineText} text={textContent} />)
    }

    return words
  }

  return (
    <Stack height={{ base: "100%", lg: height }} maxW={"100%"} width={{ base: `100%`, lg: "auto" }}>
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
