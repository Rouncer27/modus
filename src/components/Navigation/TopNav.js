import React, { useState } from "react"
import TopNavButton from "./TopNavButton"
import TopNavDrawer from "./TopNavDrawer"
import styled from "styled-components"

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <TopNavButton setIsOpen={setIsOpen} />
      <TopNavDrawer isOpen={isOpen} />
      {!!isOpen && <BlurBackground />}
    </div>
  )
}

const BlurBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px);
  z-index: 999999;
`

export default TopNav
