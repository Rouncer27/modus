import React from "react"

import SideBySide from "../../components/ContentBlocks/SideBySide"
import ImageByContent from "../../components/ContentBlocks/ImageByContent"
import BoxImageLinks from "../../components/ContentBlocks/BoxImageLinks"
import BoxImageLinksContent from "../../components/ContentBlocks/BoxImageLinksContent"
import ContentWithMiddleImage from "../../components/ContentBlocks/ContentWithMiddleImage"
import ColouredBlockContent from "../../components/ContentBlocks/ColouredBlockContent"
import ColouredBlockContentLink from "../../components/ContentBlocks/ColouredBlockContentLink"
import ListOfLogos from "../../components/ContentBlocks/ListOfLogos"
import FullWidthContent from "../../components/ContentBlocks/FullWidthContent"
import ContentSimple from "../../components/ContentBlocks/ContentSimple"
import BoxLinks from "../../components/ContentBlocks/BoxLinks"

const ContentBlocksRenderer = ({ contentBlock }) => {
  // console.log("ContentBlocksRenderer: ", contentBlock)

  const contentBlockCompnent =
    contentBlock?.length > 0 ? (
      <>
        {contentBlock.map((block, index) => {
          switch (block.fieldGroupName) {
            case "Page_Pagecomponents_PageComponentsBlocks_ContentBlocks_ContentBlocksSections_SideBySide":
              return <SideBySide key={index} data={block} />
            case "Page_Pagecomponents_PageComponentsBlocks_ContentBlocks_ContentBlocksSections_ImageByContent":
              return <ImageByContent key={index} data={block} />
            case "Page_Pagecomponents_PageComponentsBlocks_ContentBlocks_ContentBlocksSections_BoxImageLinks":
              return <BoxImageLinks key={index} data={block} />
            case "Page_Pagecomponents_PageComponentsBlocks_ContentBlocks_ContentBlocksSections_BoxLinks":
              return <BoxLinks key={index} data={block} />
            case "Page_Pagecomponents_PageComponentsBlocks_ContentBlocks_ContentBlocksSections_BoxImageLinksContent":
              return <BoxImageLinksContent key={index} data={block} />
            case "Page_Pagecomponents_PageComponentsBlocks_ContentBlocks_ContentBlocksSections_ContentWithMiddleImage":
              return <ContentWithMiddleImage key={index} data={block} />
            case "Page_Pagecomponents_PageComponentsBlocks_ContentBlocks_ContentBlocksSections_ColouredBlockContent":
              return <ColouredBlockContent key={index} data={block} />
            case "Page_Pagecomponents_PageComponentsBlocks_ContentBlocks_ContentBlocksSections_ColouredBlockContentLink":
              return <ColouredBlockContentLink key={index} data={block} />
            case "Page_Pagecomponents_PageComponentsBlocks_ContentBlocks_ContentBlocksSections_ListOfLogos":
              return <ListOfLogos key={index} data={block} />
            case "Page_Pagecomponents_PageComponentsBlocks_ContentBlocks_ContentBlocksSections_FullWidthContent":
              return <FullWidthContent key={index} data={block} />
            case "Page_Pagecomponents_PageComponentsBlocks_ContentBlocks_ContentBlocksSections_ContentSimple":
              return <ContentSimple key={index} data={block} />
            default:
              return <p>Cannot find this component {block.fieldGroupName}</p>
          }
        })}
      </>
    ) : (
      <p>This Content Blocks has no content</p>
    )

  return contentBlockCompnent
}

export default ContentBlocksRenderer
