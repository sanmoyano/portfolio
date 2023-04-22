import { Stack } from "@chakra-ui/react"
import TagCloud from "@frank-mayer/react-tag-cloud"
import { motion } from "framer-motion"

const TextSphere = ({ tags }) => {
  return (
    <Stack
      alignItems={"center"}
      as={motion.div}
      fontSize={"1.2rem"}
      height={"100%"}
      justifyContent={"center"}
      textStyle={"paragraph"}
      whileHover={{ scale: 1.8, transition: { duration: 0.2 } }}
      width={"30%"}
    >
      <TagCloud
        options={(w) => ({
          radius: Math.min(160, w.innerWidth, w.innerHeight) / 2,
          maxSpeed: "normal",
          initSpeed: "normal",
          direction: Math.floor(tags.length * 50),
        })}
        onClickOptions={{ passive: true }}
      >
        {tags}
      </TagCloud>
    </Stack>
  )
}

export default TextSphere
