import React from "react"
import styled from "styled-components"
import { colors } from "../../../styles/helpers"
import HeaderSubMenuItem from "./HeaderSubMenuItem"

const HeaderSubMenu = ({
  subActive,
  items,
  handleIsActiveOn,
  handleIsActiveOff,
  handleIsActiveOffBlur,
}) => {
  return (
    <HeaderSubMenuStyled
      isactive={subActive}
      onMouseEnter={handleIsActiveOn}
      onMouseLeave={handleIsActiveOff}
    >
      {items.map((subItem, index) => (
        <HeaderSubMenuItem
          key={subItem.id}
          item={subItem}
          isLast={items.length === index + 1}
          handleIsActiveOffBlur={handleIsActiveOffBlur}
        />
      ))}
    </HeaderSubMenuStyled>
  )
}

const HeaderSubMenuStyled = styled.ul`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  top: calc(100% + 0.5rem);
  right: 10rem;
  left: 0rem;
  width: 25rem;
  margin: auto;
  padding: 1rem;
  box-shadow: 3px 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #cddadc;
  text-align: center;
  transition: all 0.3s ease-in;
  opacity: ${props => (props.isactive ? "1" : "0")};
  visibility: ${props => (props.isactive ? "visible" : "hidden")};
`

export default HeaderSubMenu
