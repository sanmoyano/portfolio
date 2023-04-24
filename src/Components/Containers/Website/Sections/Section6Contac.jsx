import { Link, Stack, Text, useColorModeValue, useTheme } from "@chakra-ui/react"

import { ContactIcons, ParallaxContainer } from "../Components"
import { Tilting } from "../Decorators"

const Section5Contact = () => {
  const { colors } = useTheme()
  const colorText = useColorModeValue(colors.brand[100], colors.brand[200])

  return (
    <ParallaxContainer>
      <Stack
        display={{ base: "none", lg: "flex" }}
        height={"100%"}
        id={6}
        spacing={12}
        width={"100%"}
      >
        <Text id={"contact"} textAlign={{ base: "center", md: "left" }} textStyle={"h1"}>
          get in touch
        </Text>
        <Stack alignItems={"center"} justifyContent={"center"} spacing={10} width={"100%"}>
          <Link _hover={{ textDecorationColor: "none" }} href="mailto:smoyano.di@gmail.com">
            <Tilting>
              <Text
                _hover={{
                  WebkitTextStroke: `calc(1px / 1.618) ${colorText}`,
                  color: "transparent",
                }}
                color={`${colorText}`}
                textStyle={"logo"}
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
    </ParallaxContainer>
  )
}

export default Section5Contact
