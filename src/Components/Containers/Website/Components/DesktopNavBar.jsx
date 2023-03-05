import { Stack } from "@chakra-ui/react"

import { NavBar } from "."

const DesktopNavBar = () => {
  return (
    <Stack alignItems={"center"} direction={"row"} marginBlock={20} spacing={10}>
      <NavBar />
    </Stack>
  )
}

export default DesktopNavBar
