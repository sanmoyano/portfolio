import { Stack } from "@chakra-ui/react"

import {
  Section1Init,
  Section1Temporary,
  Section2Marquee,
  Section3Projects,
  Section4AboutSkill,
  Section5Contact,
} from "./Website/Sections"

const HomeLayout = () => {
  return (
    <Stack gap={{ base: 20, md: 40 }} paddingInline={{ base: 6, lg: 12 }}>
      {/* <Section1Init /> */}
      <Section1Temporary />
      <Section2Marquee />
      <Section3Projects />
      <Section4AboutSkill />
      <Section5Contact />
    </Stack>
  )
}

export default HomeLayout
