import React from "react"

import SideBySide from "../../components/ContentBlocks/SideBySide"
import ImageByContent from "../../components/ContentBlocks/ImageByContent"
import BoxImageLinks from "../../components/ContentBlocks/BoxImageLinks"
import ContentWithMiddleImage from "../../components/ContentBlocks/ContentWithMiddleImage"
import ColouredBlockContent from "../../components/ContentBlocks/ColouredBlockContent"

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
            case "Page_Pagecomponents_PageComponentsBlocks_ContentBlocks_ContentBlocksSections_ContentWithMiddleImage":
              return <ContentWithMiddleImage key={index} data={block} />
            case "Page_Pagecomponents_PageComponentsBlocks_ContentBlocks_ContentBlocksSections_ColouredBlockContent":
              return <ColouredBlockContent key={index} data={block} />
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