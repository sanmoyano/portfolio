import { Stack, Text, useColorModeValue } from "@chakra-ui/react"

import { TagCloudText } from "."

const SkillCard = ({ type, list, isHovered, handleHover, index }) => {
  const color = useColorModeValue("red", "green")

  return (
    <Stack
      alignItems={"center"}
      direction={"row"}
      height={"100%"}
      justifyContent={"space-between"}
      marginTop={"0px !important"}
      opacity={isHovered ? 1 : 0.2}
      transition={"1.5s"}
      onMouseEnter={() => handleHover(index)}
      onMouseLeave={() => handleHover(0)}
    >
      <Text
        color={color}
        display={"inline-block"}
        fontFamily={"Roboto"}
        fontSize={"16rem"}
        fontWeight={700}
        lineHeight={1}
        textTransform={"uppercase"}
      >
        {type}
      </Text>
      <TagCloudText tags={list} />
    </Stack>
  )
}

export default SkillCard
