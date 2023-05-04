import { Link, Stack, Text, useColorModeValue, useTheme } from "@chakra-ui/react"

import { Logo, ContactIcons, GridContainer } from ".."

const Footer = () => {
  //Style settings
  const heart = useColorModeValue("🖤", "🤍")
  const { textStyles } = useTheme()
  const footerSize = textStyles.footer.fontSize
  const underlineColor = useColorModeValue("black", "white")
  const anchorStyle = {
    _after: {
      content: `" "`,
      display: "block",
      background: "none repeat scroll 0 0 transparent",
      bottom: 0,
      height: 0.5,
      left: "50%",
      position: "absolute",
      backgroundColor: underlineColor,
      transition: "width 0.3s ease 0s, left 0.3s ease 0s",
      width: 0,
    },
    _hover: {
      _after: { width: "100%", left: 0 },
    },
    position: "relative",
    fontWeight: 700,
    target: "_blank",
    textStyle: "footer",
    display: "block",
  }

  const getYear = new Date().getFullYear()

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
        <GridContainer columns={"repeat(2, 1fr)"} gap={2}>
          <Link {...anchorStyle} href={"https://www.linkedin.com/in/santiago-moyano/"} width={125}>
            Santiago Moyano
          </Link>

          <Text textStyle={"footer"}>Front End Developer</Text>
          <Text textStyle={"footer"}>Córdoba, Argentina</Text>
          <Link {...anchorStyle} href={"mailto:smoyano.di@gamil.com"}>
            smoyano.di@gmail.com
          </Link>
        </GridContainer>
        <ContactIcons />
      </Stack>
      <Text fontSize={`calc(${footerSize} / 1.618)`} textAlign={"center"} textStyle={"footer"}>
        {`${getYear} - Designed and developed with ${heart}.`}
      </Text>
    </Stack>
  )
}

export default Footer
