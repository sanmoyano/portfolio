import { Box, Text, useMediaQuery } from "@chakra-ui/react"
import { motion } from "framer-motion"

const Marquee = ({ text, color }) => {
  const isLargerThanMd = useMediaQuery("(min-width: 992px)")

  const marqueeVariants = {
    horizontal: {
      x: [null, 1450, 450],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "mirror",
          duration: 8,
          ease: "easeInOut",
        },
      },
    },
    vertical: {
      y: [null, 1450, 450],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "mirror",
          duration: 8,
          ease: "easeInOut",
        },
      },
    },
  }

  return (
    <Box
      sx={{
        display: "grid",
        placeContent: "center",
        position: "relative",
        width: { base: "100%" },
        maxW: { base: "100%" },
        overflow: "hidden",
      }}
    >
      <Box
        animate={isLargerThanMd[0] ? "vertical" : "horizontal"}
        as={motion.div}
        sx={{ display: "grid", placeContent: "center", whiteSpace: "nowrap" }}
        variants={marqueeVariants}
        w={"100%"}
      >
        <Text
          color={color}
          display={"inline-block"}
          sx={{
            writingMode: { base: "horizontal-tb", lg: "vertical-lr" },
            textOrientation: "mixed",
          }}
          textAlign={"center"}
          textStyle={"neusaBoldUpper"}
          w={"100%"}
        >
          {text.repeat(20)}
        </Text>
      </Box>
    </Box>
  )
}

export default Marquee
