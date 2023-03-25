import Tilt from "react-parallax-tilt"

const Tilting = ({ children, enable, scale }) => {
  return (
    <Tilt scale={!scale ? 1.2 : scale} tiltEnable={enable} transitionSpeed={2500}>
      {children}
    </Tilt>
  )
}

export default Tilting
