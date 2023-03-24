import { Stack, Text, useColorModeValue, useTheme } from "@chakra-ui/react"

import { StarIcon, TextQuot } from "../Decorators"

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
      borderBottomColor={fill}
      borderBottomStyle={"solid"}
      borderBottomWidth={"2px"}
      width={"100%"}
    >
      <Stack
        alignItems={{ base: "left", md: "center" }}
        direction={{ base: "column", md: "row" }}
        justifyContent={"space-between"}
        marginBottom={8}
        paddingInline={{ base: 6, md: 12 }}
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
    </Stack>
  )
}

export default Section2
