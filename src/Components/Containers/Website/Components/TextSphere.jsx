import { Stack } from "@chakra-ui/react"
import TagCloud from "TagCloud"

const TextSphere = ({ tags }) => {
  const options = {
    // radius in px
    radius: 300,

    // animation speed
    // slow, normal, fast
    maxSpeed: "fast",
    initSpeed: "fast",

    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 135,

    // interact with cursor move on mouse out
    keep: true,
  }

  // TagCloud(".content", tags, options)

  return <Stack className="content" />
}

export default TextSphere
