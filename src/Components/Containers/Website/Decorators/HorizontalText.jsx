import { Text } from "@chakra-ui/react"
import React from "react"

const HorizontalText = ({ text, textAlign }) => {
  return (
    <Text
      sx={{
        writingMode: { base: "horizontal-tb", lg: "vertical-lr" },
        textOrientation: "mixed",
      }}
      textAlign={textAlign}
      textStyle={"neusaBoldUpper"}
    >
      {text}
    </Text>
  )
}

export default HorizontalText
