import { Box, Text, useMediaQuery, useColorModeValue, useTheme } from "@chakra-ui/react"
import { motion } from "framer-motion"

const Marquee = ({ text, outlined }) => {
  //Styles settings
  const isLargerThanMd = useMediaQuery("(min-width: 992px)")
  const color = useColorModeValue("brand.100", "brand.200")
  const { textStyles } = useTheme()
  const h1Size = textStyles.h1.fontSize

  //Animation settings
  const marqueeVariants = {
    horizontal: {
      x: [null, 1450, 450],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 8,
          ease: "linear",
        },
      },
    },
    vertical: {
      y: [null, 1450, 450],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 8,
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
        animate={isLargerThanMd[0] ? "vertical" : "horizontal"}
        as={motion.div}
        sx={{ display: "grid", placeContent: "center", whiteSpace: "nowrap" }}
        variants={marqueeVariants}
        w={"100%"}
      >
        <Text
          color={outlined ? "transparent" : color}
          display={"inline-block"}
          fontSize={`calc(${h1Size}/ 1.618)`}
          sx={{
            writingMode: { base: "horizontal-tb", lg: "vertical-lr" },
            textOrientation: "mixed",
            WebkitTextStroke: outlined,
          }}
          textAlign={"center"}
          textStyle={"h1"}
          w={"100%"}
        >
          {text.repeat(20)}
        </Text>
      </Box>
    </Box>
  )
}

export default Marquee
