import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavSubItem = ({ item }) => {
  const slug = item.url
    .split("/")
    .filter(item => item !== "")
    .join("/")
  return (
    <NavSubItemStyled>
      <Link to={`/${slug}`}>{item.label}</Link>
    </NavSubItemStyled>
  )
}

const NavSubItemStyled = styled.li`
  width: 100%;
  padding-left: 5rem;
  border: none !important;
  text-align: left;

  a {
    padding: 1rem 2rem !important;
  }
`

export default NavSubItem
