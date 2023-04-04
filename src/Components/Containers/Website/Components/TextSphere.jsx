import TagCloud from "@frank-mayer/react-tag-cloud"

const TextSphere = ({ tags }) => {
  return (
    <TagCloud
      options={(w) => ({
        radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
        maxSpeed: "fast",
      })}
      onClick={(tag, ev) => alert(tag)}
      onClickOptions={{ passive: true }}
    >
      {tags}
    </TagCloud>
  )
}

export default TextSphere
