import { Link, Stack, Text, useColorModeValue, useTheme } from "@chakra-ui/react"

import { ContactIcons } from "../Components"
import { Tilting } from "../Decorators"

const Section8 = () => {
  const { colors } = useTheme()
  const colorText = useColorModeValue(`${colors.red}`, `${colors.green}`)

  return (
    <Stack height={"100%"} paddingInline={{ base: 6, lg: 12 }} spacing={12} width={"100%"}>
      <Text textAlign={{ base: "center", md: "left" }} textStyle={"neusaBoldUpperTitle"}>
        get in touch
      </Text>
      <Stack alignItems={"center"} justifyContent={"center"} width={"100%"}>
        <Link _hover={{ textDecorationColor: "none" }} href="mailto:smoyano.di@gmail.com">
          <Tilting>
            <Text
              _hover={{
                WebkitTextStroke: `1px ${colorText}`,
                color: "transparent",
              }}
              color={`${colorText}`}
              textStyle={"neusa"}
              textTransform={"uppercase"}
              transitionDelay={"0s, 0s"}
              transitionDuration={".5s, .5s"}
              transitionProperty={"color, opacity"}
              transitionTimingFunction={"ease, ease"}
            >
              smoyano.di@gmail.com
            </Text>
          </Tilting>
        </Link>
        <ContactIcons />
      </Stack>
    </Stack>
  )
}

export default Section8
