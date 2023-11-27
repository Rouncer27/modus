import React from "react"
import styled from "styled-components"
import { colors, B2Black } from "../../../styles/helpers"
const TextareaField = ({
  value,
  handler,
  errors,
  size,
  position,
  title,
  type,
  nameId,
  required,
  rows,
}) => {
  return (
    <TextareaFieldStyled size={size} position={position}>
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
        <textarea
          name={nameId}
          type={type}
          value={value}
          id={nameId}
          onChange={handler}
          aria-required={required}
          required={required}
          rows={rows ? rows : "5"}
        />
      </label>
    </TextareaFieldStyled>
  )
}

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
  }
`

export default TextareaField
