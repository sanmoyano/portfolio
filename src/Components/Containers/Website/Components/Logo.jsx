import { Stack, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import Tilt from "react-parallax-tilt"

const Logo = () => {
  return (
    <Link to={"/"}>
      <Tilt scale={1.2} transitionSpeed={2500}>
        <Stack alignItems={"center"} direction={"row"} justifyContent={"center"} p={4}>
          <Text textStyle={"neusaBold"}>#SM</Text>
        </Stack>
      </Tilt>
    </Link>
  )
}

export default Logo
