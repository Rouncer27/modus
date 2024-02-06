import React from "react"
import styled from "styled-components"
import { H3Black, standardWrapper } from "../../styles/helpers"

const SimpleQuote = ({ data }) => {
  console.log("SimpleQuote: ", data)
  return (
    <StyledSection>
      <div className="wrapper">
        <div
          className="quote"
          dangerouslySetInnerHTML={{ __html: data.quote }}
        />
        {data.author && (
          <div className="author">
            <p>{data.author}</p>
          </div>
        )}
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.div`
  padding: 5rem 0;

  .wrapper {
    ${standardWrapper};
    text-align: center;
  }

  .quote {
    width: 100%;

    p {
      ${H3Black};
      color: #333333;
      font-weight: normal;

      &:before {
        content: open-quote;
      }

      &:after {
        content: close-quote;
      }

      &:last-of-type {
        margin-bottom: 0%;
      }
    }
  }

  .author {
    width: 100%;

    p {
      ${H3Black};
      font-weight: normal;

      &:before {
        padding-right: 0.5rem;
        content: "—";
      }

      &:last-of-type {
        margin-bottom: 0%;
      }
    }
  }
`

export default SimpleQuote
