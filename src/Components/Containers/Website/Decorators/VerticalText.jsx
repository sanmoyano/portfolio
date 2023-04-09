import { Box, Text, useColorModeValue } from "@chakra-ui/react"

import { floatAnimation } from "../Utils/floatAnimation"

import Tilting from "./Tilting"

const VerticalText = ({ content, refItem, hovering }) => {
  const hoverState = hovering?.isHovered //hoverState is undefined on "skill" because it doesn't animated with the floatAnimation() just with the _hover prop.
  const color = useColorModeValue("black", "white")

  return (
    <Box
      animation={hoverState ? floatAnimation : "unset"}
      zIndex={99}
      onMouseEnter={() => hovering?.setHovered(true)}
      onMouseLeave={() => hovering?.setHovered(false)}
    >
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
