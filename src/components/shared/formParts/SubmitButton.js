import React from "react"
import styled from "styled-components"
import { B1Black, BtnPrimaryGreen } from "../../../styles/helpers"

const SubmitButton = () => {
  return (
    <SubmitButtonStyled>
      <p className="required-note">
        Required fields are marked with <span>&#42;</span>
      </p>
      <button type="submit">Submit</button>
    </SubmitButtonStyled>
  )
}

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

  button {
    ${BtnPrimaryGreen};
    cursor: pointer;
  }
`

export default SubmitButton
