import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <h1>Hello World</h1>
      </div>
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
