import { Stack, Text, useColorModeValue } from "@chakra-ui/react"

import { TagCloudText } from "."

const SkillCard = ({ type, list }) => {
  const color = useColorModeValue("red", "green")

  return (
    <Stack
      alignItems={"center"}
      height={"100%"}
      justifyContent={"space-between"}
      sx={{ perspective: "1200px" }}
    >
      <Text
        color={color}
        fontFamily={"Roboto"}
        fontSize={"3rem"}
        fontWeight={700}
        lineHeight={1}
        textAlign={"justify"}
        textTransform={"uppercase"}
      >
        {type}
      </Text>
      <TagCloudText tags={list} />
    </Stack>
  )
}

export default SkillCard
