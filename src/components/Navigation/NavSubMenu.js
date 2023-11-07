import React from "react"
import styled from "styled-components"
import NavSubItem from "./NavSubItem"

const NavSubMenu = ({ subActive, items }) => {
  return (
    <NavSubMenuStyled
      className={`${subActive ? "sub-active" : ""}`}
      $sublenght={items.length}
    >
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
  height: 0;
  transition: all 0.3s ease-out;
  opacity: 0;
  visibility: hidden;

  &.sub-active {
    height: ${props => `calc((5.5rem * ${props.$sublenght}))`};
    opacity: 1;
    visibility: visible;
  }
`

export default NavSubMenu
