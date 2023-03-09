import { Stack, Text } from "@chakra-ui/react"

const Section3 = () => {
  return (
    <Stack
      alingItems={"center"}
      direction={{ base: "column", lg: "row" }}
      justifyContent={"space-between"}
      paddingInline={12}
      width={"100%"}
    >
      <Stack gap={1}>
        <Text
          fontWeight={700}
          lineHeight={1}
          textAlign={"justify"}
          textStyle={"robotos"}
          textTransform={"uppercase"}
        >
          I see every project as a chance to leave my footprint
        </Text>
        <Text
          fontFamily={"Roboto"}
          fontSize={{ base: "2rem", md: "4rem" }}
          lineHeight={1}
          textAlign={"justify"}
          textTransform={"uppercase"}
        >
          and explore unique UX/UI solutions for the users.
        </Text>
      </Stack>
      <Stack>
        <Text>Banner</Text>
      </Stack>
    </Stack>
  )
}

export default Section3
