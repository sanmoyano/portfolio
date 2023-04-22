import { Stack, Text, useColorModeValue } from "@chakra-ui/react"

import { TagCloudText } from "."

const SkillCard = ({ type, list }) => {
  const color = useColorModeValue("red", "green")

  return (
    <Stack
      alignItems={"center"}
      direction={"row"}
      height={"100%"}
      justifyContent={"space-between"}
      marginTop={"0px !important"}
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
