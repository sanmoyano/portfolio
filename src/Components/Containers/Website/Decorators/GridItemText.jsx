import { Container, GridItem, Text } from "@chakra-ui/react"

const GridItemText = ({ content, aling }) => {
  return (
    <GridItem height={"100%"} width={"100%"}>
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
