import { useState } from "react"
import { IconButton } from "@chakra-ui/react"
import { useColorMode } from "@chakra-ui/react"
import { VscColorMode } from "react-icons/vsc"
import { motion } from "framer-motion"

import { NavItem } from "./"

const NavBar = () => {
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
  const { toggleColorMode } = useColorMode()

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
        <motion.li key={i} style={{ listStyleType: "none" }} whileTap={{ scale: 0.95 }}>
          <NavItem item={item.name} route={item.route} />
        </motion.li>
      ))}
    </>
  )
}

export default NavBar
