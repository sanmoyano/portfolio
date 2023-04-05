import { Stack } from "@chakra-ui/react"
import TagCloud from "@frank-mayer/react-tag-cloud"

const TextSphere = ({ tags }) => {
  return (
    <Stack alignItems={"center"} justifyContent={"center"} textStyle={"paragraph"} width={"100%"}>
      <TagCloud
        options={(w) => ({
          radius: Math.min(350, w.innerWidth, w.innerHeight) / 2,
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
