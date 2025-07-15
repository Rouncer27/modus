import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { B2Black, B4Base, colors } from "../../../styles/helpers"

const HeaderSubMenuItem = ({ item, handleIsActiveOffBlur, isLast }) => {
  const slug = item.url
    .split("/")
    .filter(item => item !== "")
    .join("/")

  const handleDropDownBlur = () => {
    if (!isLast) return
    handleIsActiveOffBlur()
  }
  return (
    <HeaderSubMenuItemStyled>
      <Link className="subMenuItem" to={`/${slug}`} onBlur={handleDropDownBlur}>
        {item.label}
      </Link>
    </HeaderSubMenuItemStyled>
  )
}

const HeaderSubMenuItemStyled = styled.li`
  width: 100%;
  margin-bottom: 0.5rem;
  text-align: center;

  a.subMenuItem {
    ${B4Base};
    display: block;
    width: 100%;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;

    &[aria-current="page"] {
      color: ${colors.white};
      background-color: #154e3f;
      box-shadow: 0 0.15rem 0 0 ${colors.colorTertiary};

      &:hover {
        color: ${colors.white};
        cursor: default;
      }
    }

    &:hover {
      background-color: #154e3f;
      color: ${colors.white};
    }
  }
`

export default HeaderSubMenuItem
