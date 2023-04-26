import { Link } from "react-router-dom"

import { Titles } from "../"

const Logo = () => {
  return (
    <Link to={"/"}>
      <Titles content={"#SM"} scale={1.1} textStyle={"logo"} />
    </Link>
  )
}

export default Logo
