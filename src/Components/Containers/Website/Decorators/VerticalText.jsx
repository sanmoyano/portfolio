import { Box, Text, useColorModeValue } from "@chakra-ui/react"

import Tilting from "./Tilting"

const VerticalText = ({ content, refItem, setHovered }) => {
  const color = useColorModeValue("black", "white")

  return (
    <Box zIndex={99} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <Tilting>
        <Text
          ref={refItem}
          _hover={{ WebkitTextStroke: `2px ${color}`, color: "transparent" }}
          display={"inline-block"}
          sx={{
            writingMode: { base: "horizontal-lr", md: "vertical-lr" },
            textOrientation: "mixed",
          }}
          textAlign={"center"}
          textStyle={{ base: "sectionTitle", md: "sectionTitleVertical" }}
          transitionDelay={"0s, 0s"}
          transitionDuration={".5s, .5s"}
          transitionProperty={"color, opacity"}
          transitionTimingFunction={"ease, ease"}
        >
          {content}
        </Text>
      </Tilting>
    </Box>
  )
}

export default VerticalText
