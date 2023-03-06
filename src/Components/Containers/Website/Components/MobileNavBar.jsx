import { Stack } from "@chakra-ui/react"
import { motion, AnimatePresence, useCycle } from "framer-motion"

import { NavBar, ToggleMenu } from "./"

const MobileNavBar = ({ topPosition }) => {
  const [isOpen, setIsOpen] = useCycle(false, true)
  const variants = {
    open: { opacity: 1, x: "0" },
    closed: { opacity: 0, x: "-100%" },
  }

  return (
    <Stack display={{ base: "flex", lg: "none" }}>
      <Stack animate={isOpen ? "open" : "closed"} as={motion.div} initial={false}>
        <ToggleMenu toggle={() => setIsOpen()} />
      </Stack>
      <AnimatePresence>
        <Stack
          alignItems={"center"}
          animate={isOpen ? "open" : "closed"}
          as={motion.div}
          backdropFilter={"blur(2px)"}
          bgColor={"transparent"}
          gap={10}
          height={"100vh"}
          justifyContent={"flex-start"}
          margin={"0px !important"}
          p={6}
          position={"absolute"}
          right={"0px"}
          top={topPosition}
          variants={variants}
          width={"100%"}
        >
          <Stack alignItems={"center"} gap={8}>
            <NavBar />
          </Stack>
        </Stack>
      </AnimatePresence>
    </Stack>
  )
}

export default MobileNavBar
