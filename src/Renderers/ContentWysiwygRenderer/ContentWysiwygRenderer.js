import React from "react"

import SimpleWysiwyg from "../../components/ContentWysiwyg/SimpleWysiwyg"

const ContentWysiwygRenderer = ({ contentWysiwyg }) => {
  //   console.log("contentWysiwyg", contentWysiwyg)
  const contentWysiwygCompnent =
    contentWysiwyg?.length > 0 ? (
      <>
        {contentWysiwyg.map((block, index) => {
          switch (block.fieldGroupName) {
            case "Page_Pagecomponents_PageComponentsBlocks_ContentWysiwygs_ContentWysiwygsSections_SimpleWysiwyg":
              return <SimpleWysiwyg key={index} data={block} />
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
