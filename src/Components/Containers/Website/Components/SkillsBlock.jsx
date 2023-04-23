import { useState } from "react"
import { Stack } from "@chakra-ui/react"
import { motion, AnimatePresence } from "framer-motion"

import { skills } from "../Data/skills"

import { SkillCard } from "./"

const SkillsBlock = ({ dimension }) => {
  const [activeIndex, setActiveIndex] = useState(0)

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
        justifyContent={"flex-start"}
        position={"relative"}
        variants={containerSkills}
        viewport={{ once: true }}
        whileInView={"show"}
        width={"100%"}
      >
        {skills.map(({ type, list }, index) => (
          <SkillCard
            key={type}
            animateSkill={itemSkill}
            handleActiveIndex={{ setActiveIndex, activeIndex }}
            heightParent={dimension.height}
            index={index}
            skill={{ type, list }}
          />
        ))}
      </Stack>
    </AnimatePresence>
  )
}

export default SkillsBlock
