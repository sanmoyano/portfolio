import { Stack, Text, Container } from "@chakra-ui/react"

const Banner = ({ dimensionRef }) => {
  return (
    <Stack
      bgColor={"blue"}
      height={"auto"}
      maxW={"100%"}
      width={{ base: `${dimensionRef.width}px`, lg: "auto" }}
    >
      <Stack
        direction={{ base: "column", lg: "row" }}
        height={"100%"}
        justifyContent={"center"}
        width={"100%"}
      >
        <Text
          sx={{
            writingMode: { base: "horizontal-tb", lg: "vertical-lr" },
            textOrientation: "mixed",
          }}
          textAlign={"right"}
          textStyle={"neusaBoldUpper"}
        >
          designer
        </Text>
        <Text
          sx={{
            writingMode: { base: "horizontal-tb", lg: "vertical-lr" },
            textOrientation: "mixed",
          }}
          textAlign={"left"}
          textStyle={"neusaBoldUpper"}
        >
          designer
        </Text>
        <Text
          sx={{
            writingMode: { base: "horizontal-tb", lg: "vertical-lr" },
            textOrientation: "mixed",
          }}
          textAlign={"right"}
          textStyle={"neusaBoldUpper"}
        >
          designer
        </Text>
        <Text
          sx={{
            writingMode: { base: "horizontal-tb", lg: "vertical-lr" },
            textOrientation: "mixed",
          }}
          textAlign={"left"}
          textStyle={"neusaBoldUpper"}
        >
          designer
        </Text>
      </Stack>
    </Stack>
  )
}

export default Banner
