import { forwardRef } from "react"
import { Stack } from "@chakra-ui/react"
import { AnimatePresence, motion } from "framer-motion"

// eslint-disable-next-line react/display-name
const BlockContainer = forwardRef((props, itemRef) => {
  const { children, ...otherProps } = props

  return (
    <AnimatePresence>
      <Stack
        ref={itemRef}
        as={motion.div}
        height={otherProps.height}
        initial={"hidden"}
        justifyContent={otherProps.justifyContent}
        position={"relative"}
        variants={otherProps.animationVariants}
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
