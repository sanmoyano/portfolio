import { useRef } from "react"
import { Button, Grid, GridItem, Stack, Text } from "@chakra-ui/react"

import { VerticalText } from "../Decorators"
import useDimensions from "../Hooks/useDimensions"

const AboutBlock = ({ hovering }) => {
  const { isHover, setHover } = hovering

  const HEIGHT_TEXT_REF = useRef()
  const dimension = useDimensions(HEIGHT_TEXT_REF)

  return (
    <Stack alignItems={"center"} direction={"row"} width={"100%"}>
      <VerticalText content={"about"} refItem={HEIGHT_TEXT_REF} />

      <Grid height={dimension.height} templateColumns={"repeat(3,1fr)"} width={"100%"}>
        <GridItem width={"100%"}>
          <Text textAlign={"center"}>content1</Text>
        </GridItem>
        <GridItem>
          <Button>CV</Button>
        </GridItem>
        <GridItem width={"100%"}>
          <Text textAlign={"center"}>content1</Text>
        </GridItem>
      </Grid>
    </Stack>
    /* <Stack
        alignItems={{ base: "left", md: "center" }}
        direction={{ base: "column", md: "row" }}
        display={{ base: "none", lg: "flex" }}
        justifyContent={"space-between"}
        marginBottom={8}
      >
        <TextQuot aling={"left"} content={"Passionate Front-End Developer"} />
        <StarIcon fill={fill} />
        <TextQuot aling={"center"} content={"User-centered design"} />
        <StarIcon fill={fill} />
        <TextQuot aling={"center"} content={"Proficient in ReactJS"} />
        <StarIcon fill={fill} />
        <TextQuot aling={"right"} content={"Skilled in UX/UI design"} />
      </Stack> */
  )
}

export default AboutBlock
