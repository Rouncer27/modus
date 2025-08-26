import React from "react"
exports.onRenderBody = ({
  setHtmlAttributes,
  setHeadComponents,
  setPostBodyComponents,
}) => {
  setHtmlAttributes({ lang: `en` })

  setHeadComponents([
    <script
      key="groupcreative365-script"
      type="text/javascript"
      src="https://www.groupcreative365.com/js/806860.js"
    />,
  ])
  setPostBodyComponents([
    <noscript key="groupcreative365-noscript">
      <img
        alt=""
        src="https://www.groupcreative365.com/806860.png"
        style={{ display: "none" }}
      />
    </noscript>,
  ])
}
