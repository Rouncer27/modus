import React from "react"
import styled from "styled-components"

const MobileNavButton = ({ setIsOpen }) => {
  const handleCheckbox = event => {
    if (event.target.checked) {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }

  return (
    <TopNav>
      <label htmlFor="menu-button" className="hamburger-menu">
        <input
          type="checkbox"
          name="menu-button"
          id="menu-button"
          onChange={() => handleCheckbox(event)}
        />
      </label>
    </TopNav>
  )
}

const TopNav = styled.div`
  position: fixed;
  top: 3.5rem;
  right: 3.5rem;
  z-index: 9999999999999999;

  .hamburger-menu {
    --x-width: calc((0.8rem * 3) + (0.6rem * 2) * 1.41421356237);
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    width: max-content;
    cursor: pointer;
  }

  .hamburger-menu::before,
  .hamburger-menu::after,
  .hamburger-menu input {
    content: "";
    width: 6rem;
    height: 0.8rem;
    background-color: #000;
    border-radius: 99999rem;
    transform-origin: left center;
    transition: all 0.2s ease-out;
  }

  .hamburger-menu input {
    appearance: none;
    padding: 0;
    margin: 0;
    outline: none;
    pointer-events: none;
  }

  .hamburger-menu:has(input:checked)::before {
    rotate: 45deg;
    width: var(--x-width);
    /* translate: 0 calc(8rem / -2); */
  }

  .hamburger-menu:has(input:checked)::after {
    rotate: -45deg;
    width: var(--x-width);
    /* translate: 0 calc(8rem / 2); */
  }

  .hamburger-menu input:checked {
    opacity: 0;
    width: 0;
  }
`

export default MobileNavButton
