import { Outlet } from "react-router-dom"

import { Header, Footer } from "../Components"

export default function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
