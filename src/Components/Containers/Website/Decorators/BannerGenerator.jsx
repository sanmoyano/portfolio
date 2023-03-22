import { Box, Text, useMediaQuery } from "@chakra-ui/react"
import { motion, AnimatePresence } from "framer-motion"

const BannerGenerator = ({ text, color, height }) => {
  const isLargerThanMd = useMediaQuery("(min-width: 992px)")

  console.log(isLargerThanMd)

  const marqueeVariants = {
    animate: {
      x: [0, -1036],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "mirror",
          duration: 5,
          ease: "linear",
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
        animate={"animate"}
        as={motion.div}
        inital={"animate"}
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

export default BannerGenerator
