import { Stack, useColorModeValue } from "@chakra-ui/react"

import { Logo, DesktopNavBar } from "./Components"

const Header = () => {
  const changeColor = useColorModeValue("2px solid black", "2px solid white")

  return (
    <Stack
      alignItems={"center"}
      borderBottom={changeColor}
      direction={"row"}
      justifyContent={"space-between"}
      paddingInline={24}
      width={"100%"}
    >
      <Logo />
      <DesktopNavBar />
    </Stack>
  )
}

export default Header
