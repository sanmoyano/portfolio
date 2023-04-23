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
        fontSize={"12rem"}
        fontWeight={700}
        height={"100%"}
        lineHeight={0.8}
        textAlign={"center"}
        textTransform={"uppercase"}
      >
        {type}
      </Text>
    </Stack>
  )
}

export default SkillCard

{
  /* <TagCloudText tags={list} /> */
}
