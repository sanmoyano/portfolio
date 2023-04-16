import { useRef, useEffect } from "react"
import { motion, AnimatePresence, usePresence } from "framer-motion"
import { Stack } from "@chakra-ui/react"

import useDimensions from "../Hooks/useDimensions"
import { VerticalText } from "../Decorators"

import { SkillsBlock } from "."

const Skills = ({ isHovered, isVisible }) => {
  const HEIGHT_TEXT_REF = useRef()
  const dimension = useDimensions(HEIGHT_TEXT_REF)
  const [isPresent, safeToRemove] = usePresence()

  useEffect(() => {
    !isPresent && setTimeout(safeToRemove, 1000)
  }, [isPresent])

  const animationVariants = {
    init: {
      x: "0%",
      transition: {
        type: "tween",
        duration: 0.5,
        delay: 1.2,
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
