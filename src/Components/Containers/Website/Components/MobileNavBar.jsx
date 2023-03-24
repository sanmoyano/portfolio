import { Stack, useColorModeValue } from "@chakra-ui/react"
import { motion, AnimatePresence, useCycle } from "framer-motion"

import { NavBar, ToggleMenu } from "./"

const MobileNavBar = ({ topPosition }) => {
  const [isOpen, setIsOpen] = useCycle(false, true)
  const bgColor = useColorModeValue("white", "black")

  const variants = {
    open: { opacity: 1, x: "0" },
    closed: { opacity: 0, x: "-100%" },
  }

  isOpen ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "unset")

  return (
    <Stack display={{ base: "flex", lg: "none" }}>
      <Stack animate={isOpen ? "open" : "closed"} as={motion.div} initial={false}>
        <ToggleMenu toggle={() => setIsOpen()} />
      </Stack>
      <AnimatePresence>
        <Stack
          animate={isOpen ? "open" : "closed"}
          as={motion.div}
          bgColor={bgColor}
          gap={10}
          height={"100vh"}
          margin={"0px !important"}
          p={6}
          position={"absolute"}
          right={"0px"}
          top={topPosition}
          variants={variants}
          width={"100%"}
        >
          <Stack alignItems={"left"} gap={8} height={"100%"} width={"100%"}>
            <NavBar />
          </Stack>
        </Stack>
      </AnimatePresence>
    </Stack>
  )
}

export default MobileNavBar
