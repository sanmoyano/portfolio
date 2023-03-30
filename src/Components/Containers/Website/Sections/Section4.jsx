import { Stack } from "@chakra-ui/react"

import { AboutBlock, SkillsBlock } from "../Components/index"

const Section7 = () => {
  return (
    <Stack
      alignItems={"center"}
      direction={{ base: "column", md: "row" }}
      height={"100vh"}
      spacing={2}
      width={"100%"}
    >
      <AboutBlock />
      <SkillsBlock />
    </Stack>
  )
}

export default Section7
