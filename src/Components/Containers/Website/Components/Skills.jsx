import { useRef, useEffect, useState } from "react"
import { motion, AnimatePresence, usePresence } from "framer-motion"
import { Stack } from "@chakra-ui/react"

import useDimensions from "../Hooks/useDimensions"
import { VerticalText } from "../Decorators"

import { SkillsBlock, ParallaxContainer } from "."

const Skills = () => {
  const HEIGHT_TEXT_REF = useRef()
  const dimension = useDimensions(HEIGHT_TEXT_REF)

  // const animationVariants = {
  //   init: {
  //     x: "0%",
  //     transition: {
  //       type: "tween",
  //       duration: 0.5,
  //       delay: 1,
  //       ease: "easeInOut",
  //     },
  //     transitionEnd: {
  //       display: "flex",
  //     },
  //   },
  //   anim: {
  //     x: "100%",
  //     transition: {
  //       type: "tween",
  //       duration: 1,
  //       ease: "easeInOut",
  //       delay: 1.2,
  //     },
  //     transitionEnd: {
  //       display: "none",
  //     },
  //   },
  // }

  return (
    <ParallaxContainer>
      <Stack alignItems={"center"} direction={"row"} height={"100vh"} id={4}>
        <VerticalText content={"skills"} id={"skills"} refItem={HEIGHT_TEXT_REF} />
        <SkillsBlock dimension={dimension} />
      </Stack>
    </ParallaxContainer>
  )
}

export default Skills
