import { Stack } from "@chakra-ui/react"
import TagCloud from "@frank-mayer/react-tag-cloud"
import { motion } from "framer-motion"

const TextSphere = ({ height, tags, activeIndex }) => {
  return (
    <Stack
      alignItems={"center"}
      animate={activeIndex ? "visible" : "hidden"}
      as={motion.div}
      exit={"hidden"}
      height={height}
      initial={"hidden"}
      justifyContent={"center"}
      position={"absolute"}
      right={0}
      textStyle={"cloud"}
      top={0}
      variants={{
        visible: {
          opacity: 1,
          transition: { duration: 1, delay: 0.2 },
        },

        hidden: {
          opacity: 0,
          transition: { duration: 0.2 },
        },
      }}
      width={"50%"}
    >
      <TagCloud
        options={(w) => ({
          radius: Math.min(400, w.innerWidth, w.innerHeight) / 2,
          maxSpeed: "normal",
          initSpeed: "normal",
          direction: Math.floor(tags.length * 50),
          keep: true,
        })}
        onClickOptions={{ passive: true }}
      >
        {tags}
      </TagCloud>
    </Stack>
  )
}

export default TextSphere
