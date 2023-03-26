import { Link, Stack, Text, useColorModeValue, useTheme, keyframes } from "@chakra-ui/react"

import { ContactIcons } from "../Components"
import { Tilting } from "../Decorators"

const Section8 = () => {
  const { colors } = useTheme()
  const colorText = useColorModeValue(`${colors.red}`, `${colors.green}`)
  const floating = keyframes`
  0% { transform: translate(0,  0px); }
  50%  { transform: translate(0, 15px); }
  100%   { transform: translate(0, -0px); } 
  `

  return (
    <Stack height={"100%"} paddingInline={{ base: 6, lg: 12 }} spacing={12} width={"100%"}>
      <Text
        animation={`${floating} 3s ease-in-out infinite`}
        textAlign={{ base: "center", md: "left" }}
        textStyle={"sectionTitle"}
      >
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
  )
}

export default Section8
