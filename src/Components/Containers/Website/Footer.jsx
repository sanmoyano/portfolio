import { Grid, Link, Stack, Text, useColorModeValue, useTheme } from "@chakra-ui/react"

import { Logo, ContactIcons } from "./Components"

const Footer = () => {
  const heart = useColorModeValue("🖤", "🤍")
  const { textStyles } = useTheme()
  const footerSize = textStyles.footer.fontSize

  return (
    <Stack
      justifyContent={"space-between"}
      paddingBlock={12}
      paddingInline={{ base: 6, md: 12 }}
      spacing={6}
      width={"100%"}
    >
      <Logo />
      <Stack
        direction={"row"}
        display={{ base: "none", lg: "flex" }}
        justifyContent={"space-between"}
        width={"100%"}
      >
        <Grid gap={2} templateColumns={"repeat(2, 1fr)"}>
          <Link
            fontWeight={700}
            href={"https://www.linkedin.com/in/santiago-moyano/"}
            target={"_blank"}
            textStyle={"footer"}
          >
            Santiago Moyano
          </Link>

          <Text textStyle={"footer"}>Front End Developer</Text>
          <Text textStyle={"footer"}>Córdoba, Argentina</Text>
          <Link fontWeight={700} href={"mailto:smoyano.di@gamil.com"} textStyle={"footer"}>
            smoyano.di@gmail.com
          </Link>
        </Grid>
        <ContactIcons />
      </Stack>
      <Text fontSize={`calc(${footerSize} / 1.618)`} textAlign={"center"} textStyle={"footer"}>
        {`2023 - Designed and developed with ${heart}.`}
      </Text>
    </Stack>
  )
}

export default Footer
