import React from "react"
import styled from "styled-components"
import { B3Black, H1Black } from "../../styles/helpers"

const ArticleTitle = ({ title, date }) => {
  let formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <StyledTitle>
      <h1>{title}</h1>
      <p>{formattedDate}</p>
    </StyledTitle>
  )
}

const StyledTitle = styled.div`
  width: 100%;

  h1 {
    ${H1Black};
    margin-bottom: 0;
    text-transform: uppercase;
  }

  p {
    ${B3Black};
    text-transform: uppercase;
  }
`

export default ArticleTitle
