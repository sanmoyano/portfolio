import { Stack, useColorModeValue, useTheme } from "@chakra-ui/react"

import { StarIcon, TextQuot } from "../Decorators"
import { toFloat } from "../Utils/toFloat"

const Section6 = () => {
  const { colors } = useTheme()
  const fill = useColorModeValue(`${colors.red}`, `${colors.green}`)

  return (
    <Stack
      borderBottomColor={fill}
      borderBottomStyle={"solid"}
      borderBottomWidth={"2px"}
      width={"100%"}
    >
      <Stack
        alignItems={{ base: "left", md: "center" }}
        animation={toFloat()}
        direction={{ base: "column", md: "row" }}
        display={{ base: "none", lg: "flex" }}
        justifyContent={"space-between"}
        marginBottom={8}
        paddingInline={{ base: 6, md: 12 }}
      >
        <TextQuot aling={"left"} content={"Passionate Front-End Developer"} />
        <StarIcon fill={fill} />
        <TextQuot aling={"center"} content={"User-centered design"} />
        <StarIcon fill={fill} />
        <TextQuot aling={"center"} content={"Proficient in ReactJS"} />
        <StarIcon fill={fill} />
        <TextQuot aling={"right"} content={"Skilled in UX/UI design"} />
      </Stack>
    </Stack>
  )
}

export default Section6
