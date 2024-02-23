import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import BlockRenderer from "../Renderers/BlockRenderer/BlockRenderer"

const IndexPage = props => {
  const seoInfo = props.data.seoInfo
  const pageComponentsBlocks =
    props?.data?.pageComponents?.pageComponents?.pageComponentsBlocks

  console.log(
    "seoInfo.seoFields.seoFieldsMetaContent",
    seoInfo.seoFields.seoFieldsMetaContent
  )

  return (
    <Layout>
      <Seo
        title={seoInfo.seoFields.seoFieldsMetaTitle}
        description={seoInfo.seoFields.seoFieldsMetaContent}
        metaImg={seoInfo.seoFields.seoFieldsMetaImage.mediaItemUrl}
        location={props.location.pathname}
      />
      <BlockRenderer blocks={pageComponentsBlocks} />
    </Layout>
  )
}

export const homeQuery = graphql`
  {
    seoInfo: wpPage(slug: { eq: "home" }) {
      seoFields {
        seoFieldsMetaTitle
        seoFieldsMetaContent
        seoFieldsMetaImage {
          mediaItemUrl
        }
      }
    }

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
              ## ContentSimple
              ##
              ##

              ... on WpPage_Pagecomponents_PageComponentsBlocks_ContentBlocks_ContentBlocksSections_ContentSimple {
                fieldGroupName
                mainTitle
                simpleContent
                contentStyle
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
              ## FullWidthImageByContent
              ##
              ##

              ... on WpPage_Pagecomponents_PageComponentsBlocks_ContentBlocks_ContentBlocksSections_FullWidthImageByContent {
                fieldGroupName
                openingTopPaddingRequired
                title
                contentBold
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

              ##
              ##
              ## ListOfLogos
              ##
              ##

              ... on WpPage_Pagecomponents_PageComponentsBlocks_ContentBlocks_ContentBlocksSections_ListOfLogos {
                fieldGroupName
                sectionTitle
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
              ## BoxLinks
              ##
              ##

              ... on WpPage_Pagecomponents_PageComponentsBlocks_ContentBlocks_ContentBlocksSections_BoxLinks {
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
              ## ClouredBlockContentCircleImage
              ##
              ##

              ... on WpPage_Pagecomponents_PageComponentsBlocks_ContentBlocks_ContentBlocksSections_ColouredBlockContentCircleImage {
                backgroundColour
                title
                content
                buttonText
                buttonType
                emailLink
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
                urlLink
                image {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(width: 2000)
                    }
                  }
                }
                fieldGroupName
              }

              ##
              ##
              ## ColouredContentTopImage
              ##
              ##

              ... on WpPage_Pagecomponents_PageComponentsBlocks_ContentBlocks_ContentBlocksSections_ColouredContentTopImage {
                backgroundColour
                content
                topImage {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(width: 2500)
                    }
                  }
                }
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

              ##
              ##
              ## FlexibleContentStaggeredImages
              ##
              ##

              ... on WpPage_Pagecomponents_PageComponentsBlocks_ContentBlocks_ContentBlocksSections_FlexibleContentStaggeredImages {
                mainTitle
                contentType
                listItems {
                  listItem
                }
                content
                wysiwygContent
                images {
                  image {
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData(width: 2500)
                      }
                    }
                  }
                }

                fieldGroupName
              }

              ##
              ##
              ## ThreeStaggeredImages
              ##
              ##

              ... on WpPage_Pagecomponents_PageComponentsBlocks_ContentBlocks_ContentBlocksSections_ThreeStaggeredImages {
                fieldGroupName
                imageOne {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(width: 2000)
                    }
                  }
                }
                imageTwo {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(width: 2000)
                    }
                  }
                }
                imageThree {
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
              ## END
              ##
              ##
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
              ## SliderTwo
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
              ## SliderThree
              ##
              ##
              ... on WpPage_Pagecomponents_PageComponentsBlocks_SliderBlocks_SliderBlocksSections_SliderThree {
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
              ## DisplayAllNewsPostsRows
              ##
              ##
              ... on WpPage_Pagecomponents_PageComponentsBlocks_DisplayContentBlocks_DisplayContentBlocksSections_DisplayAllNewsPostsRows {
                fieldGroupName
                displayNewsPosts
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
              ## displayTeamMembers
              ##
              ##
              ... on WpPage_Pagecomponents_PageComponentsBlocks_DisplayContentBlocks_DisplayContentBlocksSections_DisplayTeamMembers {
                fieldGroupName
                display
                teamTitle
              }

              ##
              ##
              ## DisplayContactForm
              ##
              ##
              ... on WpPage_Pagecomponents_PageComponentsBlocks_DisplayContentBlocks_DisplayContentBlocksSections_DisplayContactForm {
                fieldGroupName
                display
                contactFormId
              }

              ##
              ##
              ##  END Display Content Blokcs types. END
              ##
              ##
            }
          }
        }
      }
    }
  }
`

export default IndexPage
