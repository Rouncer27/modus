import React from "react"
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

  return (
    <StyledSection>
      <div className="wrapper">
        <form
          action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00Dau00000627Es"
          method="POST"
        >
          <input type="hidden" name="oid" value="00Dau00000627Es" />
          <input type="hidden" name="retURL" value="http://" />
          <InputFieldStyled size="half" position="start">
            <label htmlFor="first_name">First Name</label>
            <input
              id="first_name"
              maxLength="40"
              name="first_name"
              size="20"
              type="text"
            />
            <br />
          </InputFieldStyled>
          <InputFieldStyled size="half" position="end">
            <label htmlFor="last_name">Last Name</label>
            <input
              id="last_name"
              maxLength="80"
              name="last_name"
              size="20"
              type="text"
            />
            <br />
          </InputFieldStyled>

          <InputFieldStyled size="half" position="start">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              maxLength="80"
              name="email"
              size="20"
              type="text"
            />
            <br />
          </InputFieldStyled>

          <InputFieldStyled size="half" position="end">
            <label htmlFor="company">Company</label>
            <input
              id="company"
              maxLength="40"
              name="company"
              size="20"
              type="text"
            />
            <br />
          </InputFieldStyled>

          <InputFieldStyled size="half" position="start">
            <label htmlFor="city">City</label>
            <input id="city" maxLength="40" name="city" size="20" type="text" />
            <br />
          </InputFieldStyled>

          <InputFieldStyled size="half" position="end">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              maxLength="40"
              name="phone"
              size="20"
              type="text"
            />
            <br />
          </InputFieldStyled>

          <TextareaFieldStyled size="full" position="start">
            <label htmlFor="description">Description</label>
            <textarea name="description" rows={8}></textarea>
            <br />
          </TextareaFieldStyled>

          <SubmitButtonStyled>
            <input type="submit" name="submit" />
          </SubmitButtonStyled>
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
`

const InputFieldStyled = styled.div`
  width: calc(100%);
  margin: 1rem auto;
  ${props => (props.size === "full" ? "margin: 1rem auto" : null)};
  padding: 1rem 0;

  @media (min-width: 768px) {
    width: ${props => (props.size === "half" ? "calc(50% - 2rem)" : "100%")};
    margin-right: ${props =>
      props.position === "start" && props.size === "half" ? "2rem" : "0rem"};
    margin-left: ${props =>
      props.position === "start"
        ? "0rem"
        : props.size === "half"
        ? "2rem"
        : "0rem"};
  }

  label {
    ${B2Black};
    display: block;
    width: 100%;
    line-height: 1.5;

    &:hover {
      cursor: initial;
    }

    .error-message {
      display: none;
    }

    .error-active {
      ${B2Black};
      display: inline-block;
      color: red;
      padding-left: 2rem;
      font-weight: 900;
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
    border: 0.1rem ${colors.colorSecondary} solid;
  }

  textarea {
    border: 0.1rem ${colors.colorSecondary} solid;
  }
`

const TextareaFieldStyled = styled.div`
  width: ${props => (props.size === "half" ? "calc(50% - 2rem)" : "100%")};
  margin: 1rem auto;
  margin-right: ${props => (props.position === "start" ? "2rem" : "0rem")};
  margin-left: ${props => (props.position === "start" ? "0rem" : "2rem")};
  ${props => (props.size === "full" ? "margin: 1rem auto" : null)};

  padding: 1rem 0;

  label {
    ${B2Black};
    display: block;
    width: 100%;
    line-height: 1.5;

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
  }

  textarea {
    border: 0.1rem ${colors.colorSecondary} solid;
  }
`

const SubmitButtonStyled = styled.div`
  width: 100%;
  margin-top: 2rem;
  text-align: left;

  p {
    ${B1Black};
  }

  p.required-note {
    font-size: 1.4rem;
  }

  button,
  input {
    ${BtnPrimaryGreen};
    cursor: pointer;
  }
`

export default DisplaySalesForce
