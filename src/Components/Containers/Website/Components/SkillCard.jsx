import { Stack, Text, useColorModeValue } from "@chakra-ui/react"
import { motion, AnimatePresence } from "framer-motion"

import { TagCloudText } from "."

const SkillCard = ({ type, list }) => {
  const color = useColorModeValue("red", "green")

  return (
    <Stack alignItems={"center"} height={"100%"} justifyContent={"space-between"}>
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
      <Stack
        alignItems={"center"}
        as={motion.div}
        height={"100%"}
        justifyContent={"center"}
        whileHover={{ scale: 1.2, transition: { duration: 0.1 } }}
      >
        <TagCloudText tags={list} />
      </Stack>
    </Stack>
  )
}

export default SkillCard
