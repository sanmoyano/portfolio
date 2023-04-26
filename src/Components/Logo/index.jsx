import { Link } from "react-router-dom"

import { TextTitles } from "../"

const Logo = () => {
  return (
    <Link to={"/"}>
      <TextTitles content={"#SM"} px={1} textStyle={"logo"} />
    </Link>
  )
}

export default Logo
