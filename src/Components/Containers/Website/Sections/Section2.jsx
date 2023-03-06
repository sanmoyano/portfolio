import { Stack, Text, useColorModeValue } from "@chakra-ui/react"

import { StarIcon } from "../Decorators"

const Section2 = () => {
  const changeColor = useColorModeValue("red", "green")

  return (
    <Stack
      borderBottomColor={changeColor}
      borderBottomStyle={"solid"}
      borderBottomWidth={"2px"}
      width={"100%"}
    >
      <Stack
        alignItems={"center"}
        direction={"row"}
        justifyContent={"space-between"}
        marginBottom={8}
        paddingInline={12}
      >
        <Text>item1</Text>
        <StarIcon fill={"white"} />
        <Text>item2</Text>
        <StarIcon fill={"white"} />
        <Text>item3</Text>
      </Stack>
    </Stack>
  )
}

export default Section2
