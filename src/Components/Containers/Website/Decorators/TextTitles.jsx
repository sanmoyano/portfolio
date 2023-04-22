import { Box, Text, useColorModeValue } from "@chakra-ui/react"
import { motion } from "framer-motion"

const TextTitles = ({ content, textStyle, transform, px }) => {
  const color = useColorModeValue("black", "white")
  let styles = {}

  if (content === "projects") {
    styles = {
      textStyle: textStyle,
      fontSize: "18rem",
    }
  } else {
    styles = {
      textStyle: textStyle,
    }
  }

  return (
    <Box
      as={motion.div}
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, transition: { duration: 3 } }}
      width={"fit-content"}
    >
      <Text
        _hover={{ WebkitTextStroke: `${px}px ${color}`, color: "transparent" }}
        textAlign={"center"}
        {...styles}
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
