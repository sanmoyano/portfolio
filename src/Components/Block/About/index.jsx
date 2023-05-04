import { motion } from "framer-motion"
import { Container, Stack, useColorModeValue, useTheme } from "@chakra-ui/react"

import { floatAnimation } from "../../../Utils/floatAnimation"
import { GridItemText, TextQuot, StarIcon, GridContainer, BlockContainer } from "../.."

const AboutBlock = ({ dimension }) => {
  //Styles settings
  const { colors } = useTheme()
  const fill = useColorModeValue(colors.brand[100], colors.brand[200])

  //Animation settings
  const animationVariants = {
    visible: {
      translateX: "0%",
      transition: { duration: 1 },
    },
    hidden: {
      translateX: "-100%",
    },
  }

  return (
    <BlockContainer
      animationVariants={animationVariants}
      height={dimension.height}
      justifyContent={"space-between"}
    >
      <GridContainer columns={{ base: "repeat(1,1fr)", lg: "repeat(2,1fr)" }} gap={12}>
        <GridItemText
          content={
            "I am a Front End Developer who primarily utilizes ReactJS. I prioritize designing and coding UX/UI features that provide the best possible user experience."
          }
        />
        <GridItemText
          content={
            "I'm currently working to enhance my skills in order to develop a mern Full Stack profile. My ultimate goal is to create practical solutions for the future."
          }
        />
      </GridContainer>
      <Container centerContent display={{ base: "none", lg: "inherit" }} maxW={"100%"}>
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
    </BlockContainer>
  )
}

export default AboutBlock
