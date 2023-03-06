import { lazy, Suspense } from "react"
import { Stack, useColorModeValue, Spinner } from "@chakra-ui/react"

import { Logo } from "./Components"
const Mobile = lazy(() => import("./Components/MobileNavBar"))
const Desktop = lazy(() => import("./Components/DesktopNavBar"))

const Header = () => {
  const changeColor = useColorModeValue("2px solid black", "2px solid white")
  const headerHeigth = "90px"

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
      <Suspense
        fallback={
          <Stack alignItems={"cente"} height={"30px"} justifyContent={"center"} width={"50px"}>
            <Spinner size={"lg"} />
          </Stack>
        }
      >
        <Mobile topPosition={headerHeigth} />
        <Desktop />
      </Suspense>
    </Stack>
  )
}

export default Header
