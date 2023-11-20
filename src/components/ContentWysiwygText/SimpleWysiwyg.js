import React from "react"
import styled from "styled-components"
import { H1Black, medWrapper } from "../../styles/helpers"
import BaseWysiwyg from "./BaseWysiwyg/BaseWysiwyg"

const SimpleWysiwyg = ({ data }) => {
  return (
    <StyledSection>
      <div className="wrapper">
        <div className="title">
          <h1>{data.title}</h1>
        </div>
        <BaseWysiwyg data={data.wysiwyg} />
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  margin-top: 10rem;

  .wrapper {
    ${medWrapper};
  }

  .title {
    width: 100%;

    h1 {
      ${H1Black};
    }
  }

  .wysiwyg {
    width: 100%;
  }
`

export default SimpleWysiwyg
