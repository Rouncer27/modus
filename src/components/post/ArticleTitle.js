import React from "react"
import styled from "styled-components"
import { H1Black } from "../../styles/helpers"

const ArticleTitle = ({ title }) => {
  return (
    <StyledTitle>
      <h1>{title}</h1>
    </StyledTitle>
  )
}

const StyledTitle = styled.div`
  width: 100%;

  h1 {
    ${H1Black};
    text-transform: uppercase;
  }
`

export default ArticleTitle
