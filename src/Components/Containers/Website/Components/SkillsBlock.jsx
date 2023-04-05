import { useRef } from "react"
import { Grid, GridItem, Stack, Text, useColorModeValue } from "@chakra-ui/react"

import useDimensions from "../Hooks/useDimensions"
import { VerticalText } from "../Decorators"

import { TagCloudText } from "./"

const SkillsBlock = ({ isHover }) => {
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
    <Stack alignItems={"center"} direction={"row"} width={"100%"}>
      <VerticalText content={"skills"} refItem={HEIGHT_TEXT_REF} />
      <Grid height={dimension.height} templateColumns={"repeat(3,1fr)"} width={"100%"}>
        {skills.map((skill) => (
          <GridItem key={skill.type} width={"100%"}>
            <Stack alignItems={"center"} height={"100%"} justifyContent={"space-between"}>
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
          </GridItem>
        ))}
      </Grid>
    </Stack>
  )
}

export default SkillsBlock
