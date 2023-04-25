import { Stack, useColorModeValue, useTheme } from "@chakra-ui/react"

import { StarIcon, TextQuot } from "../Components/"
import { floatAnimation } from "../Utils/floatAnimation"

const Section2 = () => {
  const { colors } = useTheme()
  const fill = useColorModeValue(`${colors.red}`, `${colors.green}`)

  const getYearsSinceIstartedDeveloping = () => {
    const sinceYear = new Date(2021, 7)
    const today = new Date()
    const totalYearsDeveloping = today.getFullYear() - sinceYear.getFullYear()

    return totalYearsDeveloping
  }

  return (
    <Stack
      alignItems={{ base: "left", md: "center" }}
      animation={floatAnimation()}
      direction={{ base: "column", md: "row" }}
      display={{ base: "none", lg: "flex" }}
      justifyContent={"space-between"}
      marginBottom={8}
    >
      <TextQuot
        align={"left"}
        content={`Developing for ${getYearsSinceIstartedDeveloping()} years`}
      />
      <StarIcon fill={fill} />
      {/**la cantidad de proyectos va ser el length del array de proyectos de la api */}
      <TextQuot aling={"center"} content={"9 project published"} />
      <StarIcon fill={fill} />
      <TextQuot aling={"right"} content={"worked with XX business"} />
    </Stack>
  )
}

export default Section2
