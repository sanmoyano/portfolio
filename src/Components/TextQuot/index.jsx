import { Text, useColorModeValue } from "@chakra-ui/react"
import { motion } from "framer-motion"

const TextQuot = ({ aling, content }) => {
  const colorText = useColorModeValue("brand.100", "brand.200")

  return (
    <Text
      as={motion.p}
      color={colorText}
      textAlign={{ base: "center", md: aling }}
      textStyle={"quotes"}
      width={{ base: "100%", md: "200px" }}
    >
      {content}
    </Text>
  )
}

export default TextQuot
