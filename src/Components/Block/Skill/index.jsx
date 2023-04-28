import { useState, useEffect, useRef } from "react"
import { Text, useColorModeValue } from "@chakra-ui/react"
import { AnimatePresence, useInView } from "framer-motion"
import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons"

import { floatAnimation } from "../../../Utils/floatAnimation"
import { skills } from "../../../Data/skills"
import { SkillCard } from "../.."
import { BlockContainer } from "../../"

const SkillsBlock = ({ dimension }) => {
  //Animation settings
  const containerSkills = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delayChildren: 1,
        staggerChildren: 0.5,
        staggerDirection: 1,
      },
    },
  }

  const itemSkill = {
    hidden: { x: "-200%" },
    visible: { x: "0%" },
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
      <BlockContainer
        ref={ITEM_REF}
        animationVariants={containerSkills}
        height={dimension.height}
        justifyContent={"flex-start"}
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
      </BlockContainer>
    </AnimatePresence>
  )
}

export default SkillsBlock
