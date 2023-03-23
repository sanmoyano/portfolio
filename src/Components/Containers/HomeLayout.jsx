import { Stack } from "@chakra-ui/react"

import { Section1, Section1Temporary, Section2, Section3, Section4 } from "./Website/Sections"

const HomeLayout = () => {
  return (
    <Stack gap={{ base: 20, md: 36 }}>
      {/* <Section1 /> */}
      <Section1Temporary />
      <Section2 />
      <Section3 />
      <Section4 />
    </Stack>
  )
}

export default HomeLayout
