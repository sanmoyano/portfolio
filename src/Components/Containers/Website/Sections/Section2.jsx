import { Stack, Text, useColorModeValue, useTheme } from "@chakra-ui/react"

import { StarIcon } from "../Decorators"

const Section2 = () => {
  const { colors } = useTheme()
  const fill = useColorModeValue(`${colors.red}`, `${colors.green}`)
  const setTextStyle = useColorModeValue("robotoBoldRed", "robotoBoldGreen")

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
        alignItems={"center"}
        direction={"row"}
        justifyContent={"space-between"}
        marginBottom={8}
        paddingInline={{ base: 6, md: 12 }}
      >
        <Text
          textAlign={"left"}
          textStyle={setTextStyle}
          width={{ base: "120px", md: "150px" }}
        >{`Developing for ${getYearsSinceIstartedDeveloping()} years`}</Text>
        <StarIcon fill={fill} />
        <Text textAlign={"center"} textStyle={setTextStyle} width={"150px"}>
          9 projects published
        </Text>
        {/**la cantidad de proyectos va ser el length del array de proyectos */}
        <StarIcon fill={fill} />
        <Text textAlign={"right"} textStyle={setTextStyle} width={{ base: "120px", md: "150px" }}>
          worked with XX business
        </Text>
      </Stack>
    </Stack>
  )
}

export default Section2
