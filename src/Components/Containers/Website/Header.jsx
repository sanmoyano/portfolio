import { Button, Stack, useColorModeValue } from "@chakra-ui/react"

import { NavBar, Logo } from "./Components"

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
      <NavBar />
    </Stack>
  )
}

export default Header
