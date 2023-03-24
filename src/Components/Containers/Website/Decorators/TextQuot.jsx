import { Text, useColorModeValue } from "@chakra-ui/react"

const TextQuot = ({ aling, content }) => {
  const colorText = useColorModeValue("red", "green")

  return (
    <Text
      color={colorText}
      textAlign={{ base: "left", md: aling }}
      textStyle={"robotoBold"}
      width={{ base: "100%", md: "200px" }}
    >
      {content}
    </Text>
  )
}

export default TextQuot
