import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import BlockRenderer from "../Renderers/BlockRenderer/BlockRenderer"

const page = props => {
  const pageComponentsBlocks =
    props?.data?.pageComponents?.pageComponents?.pageComponentsBlocks
  return (
    <Layout>
      <BlockRenderer blocks={pageComponentsBlocks} />
    </Layout>
  )
}

export const pageTempQuery = graphql`
  query pageTempPage($id: String!) {
    pageComponents: wpPage(id: { eq: $id }) {
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
              ##
              ##
              ## HeroOne
              ##
              ##

              ... on WpPage_Pagecomponents_PageComponentsBlocks_HeroBlocks_HerosSections_HeroOne {
                fieldGroupName
                heroContent {
                  content
                  fieldGroupName
                  title
                }
                heroImage {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(width: 3000)
                    }
                  }
                }
              }

              ##
              ##
              ## HeroTwo
              ##
              ##

              ... on WpPage_Pagecomponents_PageComponentsBlocks_HeroBlocks_HerosSections_HeroTwo {
                fieldGroupName
                heroImage {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(width: 3000)
                    }
                  }
                }
              }

              ##
              ##
              ## HeroThree
              ##
              ##

              ... on WpPage_Pagecomponents_PageComponentsBlocks_HeroBlocks_HerosSections_HeroThree {
                fieldGroupName
                heroTitle
                heroImage {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(width: 3000)
                    }
                  }
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
              ##
              ##
              ## SideBySide
              ##
              ##

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

              ##
              ##
              ## ImageByContent
              ##
              ##

              ... on WpPage_Pagecomponents_PageComponentsBlocks_ContentBlocks_ContentBlocksSections_ImageByContent {
                fieldGroupName
                leftContent {
                  fieldGroupName
                  image {
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData(width: 2000)
                      }
                    }
                  }
                }
                rightContent {
                  content
                  iconLogo {
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData(width: 2000)
                      }
                    }
                  }
                  fieldGroupName
                }
              }

              ##
              ##
              ## FullWidthContent
              ##
              ##

              ... on WpPage_Pagecomponents_PageComponentsBlocks_ContentBlocks_ContentBlocksSections_FullWidthContent {
                fieldGroupName
                openingTopPaddingRequired
                title
                content
                backgroundColor
                buttonText
                pageLink {
                  ... on WpPage {
                    id
                    slug
                    uri
                  }
                  ... on WpPost {
                    id
                    slug
                    uri
                  }
                }
                image {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(width: 2000)
                    }
                  }
                }
              }

              ##
              ##
              ## ListOfLogos
              ##
              ##

              ... on WpPage_Pagecomponents_PageComponentsBlocks_ContentBlocks_ContentBlocksSections_ListOfLogos {
                fieldGroupName
                logos {
                  logo {
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData(width: 2000)
                      }
                    }
                  }
                }
              }

              ##
              ##
              ## BoxImageLinks
              ##
              ##

              ... on WpPage_Pagecomponents_PageComponentsBlocks_ContentBlocks_ContentBlocksSections_BoxImageLinks {
                fieldGroupName
                sectionTitle
                boxLinks {
                  fieldGroupName
                  pageLink {
                    ... on WpPage {
                      id
                      slug
                      uri
                    }
                  }
                  title
                  image {
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData(width: 2000)
                      }
                    }
                  }
                }
              }

              ##
              ##
              ## BoxImageLinksContent
              ##
              ##

              ... on WpPage_Pagecomponents_PageComponentsBlocks_ContentBlocks_ContentBlocksSections_BoxImageLinksContent {
                fieldGroupName
                boxLinks {
                  fieldGroupName
                  pageLink {
                    ... on WpPage {
                      id
                      slug
                      uri
                    }
                  }
                  title
                  content
                  image {
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData(width: 2000)
                      }
                    }
                  }
                }
              }

              ##
              ##
              ## ContentWithMiddleImage
              ##
              ##

              ... on WpPage_Pagecomponents_PageComponentsBlocks_ContentBlocks_ContentBlocksSections_ContentWithMiddleImage {
                fieldGroupName
                centerImage {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(width: 2000)
                    }
                  }
                }
                leftContent {
                  boxColour
                  content
                  fieldGroupName
                }
                rightContent {
                  boldContent
                  boxColour
                  content
                  button {
                    buttonRequired
                    buttonText
                    fieldGroupName
                    pageLink {
                      ... on WpPage {
                        id
                        slug
                        uri
                      }
                      ... on WpPost {
                        id
                        slug
                        uri
                      }
                    }
                  }
                }
              }

              ##
              ##
              ## ColouredBlockContent
              ##
              ##

              ... on WpPage_Pagecomponents_PageComponentsBlocks_ContentBlocks_ContentBlocksSections_ColouredBlockContent {
                backgroundColour
                boldTitle
                content
                fieldGroupName
              }

              ##
              ##
              ## ColouredBlockContentLink
              ##
              ##

              ... on WpPage_Pagecomponents_PageComponentsBlocks_ContentBlocks_ContentBlocksSections_ColouredBlockContentLink {
                backgroundColour
                boldTitle
                content
                pageLink {
                  ... on WpPage {
                    id
                    slug
                    uri
                  }
                  ... on WpPost {
                    id
                    slug
                    uri
                  }
                }
                fieldGroupName
              }
            }
          }

          ##
          ##
          # NOTE: This is the query for all the Slider Blokcs types. #
          ##
          ##

          ... on WpPage_Pagecomponents_PageComponentsBlocks_SliderBlocks {
            fieldGroupName
            sliderBlocksSections {
              ##
              ##
              ## SliderOne
              ##
              ##
              ... on WpPage_Pagecomponents_PageComponentsBlocks_SliderBlocks_SliderBlocksSections_SliderOne {
                fieldGroupName
                slides {
                  topTitle
                  smallContent
                  bigTitle
                  fieldGroupName
                  image {
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData(width: 2500)
                      }
                    }
                  }
                }
              }

              ##
              ##
              ## SliderOne
              ##
              ##
              ... on WpPage_Pagecomponents_PageComponentsBlocks_SliderBlocks_SliderBlocksSections_SliderTwo {
                fieldGroupName
                slides {
                  fieldGroupName
                  slide {
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData(width: 2500)
                      }
                    }
                  }
                }
              }

              ##
              ##
              ## Slider section END
              ##
            }
          }

          ##
          ##
          # NOTE: This is the query for all the Display Content Blokcs types. #
          ##
          ##

          ... on WpPage_Pagecomponents_PageComponentsBlocks_DisplayContentBlocks {
            fieldGroupName
            displayContentBlocksSections {
              ##
              ##
              ## DisplayNewsPosts
              ##
              ##
              ... on WpPage_Pagecomponents_PageComponentsBlocks_DisplayContentBlocks_DisplayContentBlocksSections_DisplayNewsPosts {
                displayNewsPosts
                fieldGroupName
                title
              }

              ##
              ##
              ## DisplayTestimonials
              ##
              ##
              ... on WpPage_Pagecomponents_PageComponentsBlocks_DisplayContentBlocks_DisplayContentBlocksSections_DisplayTestimonials {
                fieldGroupName
                display
                sectionTitle
              }

              ##
              ##
              ##  END Display Content Blokcs types. END
              ##
              ##
            }
          }

          ##
          ##
          # NOTE: This is the query for all the Content WYSIWYG & Text types. #
          ##
          ##

          ... on WpPage_Pagecomponents_PageComponentsBlocks_ContentWysiwygs {
            fieldGroupName
            contentWysiwygsSections {
              ##
              ##
              ## SimpleWysiwyg
              ##
              ##
              ... on WpPage_Pagecomponents_PageComponentsBlocks_ContentWysiwygs_ContentWysiwygsSections_SimpleWysiwyg {
                fieldGroupName
                title
                wysiwyg
              }
              ##
              ##
              ## ContentTwoColumns
              ##
              ##

              ... on WpPage_Pagecomponents_PageComponentsBlocks_ContentWysiwygs_ContentWysiwygsSections_ContentTwoColumns {
                fieldGroupName
                mainTitle
                leftSubTitle
                leftBlueContent
                rightContent
              }
            }
          }
        }
      }
    }
  }
`

export default page
