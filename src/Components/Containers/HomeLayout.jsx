import { useColorMode, useColorModeValue, Stack, Text } from "@chakra-ui/react"

import { Section1, Section1Temporary, Section2 } from "./Website/Sections"

const HomeLayout = () => {
  return (
    <Stack gap={32} marginBlock={24}>
      {/* <Section1 /> */}
      <Section1Temporary />
      <Section2 />
    </Stack>
  )
}

export default HomeLayout
