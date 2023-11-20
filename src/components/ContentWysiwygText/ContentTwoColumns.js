import React from "react"
import styled from "styled-components"

const ContentTwoColumns = ({ data }) => {
  console.log("ContentTwoColumns", data)
  return (
    <StyledSection>
      <div className="wrapper">
        <h1>ContentTwoColumns</h1>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section``

export default ContentTwoColumns
