import { useRef } from "react"
import { Stack, Text, useColorModeValue } from "@chakra-ui/react"

import useDimensions from "../Hooks/useDimensions"
import { VerticalText } from "../Decorators"

import { TagCloudText } from "./"

const SkillsBlock = () => {
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
        "Illustrator",
        "Pothoshop",
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
      list: ["Git", "GitHub", "Azure DevOps", "Chakra UI", "Material UI", "Style-components"],
    },
  ]

  const HEIGHT_TEXT_REF = useRef()
  const dimension = useDimensions(HEIGHT_TEXT_REF)
  const color = useColorModeValue("red", "green")

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
          <Stack
            key={skill.typeSkill}
            alignItems={"center"}
            height={"100%"}
            justifyContent={"space-between"}
            width={"100%"}
          >
            <Text
              color={color}
              fontFamily={"Roboto"}
              fontSize={"3rem"}
              fontWeight={700}
              lineHeight={1}
              textAlign={"justify"}
              textTransform={"uppercase"}
            >
              {skill.type}
            </Text>
            <TagCloudText tags={skill.list} />
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default SkillsBlock
