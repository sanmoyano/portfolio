import { Text, useColorModeValue } from "@chakra-ui/react"
import { motion } from "framer-motion"

const TextQuot = ({ aling, content }) => {
  const colorText = useColorModeValue("red", "green")

  return (
    <Text
      as={motion.p}
      color={colorText}
      textAlign={{ base: "left", md: aling }}
      textStyle={"quotes"}
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.5 },
      }}
      width={{ base: "100%", md: "200px" }}
    >
      {content}
    </Text>
  )
}

export default TextQuot
