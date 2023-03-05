import { motion } from "framer-motion"
import { Button, useTheme, useColorModeValue } from "@chakra-ui/react"
const ToggleMenu = ({ toggle }) => {
  const { colors } = useTheme()
  const fill = useColorModeValue(`${colors.black}`, `${colors.white}`)

  const Path = ({ openPath, closedPath, ...rest }) => {
    return (
      <motion.path
        fill="transparent"
        stroke={fill}
        strokeWidth="2"
        variants={{
          open: { d: openPath, transition: { duration: 0.3 } },
          closed: { d: closedPath, transition: { duration: 0.3 } },
        }}
        {...rest}
      />
    )
  }

  return (
    <button onClick={toggle}>
      <svg height="30" width="50">
        <Path closePath={"M 0 0 L 50 30"} openPath={"M 0 10 L 50 10"} />
        <Path closePath={""} openPath={"M 0 15 L 50 15"} />
        <Path closePath={"M 0 30 L 50 0"} openPath={"M 0 20 L 50 20"} />
      </svg>
      {/* <svg height="23" viewBox="0 0 23 23" width="23">
        <Path closedPath="M 2 2.5 L 20 2.5" openPath="M 3 16.5 L 17 2.5" />
        <Path closedPath="M 2 9.423 L 20 9.423" openPath="" />
        <Path closedPath="M 2 16.346 L 20 16.346" openPath="M 3 2.5 L 17 16.346" />
      </svg> */}
    </button>
  )
}

export default ToggleMenu
