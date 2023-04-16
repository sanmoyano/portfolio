import { Stack } from "@chakra-ui/react"

import {
  Section1Init,
  Section1Temporary,
  Section2Marquee,
  Section3About,
  Section4Projects,
  Section5Skills,
  Section6Contact,
} from "./Website/Sections"

const HomeLayout = () => {
  return (
    <Stack gap={{ base: 20, md: 40 }} paddingInline={{ base: 6, lg: 12 }}>
      {/* <Section1Init /> */}
      <Section1Temporary />
      <Section2Marquee />
      <Section3About />
      <Section4Projects />
      <Section5Skills />
      <Section6Contact />
    </Stack>
  )
}

export default HomeLayout
