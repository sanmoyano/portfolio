import { Box, Image, useColorModeValue } from "@chakra-ui/react"

const HeroLogo = () => {
  const logo = useColorModeValue(
    "../../../../../assets/logo_red.svg",
    "../../../../../assets/logo_green.svg",
  )

  return (
    <Box maxW={"400px"} sx={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
      <Image src={logo} />
    </Box>
  )
}

export default HeroLogo
