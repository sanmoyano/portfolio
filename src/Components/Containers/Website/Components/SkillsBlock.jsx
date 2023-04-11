import { Grid, GridItem } from "@chakra-ui/react"
import { motion, AnimatePresence } from "framer-motion"

import { skills } from "../Data/skills"

import { SkillCard } from "./"

const SkillsBlock = ({ isHovered, dimension }) => {
  const animationVariants = {
    init: {
      opacity: 1,
      transition: {
        duration: 1.4,
        type: "tween",
      },
      transitionEnd: {
        display: "grid",
      },
    },
    anim: {
      opacity: 0,
      transition: {
        duration: 1.4,
        type: "tween",
      },
      transitionEnd: {
        display: "none",
      },
    },
  }

  return (
    <AnimatePresence>
      <Grid
        animate={isHovered ? "anim" : "init"}
        as={motion.div}
        exit={"init"}
        height={dimension.height}
        initial={"init"}
        templateColumns={"repeat(3,1fr)"}
        variants={animationVariants}
        width={"100%"}
      >
        {skills.map(({ type, list }) => (
          <GridItem key={type} width={"100%"}>
            <SkillCard list={list} type={type} />
          </GridItem>
        ))}
      </Grid>
    </AnimatePresence>
  )
}

export default SkillsBlock
