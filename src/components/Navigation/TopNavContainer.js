import React from "react"
import styled from "styled-components"
import NavItem from "./NavItem"

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
  width: 90%;
  background-color: rgba(207, 221, 224, 0.94);

  ul.main-mobile-nav {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;

    @media (min-width: 768px) {
      justify-content: space-evenly;
    }
  }
`

export default TopNavContainer
