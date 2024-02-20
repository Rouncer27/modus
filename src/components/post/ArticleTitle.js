import React from "react"
import styled from "styled-components"
import { B3Black, H1Black, H3Black } from "../../styles/helpers"

const ArticleTitle = ({ title, subTitle, date }) => {
  let formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <StyledTitle>
      <h1>{title}</h1>
      <p className="sub-title">{subTitle}</p>
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

  .sub-title {
    ${H3Black};
    margin-bottom: 0rem;
  }

  p {
    ${B3Black};
    text-transform: uppercase;
  }
`

export default ArticleTitle
