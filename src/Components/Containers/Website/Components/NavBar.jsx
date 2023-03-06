import { IconButton } from "@chakra-ui/react"
import { useColorMode } from "@chakra-ui/react"
import { VscColorMode } from "react-icons/vsc"
import { motion } from "framer-motion"

import { NavItem } from "./"

const NavBar = () => {
  const { toggleColorMode } = useColorMode()
  const navItems = [
    {
      name: "home",
      route: "/",
    },
    {
      name: "projects",
      route: "/projects",
    },
    {
      name: "skills",
    },
    {
      name: "about",
    },
    {
      name: "contact",
    },
  ]

  return (
    <>
      <IconButton
        _hover={{ bgColor: "none" }}
        fontSize={"20px"}
        icon={<VscColorMode />}
        size={"lg"}
        variant={"ghost"}
        onClick={toggleColorMode}
      />
      {navItems?.map((item, i) => (
        <NavItem key={i} item={item.name} route={item.route} />
      ))}
    </>
  )
}

export default NavBar
