import React from "react"
import styled from "styled-components"
import { colors, B2Black } from "../../../styles/helpers"

// import { handleOnChange } from "./functions/formFunctions"

const InputField = ({
  value,
  handler,
  errors,
  size,
  position,
  title,
  titleFr,
  type,
  nameId,
  required,
}) => {
  return (
    <InputFieldStyled size={size} position={position}>
      <label htmlFor={nameId}>
        {title} <span className="required">&#42;</span>
        <span
          className={`error-message ${
            errors.findIndex(error => error.idref === nameId) !== -1 &&
            " error-active"
          }`}
        >
          You must input a {title}
        </span>
        <input
          name={nameId}
          type={type}
          value={value}
          id={nameId}
          onChange={handler}
          aria-required={required}
          required={required}
        />
      </label>
    </InputFieldStyled>
  )
}

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
  }
`

export default InputField
