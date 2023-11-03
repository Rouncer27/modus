import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

const IndexPage = props => {
  const pageComponentsBlocks =
    props?.data?.pageComponents?.pageComponents?.pageComponentsBlocks

  console.log("pageComponentsBlocks: ", pageComponentsBlocks)

  return (
    <Layout>
      <main>Home PAge</main>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export const homeQuery = graphql`
  {
    pageComponents: wpPage(slug: { eq: "home" }) {
      pageComponents {
        fieldGroupName
        pageComponentsBlocks {
          ##
          ##
          # NOTE: This is the query for all the Hero Blocks types. #
          ##
          ##
          ... on WpPage_Pagecomponents_PageComponentsBlocks_HeroBlocks {
            fieldGroupName
            herosSections {
              ... on WpPage_Pagecomponents_PageComponentsBlocks_HeroBlocks_HerosSections_HeroOne {
                fieldGroupName
                heroContent {
                  content
                  fieldGroupName
                  title
                }
              }
            }
          }

          ##
          ##
          # NOTE: This is the query for all the Content Blokcs types. #
          ##
          ##

          ... on WpPage_Pagecomponents_PageComponentsBlocks_ContentBlocks {
            fieldGroupName
            contentBlocksSections {
              ... on WpPage_Pagecomponents_PageComponentsBlocks_ContentBlocks_ContentBlocksSections_SideBySide {
                fieldGroupName
                leftSide {
                  leftSideColour
                  leftSideContent
                }
                rightSide {
                  rightSideColour
                  rightSideContent
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
