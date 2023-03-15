import { Stack, Text } from "@chakra-ui/react"

const Banner = ({ dimensionRef }) => {
  return (
    <Stack
      alignItems={"center"}
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
        <Text textAlign={"right"}>developer</Text>
        <Text textAlign={"left"}>developer</Text>
        <Text textAlign={"right"}>designer</Text>
        <Text textAlign={"left"}>designer</Text>
      </Stack>
    </Stack>
  )
}

export default Banner
