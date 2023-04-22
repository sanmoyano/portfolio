import { Grid, GridItem } from "@chakra-ui/react"
import { motion, AnimatePresence } from "framer-motion"

import { skills } from "../Data/skills"

import { SkillCard } from "./"

const SkillsBlock = ({ dimension }) => {
  // const animationVariants = {
  //   init: {
  //     opacity: 1,
  //     transition: {
  //       duration: 1.2,
  //       type: "tween",
  //     },
  //     transitionEnd: {
  //       display: "grid",
  //     },
  //   },
  //   anim: {
  //     opacity: 0,
  //     transition: {
  //       duration: 1.2,
  //       type: "tween",
  //     },
  //     transitionEnd: {
  //       display: "none",
  //     },
  //   },
  // }
  //tamplateColumns = {{base: "repeat(1,1fr)", md:"repeat(3,1fr)"}}

  return (
    <AnimatePresence>
      <Grid
        as={motion.div}
        exit={"init"}
        height={dimension.height}
        initial={"init"}
        templateColumns={"repeat(3,1fr)"}
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
