import { Link, Stack, Text, useColorModeValue, useTheme } from "@chakra-ui/react"

import { ContactIcons, ParallaxContainer, Tilting, Titles } from "../../Components"
import { icons } from "../../Data/icons"

const Contact = () => {
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
        <Titles content={"get in touch"} textStyle={"h1"} tiltingEnable={false} />
        <Stack alignItems={"center"} justifyContent={"center"} spacing={10} width={"100%"}>
          <Link _hover={{ textDecorationColor: "none" }} href="mailto:smoyano.di@gmail.com">
            <Tilting scale={1.2}>
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
          <ContactIcons icons={icons} />
        </Stack>
      </Stack>
    </ParallaxContainer>
  )
}

export default Contact
