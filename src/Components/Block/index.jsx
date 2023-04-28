import { forwardRef } from "react"
import { Stack } from "@chakra-ui/react"
import { AnimatePresence, motion } from "framer-motion"

// eslint-disable-next-line react/display-name
const BlockContainer = forwardRef((props, ref) => {
  const { children, height, justifyContent, animationVariants } = props

  return (
    <AnimatePresence>
      <Stack
        ref={ref}
        as={motion.div}
        height={height}
        initial={"hidden"}
        justifyContent={justifyContent}
        position={"relative"}
        variants={animationVariants}
        viewport={{ once: true }}
        whileInView={"visible"}
        width={"100%"}
      >
        {children}
      </Stack>
    </AnimatePresence>
  )
})

export default BlockContainer
