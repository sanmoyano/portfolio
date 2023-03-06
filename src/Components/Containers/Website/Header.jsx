import { useLayoutEffect, useRef } from "react"
import { Stack, useColorModeValue } from "@chakra-ui/react"

import { Logo, DesktopNavBar, MobileNavBar } from "./Components"

const Header = () => {
  const changeColor = useColorModeValue("2px solid black", "2px solid white")
  const headerHeigth = "80px"

  return (
    <Stack
      alignItems={"center"}
      borderBottom={changeColor}
      direction={"row"}
      height={headerHeigth}
      justifyContent={"space-between"}
      paddingInline={{ base: 3, md: 6, lg: 12 }}
      width={"100%"}
    >
      <Logo />
      <MobileNavBar topPosition={headerHeigth} />
      <DesktopNavBar />
    </Stack>
  )
}

export default Header
