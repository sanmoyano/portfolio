import { useRef } from "react"
import { Container, Grid, Stack, useColorModeValue, useTheme } from "@chakra-ui/react"

import { VerticalText, GridItemText, TextQuot, StarIcon } from "../Decorators"
import useDimensions from "../Hooks/useDimensions"
import { floatAnimation } from "../Utils/floatAnimation"

const AboutBlock = ({ hovering }) => {
  const { isHovered, setHovered } = hovering

  const HEIGHT_TEXT_REF = useRef()
  const dimension = useDimensions(HEIGHT_TEXT_REF)
  const { colors } = useTheme()
  const fill = useColorModeValue(`${colors.red}`, `${colors.green}`)

  return (
    <Stack alignItems={"center"} direction={"row"} width={"100%"}>
      <VerticalText content={"about"} refItem={HEIGHT_TEXT_REF} setHovered={setHovered} />
      <Stack height={dimension.height} justifyContent={"space-between"} paddingLeft={8}>
        <Grid gap={12} templateColumns={"repeat(2,1fr)"} width={"100%"}>
          <GridItemText
            aling={"left"}
            content={
              "I am a Front End Developer who primarily utilizes ReactJS technology. I prioritize designing and coding UX/UI features that provide the best possible user experience."
            }
          />
          <GridItemText
            aling={"right"}
            content={
              "Currently, I am working to enhance my skills in order to develop a MERN Full Stack profile. My ultimate goal is to create practical solutions for the future."
            }
          />
        </Grid>
        <Container centerContent maxW={"100%"}>
          <Stack
            alignItems={"center"}
            animation={floatAnimation}
            direction={"row"}
            justifyContent={"space-between"}
            width={"100%"}
          >
            <TextQuot aling={"left"} content={"Passionate Front-End Developer"} />
            <StarIcon fill={fill} />
            <TextQuot aling={"center"} content={"User-centered design"} />
            <StarIcon fill={fill} />
            <TextQuot aling={"center"} content={"Proficient in ReactJS"} />
            <StarIcon fill={fill} />
            <TextQuot aling={"right"} content={"Skilled in UX/UI design"} />
          </Stack>
        </Container>
      </Stack>
    </Stack>
  )
}

export default AboutBlock
