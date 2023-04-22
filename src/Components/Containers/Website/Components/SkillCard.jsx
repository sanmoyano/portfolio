import { Stack, Text, useColorModeValue } from "@chakra-ui/react"
import { motion } from "framer-motion"

import { TagCloudText } from "."

const SkillCard = ({ type, list, isHovered, handleHover, index, animateSkill }) => {
  const color = useColorModeValue("red", "green")

  return (
    <Stack
      alignItems={"center"}
      as={motion.div}
      direction={"row"}
      height={"100%"}
      justifyContent={"space-between"}
      marginTop={"0px !important"}
      opacity={isHovered ? 1 : 0.1}
      transition={"1.5s"}
      variants={animateSkill}
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
