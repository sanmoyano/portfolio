import { useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Stack } from "@chakra-ui/react"

import useDimensions from "../Hooks/useDimensions"
import { VerticalText } from "../Decorators"

import { SkillsBlock } from "."

const Skills = ({ isHovered }) => {
  const HEIGHT_TEXT_REF = useRef()
  const dimension = useDimensions(HEIGHT_TEXT_REF)

  const animationVariants = {
    init: {
      x: "0%",
      transition: {
        type: "tween",
        delay: 1,
        ease: "easeInOut",
      },
      transitionEnd: {
        display: "flex",
      },
    },
    anim: {
      x: "100%",
      transition: {
        type: "tween",
        duration: 1,
        ease: "easeInOut",
        delay: 1.2,
      },
      transitionEnd: {
        display: "none",
      },
    },
  }

  return (
    <AnimatePresence>
      <Stack
        animate={isHovered ? "anim" : "init"}
        as={motion.div}
        direction={"row"}
        exit={"init"}
        initial={"init"}
        variants={animationVariants}
        width={"100%"}
      >
        <VerticalText content={"skills"} id={"skills"} refItem={HEIGHT_TEXT_REF} />
        <SkillsBlock dimension={dimension} isHovered={isHovered} />
      </Stack>
    </AnimatePresence>
  )
}

export default Skills
