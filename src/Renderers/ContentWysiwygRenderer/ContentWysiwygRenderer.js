import React from "react"

import SimpleWysiwyg from "../../components/ContentWysiwygText/SimpleWysiwyg"
import ContentTwoColumns from "../../components/ContentWysiwygText/ContentTwoColumns"
import ContentBoldTitles from "../../components/ContentWysiwygText/ContentBoldTitles"
import SimpleQuote from "../../components/ContentWysiwygText/SimpleQuote"
import Content2ColumnsLogo from "../../components/ContentWysiwygText/Content2ColumnsLogo"
import SimpleContentButton from "../../components/ContentWysiwygText/SimpleContentButton"

const ContentWysiwygRenderer = ({ contentWysiwyg }) => {
  //   console.log("contentWysiwyg", contentWysiwyg)
  const contentWysiwygCompnent =
    contentWysiwyg?.length > 0 ? (
      <>
        {contentWysiwyg.map((block, index) => {
          switch (block.fieldGroupName) {
            case "Page_Pagecomponents_PageComponentsBlocks_ContentWysiwygs_ContentWysiwygsSections_SimpleWysiwyg":
              return <SimpleWysiwyg key={index} data={block} />
            case "Page_Pagecomponents_PageComponentsBlocks_ContentWysiwygs_ContentWysiwygsSections_SimpleQuote":
              return <SimpleQuote key={index} data={block} />
            case "Page_Pagecomponents_PageComponentsBlocks_ContentWysiwygs_ContentWysiwygsSections_ContentTwoColumns":
              return <ContentTwoColumns key={index} data={block} />
            case "Page_Pagecomponents_PageComponentsBlocks_ContentWysiwygs_ContentWysiwygsSections_ContentBoldTitles":
              return <ContentBoldTitles key={index} data={block} />
            case "Page_Pagecomponents_PageComponentsBlocks_ContentWysiwygs_ContentWysiwygsSections_Content2ColumnsLogo":
              return <Content2ColumnsLogo key={index} data={block} />
            case "Page_Pagecomponents_PageComponentsBlocks_ContentWysiwygs_ContentWysiwygsSections_SimpleContentButton":
              return <SimpleContentButton key={index} data={block} />
            default:
              return <p>Cannot find this component {block.fieldGroupName}</p>
          }
        })}
      </>
    ) : (
      <p>This Content Wysiwyg has no content</p>
    )

  return contentWysiwygCompnent
}

export default ContentWysiwygRenderer
