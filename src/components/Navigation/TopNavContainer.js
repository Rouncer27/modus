import React from "react"
import styled from "styled-components"
import NavItem from "./NavItem"
import { B2Black, colors } from "../../styles/helpers"

const TopNavContainer = ({ navitems }) => {
  const topNavItems = navitems.filter(item => item.parentDatabaseId === 0)
  const subNavItems = navitems.filter(item => item.parentDatabaseId !== 0)
  const navItemsWithSubs = topNavItems.map(item => {
    const itemWithSubs = subNavItems.filter(
      subItem => subItem.parentDatabaseId === item.databaseId
    )
    item.subItems = itemWithSubs
    return item
  })

  return (
    <TopNavContainerStyled>
      <ul className="main-mobile-nav">
        {navItemsWithSubs.map(item => (
          <NavItem key={item.id} item={item} />
        ))}
      </ul>
    </TopNavContainerStyled>
  )
}

const TopNavContainerStyled = styled.nav`
  display: block;
  width: 100%;

  ul.main-mobile-nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    padding-bottom: 5rem;

    li {
      position: relative;
      width: 100%;
      border-bottom: 0.1rem solid ${colors.white};
      text-align: left;

      a {
        ${B2Black};
        display: block;
        width: 100%;
        padding: 2rem;
        color: ${colors.white};
        text-transform: uppercase;

        &:hover {
          color: ${colors.colorTertiary};
        }

        &[aria-current="page"] {
          color: ${colors.colorTertiary};

          &:hover {
            cursor: default;
          }
        }
      }
    }
  }
`

export default TopNavContainer
