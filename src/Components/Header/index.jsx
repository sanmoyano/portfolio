import { useEffect, useState } from "react"
import { lazy, Suspense } from "react"
import { Stack, useColorModeValue, Spinner, Box } from "@chakra-ui/react"
import { motion, useScroll, useSpring } from "framer-motion"

import { Logo, Tilting } from ".."
const Mobile = lazy(() => import("../Nav/Mobile"))
const Desktop = lazy(() => import("../Nav/Desktop"))

const Header = () => {
  //Style settings
  const colorLine = useColorModeValue("black", "white")
  const headerHeigth = 90

  //Page scroll progress animation
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  //Blur animation
  const [isBlured, setIsBlured] = useState(false)
  const activeBackgroundBlur = () => {
    if (window.scrollY > headerHeigth) {
      setIsBlured(true)
    } else {
      setIsBlured(false)
    }
  }

  useEffect(() => {
    activeBackgroundBlur()
    window.addEventListener("scroll", activeBackgroundBlur)
  }, [])

  return (
    <Stack
      alignItems={"center"}
      backdropFilter={isBlured ? "blur(10px)" : ""}
      direction={"row"}
      height={`${headerHeigth}px`}
      justifyContent={"space-between"}
      paddingInline={{ base: 3, md: 6, lg: 12 }}
      position={"fixed"}
      width={"100%"}
      zIndex={9}
    >
      <Box
        as={motion.div}
        style={{ scaleX }}
        sx={{
          position: "fixed",
          top: headerHeigth,
          left: 0,
          right: 0,
          height: "2px",
          transformOrigin: "0%",
          background: colorLine,
          zIndex: 9,
        }}
      />
      <Tilting>
        <Logo />
      </Tilting>
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
