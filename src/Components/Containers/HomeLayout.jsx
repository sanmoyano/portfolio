import { Stack } from "@chakra-ui/react"

import { Section1, Section1Temporary, Section2, Section3 } from "./Website/Sections"

const HomeLayout = () => {
  return (
    <Stack gap={{ base: 20, md: 36 }} marginBlock={24}>
      {/* <Section1 /> */}
      <Section1Temporary />
      <Section2 />
      <Section3 />
    </Stack>
  )
}

export default HomeLayout
