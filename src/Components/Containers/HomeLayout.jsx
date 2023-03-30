import { Stack } from "@chakra-ui/react"

import {
  Section1,
  Section1Temporary,
  Section2,
  Section3,
  Section4,
  Section5,
} from "./Website/Sections"

const HomeLayout = () => {
  return (
    <Stack gap={{ base: 20, md: 40 }} paddingInline={{ base: 6, lg: 12 }}>
      {/* <Section1 /> */}
      <Section1Temporary />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </Stack>
  )
}

export default HomeLayout
