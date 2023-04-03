import { useEffect, useRef, useState } from "react"
import { Stack, Text } from "@chakra-ui/react"

import useDimensions from "../Hooks/useDimensions"
import { VerticalText } from "../Decorators"

import { TextSphere } from "./"

const SkillsBlock = () => {
  const skills = [
    {
      typeSkill: "main skills",
      listSkills: [
        "ReactJs",
        "JavaScript",
        "Html",
        "Css | Scss",
        "Framer motion",
        "ESLint",
        "Firebase",
        "Cypress",
        "Figma",
        "Illustrator",
        "Pothoshop",
      ],
    },
    {
      typeSkill: "upskilling",
      listSkills: [
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
      typeSkill: "others skills",
      listSkills: ["Git", "GitHub", "Azure DevOps", "Chakra UI", "Material UI", "Style-components"],
    },
  ]

  const HEIGHT_TEXT_REF = useRef()
  const dimension = useDimensions(HEIGHT_TEXT_REF)

  return (
    <Stack alignItems={"center"} direction={"row"} id={"canvas"} width={"100%"}>
      <VerticalText content={"skills"} refItem={HEIGHT_TEXT_REF} />
      <Stack
        direction={"row"}
        height={dimension.height}
        justifyContent={"space-around"}
        spacing={6}
        width={"100%"}
      >
        {skills.map((skill) => (
          <Stack key={skill.typeSkill} bgColor={"violet"} height={"100%"} width={"100%"}>
            <Text fontSize={"4rem"} fontWeight={"bold"} textTransform={"uppercase"}>
              {skill.typeSkill}
            </Text>
            <TextSphere listText={skill.listSkills} />
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default SkillsBlock
