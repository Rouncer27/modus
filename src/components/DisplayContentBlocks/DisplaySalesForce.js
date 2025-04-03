import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import {
  standardWrapper,
  colors,
  B2Black,
  B1Black,
  BtnPrimaryGreen,
} from "../../styles/helpers"

const DisplaySalesForce = ({ data }) => {
  if (!data.display) return null
  const phoneInput = useRef(null)
  useEffect(() => {
    phoneInput.current.addEventListener("input", function (e) {
      this.value = this.value.replace(/[^0-9\s\-+]/g, "")
    })
  }, [])

  return (
    <StyledSection>
      <div className="wrapper">
        <form
          action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00Dau00000627Es"
          method="POST"
        >
          <input type="hidden" name="oid" value="00Dau00000627Es" />
          <input
            type="hidden"
            name="retURL"
            value="https://modus.ca/contact-us?status=success"
          />

          <label htmlFor="first_name">First Name</label>
          <input
            id="first_name"
            name="first_name"
            size="20"
            type="text"
            minLength="2"
            maxLength="50"
            required={true}
          />
          <br />

          <label htmlFor="last_name">Last Name</label>
          <input
            id="last_name"
            name="last_name"
            size="20"
            type="text"
            minLength="1"
            maxLength="50"
            required={true}
          />
          <br />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            size="20"
            type="email"
            required={true}
          />
          <br />

          <label htmlFor="company">Company</label>
          <input
            id="company"
            name="company"
            size="20"
            type="text"
            maxLength="100"
          />
          <br />

          <label htmlFor="city">City</label>
          <input id="city" name="city" size="20" type="text" maxLength="50" />
          <br />

          <label htmlFor="phone">Phone</label>
          <input
            ref={phoneInput}
            id="phone"
            name="phone"
            size="20"
            type="tel"
            pattern="^\+?[0-9][0-9\s-]{6,14}$"
            minLength="7"
            maxLength="15"
            title="Enter a valid phone number with 7 to 15 digits, allowing spaces, dashes, and an optional leading plus sign."
          />
          <br />

          <label htmlFor="description">Description</label>
          <textarea name="description" rows={8} maxLength="500"></textarea>
          <br />

          <input type="submit" name="submit" />
        </form>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.div`
  .wrapper {
    ${standardWrapper};
    margin-top: 0;
    padding-top: 0;
  }

  form {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }

  label {
    ${B2Black};
    display: block;
    width: 100%;
    line-height: 1.5;

    width: calc(100%);
    margin: 1rem auto;
    padding: 1rem 0;

    @media (min-width: 768px) {
      width: calc(100% - 2rem);
      margin-right: 1rem;
      margin-left: 1rem;
    }

    &:hover {
      color: ${colors.colorPrimary};
      cursor: initial;
    }

    .error-message {
      display: none;
    }

    .error-active {
      display: inline-block;
      color: red;
      padding-left: 2rem;
    }
  }
  input,
  textarea {
    display: block;
    margin-top: 0.25rem;
    margin-bottom: 0.5rem;
    padding: 0.9rem 1rem;
    border-radius: 0;
    color: #444;
    margin-left: 0;
    margin-right: 0;
    width: 100%;
    border: none;
    border: 0.1rem ${colors.colorSecondary} solid;

    width: calc(100%);
    margin: 1rem auto;

    @media (min-width: 768px) {
      width: calc(100% - 2rem);
      margin-right: 1rem;
      margin-left: 1rem;
    }
  }

  textarea {
    border: 0.1rem ${colors.colorSecondary} solid;
  }

  input[type="submit"] {
    ${BtnPrimaryGreen};
    cursor: pointer;
  }
`

export default DisplaySalesForce
