import { motion, AnimatePresence } from "framer-motion"
import { Container, Grid, Stack, useColorModeValue, useTheme } from "@chakra-ui/react"

import { GridItemText, TextQuot, StarIcon } from "../Decorators"
import { floatAnimation } from "../Utils/floatAnimation"

const AboutBlock = ({ isHovered, dimension }) => {
  const { colors } = useTheme()
  const fill = useColorModeValue(`${colors.red}`, `${colors.green}`)

  const animationVariants = {
    init: {
      x: "-200%",
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    anim: {
      x: "0%",
      transition: {
        type: "tween",
        duration: 1,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.3,
        delay: 1.5,
      },
    },
  }

  return (
    <AnimatePresence>
      {isHovered && (
        <Stack
          animate={"anim"}
          as={motion.div}
          exit={"init"}
          height={dimension.height}
          id={"about-hover"}
          initial={"init"}
          justifyContent={"space-between"}
          paddingLeft={8}
          variants={animationVariants}
          width={"100%"}
        >
          <Grid
            animate={"anim"}
            as={motion.div}
            exit={"init"}
            gap={12}
            initial={"init"}
            templateColumns={"repeat(2,1fr)"}
            variants={animationVariants}
            width={"100%"}
          >
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
              animate={{ opacity: 1, transition: { duration: 2, delay: 2 } }}
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
      )}
    </AnimatePresence>
  )
}

export default AboutBlock
