import { Stack, Text, useColorModeValue } from "@chakra-ui/react"
import { motion, AnimatePresence } from "framer-motion"

import { TagCloudText } from "."

const SkillCard = ({ skill, index, animateSkill, handleActiveIndex, heightParent }) => {
  const { activeIndex, setActiveIndex } = handleActiveIndex
  const active = activeIndex === index
  const color = useColorModeValue("red", "green")

  return (
    <AnimatePresence>
      <Stack
        alignItems={"center"}
        as={motion.div}
        direction={"row"}
        justifyContent={"space-between"}
        marginTop={"0px !important"}
        variants={animateSkill}
        onMouseEnter={() => setActiveIndex(index)}
        onMouseLeave={() => setActiveIndex(0)}
      >
        <Text
          color={color}
          display={"inline-block"}
          height={"100%"}
          opacity={active ? 1 : 0.1}
          textAlign={"center"}
          textStyle={"h2"}
          transition={"1.5s"}
        >
          {skill.type}
        </Text>
      </Stack>
      <TagCloudText activeIndex={active} height={heightParent} tags={skill.list} />
    </AnimatePresence>
  )
}

export default SkillCard

{
}
