import { Stack } from "@chakra-ui/react"

import { NavBar } from "../.."

const DesktopNavBar = () => {
  return (
    <Stack alignItems={"center"} direction={"row"} display={{ base: "none", lg: "flex" }} gap={10}>
      <NavBar />
    </Stack>
  )
}

export default DesktopNavBar
