import { Stack } from "@chakra-ui/react"

import { Hero, Marquee, About, Projects, Skills, Contact } from "../Sections"

const HomeLayout = () => {
  return (
    <Stack gap={{ base: 20, md: 40 }} overflow={"hidden"} paddingInline={{ base: 6, lg: 12 }}>
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </Stack>
  )
}

export default HomeLayout
