import { Container, GridItem, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"

const GridItemText = ({ content, aling }) => {
  return (
    <GridItem
      animate={{ opacity: 1, transition: { duration: 2, delay: 0.2 } }}
      as={motion.div}
      height={"100%"}
      initial={{ opacity: 0 }}
      width={"100%"}
    >
      <Container centerContent maxW={"100%"}>
        <Text textAlign={aling} textStyle={"paragraph"}>
          {content}
        </Text>
      </Container>
    </GridItem>
  )
}

export default GridItemText
