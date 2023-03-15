import { Stack, Text } from "@chakra-ui/react"

const Banner = ({ dimensionRef }) => {
  return (
    <Stack
      alignItems={"center"}
      bgColor={"red"}
      height={`${dimensionRef.height}`}
      justifyContent={"center"}
      width={"100%"}
    >
      <Stack
        bgColor={"blue.500"}
        height={`${dimensionRef.width}px`}
        justifyContent={"center"}
        transform={{ base: "rotate(0deg)", lg: "rotate(-90deg)" }}
        width={{ base: "100%", lg: `${dimensionRef.height}px` }}
      >
        <Text textAlign={"right"} textStyle={"neusaBoldUpper"}>
          developer
        </Text>
        <Text textAlign={"left"} textStyle={"neusaBoldUpper"}>
          designer
        </Text>
        <Text textAlign={"right"} textStyle={"neusaBoldUpper"}>
          developer
        </Text>
        <Text textAlign={"left"} textStyle={"neusaBoldUpper"}>
          designer
        </Text>
      </Stack>
    </Stack>
  )
}

export default Banner
