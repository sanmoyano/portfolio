import { motion, AnimatePresence } from "framer-motion"
import { Container, Grid, Stack, useColorModeValue, useTheme } from "@chakra-ui/react"

import { GridItemText, TextQuot, StarIcon } from "../Decorators"
import { floatAnimation } from "../Utils/floatAnimation"

const AboutBlock = ({ isHovered, dimension }) => {
  const { colors } = useTheme()
  const fill = useColorModeValue(`${colors.red}`, `${colors.green}`)
  const divAnimationVariants = {
    init: {
      x: "-200%",
      transition: {
        duration: 1,
      },
    },
    anim: {
      x: "0%",
      transition: {
        type: "tween",
        duration: 1,
        repeatType: "reverse",
      },
    },
  }

  return (
    <AnimatePresence>
      {isHovered && (
        <Stack
          animate={"anim"}
          as={motion.div}
          display={isHovered ? "flex" : "none"}
          exit={"init"}
          height={dimension.height}
          initial={"init"}
          justifyContent={"space-between"}
          paddingLeft={8}
          variants={divAnimationVariants}
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
      )}
    </AnimatePresence>
  )
}

export default AboutBlock
