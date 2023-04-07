import { Stack, Text, transition, useColorModeValue } from "@chakra-ui/react"
import { motion, AnimatePresence } from "framer-motion"

import { TagCloudText } from "."

const SkillCard = ({ type, list }) => {
  const color = useColorModeValue("red", "green")

  return (
    <Stack
      alignItems={"center"}
      as={motion.div}
      height={"100%"}
      justifyContent={"space-between"}
      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
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
