import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import styled from "styled-components"
import {
  BtnPrimaryGreen,
  H1Black,
  H4Black,
  medWrapper,
} from "../styles/helpers"
import { Link } from "gatsby"

const NotFoundPage = props => {
  return (
    <Layout>
      <Seo
        title="Modus 404: Page Not Found"
        description="ou just hit a route that doesn&#39;t exist."
        metaImg={null}
        location={props.location.pathname}
      />
      <StyledNotFound>
        <div className="wrapper">
          <div className="not-title">
            <h1>404: Not Found</h1>
          </div>
          <div className="not-content">
            <p>You just hit a route that doesn&#39;t exist.</p>
            <p>
              You can always go <Link to="/">Home</Link> and try a different
              page
            </p>
          </div>
        </div>
      </StyledNotFound>
    </Layout>
  )
}

const StyledNotFound = styled.div`
  margin-top: 15rem;
  margin-bottom: 15rem;
  .wrapper {
    ${medWrapper};
  }

  .not-title {
    width: 100%;

    h1 {
      ${H1Black};
      text-align: center;
    }
  }

  .not-content {
    width: 100%;

    p {
      ${H4Black};
      margin: 0;
      margin-bottom: 1rem;
      text-align: center;

      a {
        ${BtnPrimaryGreen};
      }
    }
  }
`

export default NotFoundPage
