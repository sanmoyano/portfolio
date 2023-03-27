import { Stack, Text } from "@chakra-ui/react"

const Section7 = () => {
  return (
    <Stack alignItems={"center"} direction={{ base: "column", md: "row" }} height={"100vh"}>
      <Text
        display={"inline-block"}
        sx={{
          writingMode: { base: "horizontal-lr", md: "vertical-lr" },
          textOrientation: "mixed",
        }}
        textAlign={"center"}
        textStyle={{ base: "sectionTitle", md: "sectionTitleVertical" }}
      >
        About
      </Text>
      <Text
        display={"inline-block"}
        sx={{
          writingMode: { base: "horizontal-lr", md: "vertical-lr" },
          textOrientation: "mixed",
        }}
        textAlign={"center"}
        textStyle={{ base: "sectionTitle", md: "sectionTitleVertical" }}
      >
        Skills
      </Text>
    </Stack>
  )
}

export default Section7
