import React from "react"
import { useLocation, useRoutes } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

import { Home, Projects } from "../Pages"

import Root from "./Root"

const App = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
      ],
    },
  ])

  const location = useLocation()

  if (!element) return null

  return (
    <AnimatePresence mode="wait">
      {React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  )
}

export default App
