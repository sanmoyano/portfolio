import { useState, useEffect, useRef } from "react"
import { Stack, Text, useColorModeValue } from "@chakra-ui/react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons"

import { floatAnimation } from "../Utils/floatAnimation"
import { skills } from "../Data/skills"

import { SkillCard } from "./"

const SkillsBlock = ({ dimension }) => {
  //Animation settings
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

  //Style settings
  const color = useColorModeValue("brand.100", "brand.200")

  //Handle states
  const ITEM_REF = useRef(null)
  const isInView = useInView(ITEM_REF)
  const [activeIndex, setActiveIndex] = useState(0)
  const handlerKeyPress = (e) => {
    if (e.code === "ArrowUp") {
      e.preventDefault()
      setActiveIndex((prevIndex) => (prevIndex === 0 ? skills.length - 1 : prevIndex - 1))
    } else if (e.code === "ArrowDown") {
      e.preventDefault()
      setActiveIndex((prevIndex) => (prevIndex === skills.length - 1 ? 0 : prevIndex + 1))
    }
  }

  useEffect(() => {
    isInView && document.addEventListener("keydown", handlerKeyPress)

    return () => {
      isInView && document.removeEventListener("keydown", handlerKeyPress)
    }
  }, [isInView])

  return (
    <AnimatePresence>
      <Stack
        ref={ITEM_REF}
        as={motion.div}
        height={dimension.height}
        id={"skills"}
        initial={"hidden"}
        justifyContent={"flex-start"}
        position={"relative"}
        variants={containerSkills}
        viewport={{ once: true }}
        whileInView={"show"}
        width={"100%"}
      >
        {skills?.map(({ type, list }, index) => (
          <SkillCard
            key={type}
            activeIndex={activeIndex}
            animateSkill={itemSkill}
            heightParent={dimension.height}
            index={index}
            skill={{ type, list }}
          />
        ))}
        <Text
          animation={floatAnimation}
          bottom={0}
          color={color}
          position={"absolute"}
          spacing={1}
          textStyle={"quotes"}
        >
          use the {<ArrowUpIcon />} {<ArrowDownIcon />} arrow keys to change skills
        </Text>
      </Stack>
    </AnimatePresence>
  )
}

export default SkillsBlock
