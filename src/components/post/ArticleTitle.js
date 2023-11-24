import React from "react"
import styled from "styled-components"
import { H1Black, medWrapper } from "../../styles/helpers"

const ArticleTitle = ({ title }) => {
  return (
    <StyledTitle>
      <div className="wrapper">
        <div className="article-title">
          <h1>{title}</h1>
        </div>
      </div>
    </StyledTitle>
  )
}

const StyledTitle = styled.div`
  .wrapper {
    ${medWrapper};
  }
  .article-title {
    width: 100%;

    h1 {
      ${H1Black};
      text-transform: uppercase;
    }
  }
`

export default ArticleTitle
