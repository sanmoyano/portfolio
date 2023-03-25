import { Box, Text, useColorModeValue } from "@chakra-ui/react"

const TextTitles = ({ content, textStyle, px }) => {
  const color = useColorModeValue("black", "white")

  return (
    <Box width={"fit-content"}>
      <Text
        _hover={{ WebkitTextStroke: `${px}px ${color}`, color: "transparent" }}
        textAlign={"center"}
        textStyle={textStyle}
        transitionDelay={"0s, 0s"}
        transitionDuration={".5s, .5s"}
        transitionProperty={"color, opacity"}
        transitionTimingFunction={"ease, ease"}
      >
        {content}
      </Text>
    </Box>
  )
}

export default TextTitles
