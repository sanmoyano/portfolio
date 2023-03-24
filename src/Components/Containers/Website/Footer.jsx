import { Box, Link, Text } from "@chakra-ui/react"

import { Logo } from "./Components"

const Footer = () => {
  return (
    <Box
      sx={{
        display: "grid",
        placeContent: "center",
        paddingBlock: 12,
        paddingInline: { base: 6, md: 12 },
      }}
    >
      <Logo />
      <Text textAlign={"center"} textStyle={"robotoText"}>
        2023 - Designed and developed with love by{" "}
        <Link href={"https://www.linkedin.com/in/santiago-moyano/"} target={"_blank"}>
          Santiago Moyano
        </Link>
      </Text>
    </Box>
  )
}

export default Footer
