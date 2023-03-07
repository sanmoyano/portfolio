import { useColorMode, useColorModeValue, Stack, Text } from "@chakra-ui/react"

import { Section1, Section1Temporary, Section2 } from "./Website/Sections"

const HomeLayout = () => {
  const changeColor = useColorModeValue("brand.200", "brand.100")

  const { colorMode } = useColorMode()

  // if (colorMode === "dark") {
  //   ;("robotoBoldRed")
  // } else {
  //   ;("robotoBoldGreen")
  // }

  return (
    <Stack gap={32} marginBlock={24}>
      <Section1Temporary />
      <Section2 />
      {/* <Section1 />
      <Text textStyle={"robotos"}>Roboto 400</Text>
      <Text fontWeight={500} textStyle={"robotos"}>
        Roboto 500
      </Text>
      <Text fontWeight={700} textStyle={colorMode === "dark" ? "robotoBoldRed" : "robotoBoldGreen"}>
        Roboto 700
      </Text>
      <Text fontWeight={900} textStyle={colorChange}>
        Roboto 900
      </Text>
      <Text color={changeColor} fontWeight={700} textStyle={"neusa"}>
        Neusa, PROJECTS
      </Text> */}
    </Stack>
  )
}

export default HomeLayout
