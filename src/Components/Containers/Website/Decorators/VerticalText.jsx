import { Box, Text, useColorModeValue } from "@chakra-ui/react"
import { motion } from "framer-motion"

import Tilting from "./Tilting"

const VerticalText = ({ content, refItem, hovering, id }) => {
  const color = useColorModeValue("black", "white")

  const handleMouseEnter = () => {
    hovering?.setHovered(true)
  }
  const handleMouseLeave = () => {
    hovering?.setHovered(false)
  }

  return (
    <Box
      as={motion.div}
      id={id}
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, transition: { duration: 3 } }}
      zIndex={99}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Tilting>
        <Text
          ref={refItem}
          _hover={{ WebkitTextStroke: `1px ${color}`, color: "transparent" }}
          display={"inline-block"}
          sx={{
            writingMode: { base: "horizontal-lr", md: "vertical-lr" },
            textOrientation: "mixed",
          }}
          textAlign={"center"}
          textStyle={"h1"}
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
