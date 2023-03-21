import { Box, Text, useMediaQuery } from "@chakra-ui/react"
import { motion } from "framer-motion"

const marqueeVariantsHorizontal = {
  vertical: {
    x: [-1035, 0],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 8,
        // ease: "linear",
      },
    },
  },
  horizontal: {
    y: [-1035, 0],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 8,
        // ease: "linear",
      },
    },
  },
}

const BannerGenerator = ({ text, color, height }) => {
  const isLargerThanMd = useMediaQuery("(max-width: 800px)")

  return (
    <Box
      sx={{
        display: "grid",
        placeContent: "center",
        position: "relative",
        width: { base: "100%" },
        maxW: { base: "100%" },
        height: { lg: `${height}px` },
        overflow: "hidden",
      }}
    >
      <Box
        animate={isLargerThanMd ? "horizontal" : "vertical"}
        as={motion.div}
        // initial={"vertical"}
        sx={{ display: "grid", placeContent: "center", whiteSpace: "nowrap" }}
        variants={marqueeVariantsHorizontal}
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

export default BannerGenerator
