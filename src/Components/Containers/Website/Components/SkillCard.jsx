import { Stack, Text, useColorModeValue } from "@chakra-ui/react"

import { TagCloudText } from "."

const SkillCard = ({ type, list }) => {
  const color = useColorModeValue("red", "green")

  // perspective(1200px) translateX(0px) translateY(50.6859px) scale(1) rotate(0deg) rotateX(0deg) rotateY(0deg) translateZ(0px)
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
