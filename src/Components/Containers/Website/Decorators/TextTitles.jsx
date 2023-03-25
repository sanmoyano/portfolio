import { Box, Text, useColorModeValue } from "@chakra-ui/react"
import { transform } from "framer-motion"

const TextTitles = ({ content, textStyle, transform, px }) => {
  const color = useColorModeValue("black", "white")

  return (
    <Box width={"fit-content"}>
      <Text
        _hover={{ WebkitTextStroke: `${px}px ${color}`, color: "transparent" }}
        textAlign={"center"}
        textStyle={textStyle}
        textTransform={transform}
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
