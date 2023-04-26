import Tilt from "react-parallax-tilt"

const Tilting = ({ children, enable, scale }) => {
  return (
    <Tilt scale={scale} tiltEnable={enable} transitionSpeed={2500}>
      {children}
    </Tilt>
  )
}

export default Tilting
