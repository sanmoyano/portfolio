import { Grid, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react"

import { Logo, ContactIcons } from "./Components"

const Footer = () => {
  const heart = useColorModeValue("🖤", "🤍")

  return (
    <Stack
      display={{ base: "none", md: "flex" }}
      justifyContent={"space-between"}
      paddingBlock={12}
      paddingInline={{ base: 6, md: 12 }}
      spacing={6}
      width={"100%"}
    >
      <Logo />
      <Stack direction={"row"} justifyContent={"space-between"} width={"100%"}>
        <Grid gap={2} templateColumns={"repeat(2, 1fr)"}>
          <Text fontSize={"1.4rem"} fontWeight={700} textStyle={"paragraph"}>
            <Link href={"https://www.linkedin.com/in/santiago-moyano/"} target={"_blank"}>
              Santiago Moyano
            </Link>
          </Text>
          <Text fontSize={"1.4rem"} textStyle={"paragraph"}>
            Front End Developer
          </Text>
          <Text fontSize={"1.4rem"} textStyle={"paragraph"}>
            Córdoba, Argentina
          </Text>
          <Text fontSize={"1.4rem"} fontWeight={700} textStyle={"paragraph"}>
            <Link href={"mailto:smoyano.di@gamil.com"}>smoyano.di@gmail.com</Link>
          </Text>
        </Grid>
        <ContactIcons />
      </Stack>
      <Text fontSize={"1rem"} textAlign={"center"} textStyle={"paragraph"}>
        {`2023 - Designed and developed with ${heart}.`}
      </Text>
    </Stack>
  )
}

export default Footer
