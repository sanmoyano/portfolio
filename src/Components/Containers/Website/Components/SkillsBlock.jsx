import { useState } from "react"
import { Stack } from "@chakra-ui/react"
import { motion, AnimatePresence } from "framer-motion"

import { skills } from "../Data/skills"

import { SkillCard } from "./"

const SkillsBlock = ({ dimension }) => {
  const [hoveredIndex, setHoveredIndex] = useState(0)
  const containerSkills = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.1,
        delayChildren: 0.5,
        staggerChildren: 0.5,
        staggerDirection: 1,
      },
    },
  }

  const itemSkill = {
    hidden: { x: "-200%" },
    show: { x: "0%" },
  }

  return (
    <AnimatePresence>
      <Stack
        as={motion.div}
        height={dimension.height}
        initial={"hidden"}
        justifyContent={"space-around"}
        variants={containerSkills}
        whileInView={"show"}
        width={"100%"}
      >
        {skills.map(({ type, list }, index) => (
          <SkillCard
            key={type}
            animateSkill={itemSkill}
            handleHover={setHoveredIndex}
            index={index}
            isHovered={hoveredIndex === index}
            list={list}
            type={type}
          />
        ))}
      </Stack>
    </AnimatePresence>
  )
}

export default SkillsBlock
