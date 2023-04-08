import { Grid, GridItem } from "@chakra-ui/react"
import { motion, AnimatePresence } from "framer-motion"

import { SkillCard } from "./"

const SkillsBlock = ({ isHovered, dimension }) => {
  const skills = [
    {
      type: "main skills",
      list: [
        "ReactJs",
        "JavaScript",
        "Html",
        "Css",
        "Scss",
        "Framer motion",
        "ESLint",
        "Firebase",
        "Cypress",
        "Figma",
      ],
    },
    {
      type: "upskilling",
      list: [
        "TypeScript",
        "React Native",
        "NodeJs",
        "Mongo DB",
        "Express",
        "NextJs",
        "SQL",
        "DBAAS",
        "GraphQL",
        "Apollo GraphQL",
      ],
    },
    {
      type: "others skills",
      list: [
        "Git",
        "GitHub",
        "Azure DevOps",
        "Chakra UI",
        "Material UI",
        "Style-components",
        "Illustrator",
        "Pothoshop",
      ],
    },
  ]
  const animationVariants = {
    init: {
      opacity: 1,
      display: "grid",
      transition: {
        type: "tween",
        delay: 1.4,
      },
    },
    anim: {
      opacity: 0,
      display: "none",
      transition: {
        type: "tween",
        delay: 1.4,
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
