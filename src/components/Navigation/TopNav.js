import React, { useState } from "react"
import TopNavButton from "./TopNavButton"
import TopNavDrawer from "./TopNavDrawer"

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <TopNavButton setIsOpen={setIsOpen} />
      <TopNavDrawer isOpen={isOpen} />
    </>
  )
}

export default TopNav
