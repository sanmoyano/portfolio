import { useState } from "react"
import { Stack } from "@chakra-ui/react"
import { motion, AnimatePresence } from "framer-motion"

import { skills } from "../Data/skills"

import { SkillCard } from "./"

const SkillsBlock = ({ dimension }) => {
  const [hoveredIndex, setHoveredIndex] = useState(0)

  return (
    <AnimatePresence>
      <Stack height={dimension.height} justifyContent={"space-around"} width={"100%"}>
        {skills.map(({ type, list }, index) => (
          <SkillCard
            key={type}
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
