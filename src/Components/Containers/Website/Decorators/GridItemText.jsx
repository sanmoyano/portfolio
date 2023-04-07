import { Container, GridItem, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"

const GridItemText = ({ content, aling }) => {
  return (
    <GridItem
      animate={{ opacity: 1, transition: { duration: 2 } }}
      as={motion.div}
      height={"100%"}
      initial={{ opacity: 0 }}
      width={"100%"}
    >
      <Container centerContent maxW={"100%"}>
        <Text
          fontFamily={"Roboto"}
          fontSize={"4.6rem"}
          lineHeight={1}
          textAlign={aling}
          textTransform={"uppercase"}
        >
          {content}
        </Text>
      </Container>
    </GridItem>
  )
}

export default GridItemText
