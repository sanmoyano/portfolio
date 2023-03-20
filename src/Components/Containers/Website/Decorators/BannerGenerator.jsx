import { Box, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"

const marqueeVariants = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 6,
        ease: "linear",
      },
    },
  },
}

const BannerGenerator = ({ text, color }) => {
  return (
    <Box
      sx={{
        display: "grid",
        placeContent: "center",
        position: "relative",
        width: "100vw",
        maxW: "100%",
        h: "100%",
        overflow: "hidden",
      }}
    >
      <Box
        animate={"animate"}
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
          {text.repeat(10)}
        </Text>
      </Box>
    </Box>
  )
}

export default BannerGenerator
