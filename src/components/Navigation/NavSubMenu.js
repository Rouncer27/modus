import React from "react"
import styled from "styled-components"
import NavSubItem from "./NavSubItem"

const NavSubMenu = ({ subActive, items }) => {
  return (
    <NavSubMenuStyled subactive={subActive} sublenght={items.length}>
      {items.map(item => (
        <NavSubItem key={item.id} item={item} />
      ))}
    </NavSubMenuStyled>
  )
}

const NavSubMenuStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  width: 100%;
  height: ${props =>
    props.subactive ? `calc((4.75rem * ${props.sublenght}))` : `0rem`};
  transition: all 0.3s ease-out;
  opacity: ${props => (props.subactive ? 1 : 0)};
  visibility: ${props => (props.subactive ? "visible" : "hidden")};
`

export default NavSubMenu
