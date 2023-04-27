import { Link } from "react-router-dom"

import { Titles } from "../"

const Logo = () => {
  return (
    <Link to={"/"}>
      <Titles content={"#SM"} textStyle={"logo"} tiltingScale={1.1} />
    </Link>
  )
}

export default Logo
