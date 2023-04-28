import { Box, Text, useColorModeValue, useMediaQuery } from "@chakra-ui/react"
import { motion } from "framer-motion"

import Tilting from "../Tilting"

const Titles = ({ content, refItem, textStyle, vertical, float, tiltingScale, tiltingEnable }) => {
  const color = useColorModeValue("black", "white")

  // const isDesktop = useMediaQuery("(min-width: 992px)")
  /* <Tilting enable={isDesktop[0] ? true : false} scale={isDesktop[0] ? 1.2 : 1}> */

  return (
    <Box
      animation={float}
      as={motion.div}
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, transition: { duration: 3 } }}
      width={"fit-content"}
      zIndex={99}
    >
      <Tilting enable={tiltingEnable} scale={tiltingScale && tiltingScale}>
        <Text
          ref={refItem}
          _hover={{
            WebkitTextStroke: content === "projects" ? `2px ${color}` : `1px ${color}`,
            color: "transparent",
          }}
          display={"inline-block"}
          sx={vertical}
          textAlign={"center"}
          textStyle={textStyle}
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

export default Titles
