import { Stack, Text } from "@chakra-ui/react"

const Section7 = () => {
  return (
    <Stack
      alignItems={"center"}
      direction={{ base: "column", md: "row" }}
      height={"100vh"}
      // justifyContent={"space-between"}
      padding={{ base: 6, lg: 12 }}
    >
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

      {/* <Stack
        bgColor={"red"}
        direction={"row"}
        height={"100%"}
        textStyle={"paragraph"}
        width={"30%"}
      >
        <Text textAlign={"left"}>
          {
            "As a Front End Developer, my main technology is ReactJS. I focus on designing and coding UX/UI with the user's experience in mind to offer the best possible outcome. I am currently strengthening my skills by focusing on developing a MERN Full Stack profile with the professional objective of creating valuable solutions for the future."
          }
        </Text>
      </Stack> */}
    </Stack>
  )
}

export default Section7
