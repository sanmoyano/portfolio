import { Grid, GridItem } from "@chakra-ui/react"

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

  return (
    <Grid
      display={!isHovered ? "grid" : "none"}
      height={dimension.height}
      templateColumns={"repeat(3,1fr)"}
      width={"100%"}
    >
      {skills.map(({ type, list }) => (
        <GridItem key={type} width={"100%"}>
          <SkillCard list={list} type={type} />
        </GridItem>
      ))}
    </Grid>
  )
}

export default SkillsBlock
