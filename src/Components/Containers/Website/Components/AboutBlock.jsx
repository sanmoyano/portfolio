import { motion } from "framer-motion"
import { Container, Grid, Stack, useColorModeValue, useTheme } from "@chakra-ui/react"

import { GridItemText, TextQuot, StarIcon } from "../Decorators"
import { floatAnimation } from "../Utils/floatAnimation"

const AboutBlock = ({ dimension }) => {
  const { colors } = useTheme()
  const fill = useColorModeValue(colors.brand[100], colors.brand[200])

  return (
    <Stack
      as={motion.div}
      height={dimension.height}
      id={"about-hover"}
      initial={"hidden"}
      justifyContent={"space-between"}
      variants={{
        visible: { translateX: "0%", transition: { duration: 1 } },
        hidden: { translateX: "-100%" },
      }}
      viewport={{ once: true }}
      whileInView={"visible"}
      width={"100%"}
    >
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
          animate={{ opacity: 1, transition: { duration: 3, delay: 0.5 } }}
          animation={floatAnimation}
          as={motion.div}
          direction={"row"}
          initial={{ opacity: 0 }}
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
  )
}

export default AboutBlock
