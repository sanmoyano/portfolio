import { Stack } from "@chakra-ui/react"
import { motion, AnimatePresence, useCycle } from "framer-motion"

// import { useDimensions } from "./use-dimensions"

import { NavBar, ToggleMenu } from "."

const MobileNavBar = ({ height }) => {
  const [isOpen, setIsOpen] = useCycle(false, true)

  const variants = {
    open: { opacity: 1, x: "0" },
    closed: { opacity: 0, x: "-100%" },
  }

  return (
    <Stack display={{ base: "flex", lg: "none" }}>
      <motion.nav animate={isOpen ? "open" : "closed"} initial={false}>
        <ToggleMenu toggle={() => setIsOpen()} />
      </motion.nav>
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
          top={height}
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
