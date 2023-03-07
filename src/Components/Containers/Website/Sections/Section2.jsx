import { Stack, Text, useColorModeValue, useTheme } from "@chakra-ui/react"

import { StarIcon } from "../Decorators"

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
        alignItems={"center"}
        direction={"row"}
        justifyContent={"space-between"}
        marginBottom={8}
        paddingInline={12}
      >
        <Text>{`Developing for ${getYearsSinceIstartedDeveloping()} years`}</Text>
        <StarIcon fill={fill} />
        <Text>item2</Text>
        <StarIcon fill={fill} />
        <Text>item3</Text>
      </Stack>
    </Stack>
  )
}

export default Section2