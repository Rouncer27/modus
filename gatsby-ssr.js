const React = require("react") // 🟣 import React since JSX won't work in Node

exports.onRenderBody = ({
  setHtmlAttributes,
  setHeadComponents,
  setPostBodyComponents,
}) => {
  // keep your existing lang attribute
  setHtmlAttributes({ lang: `en` })

  setHeadComponents([
    <script
      key="salesforce-c360a"
      type="text/javascript"
      src="https://cdn.c360a.salesforce.com/beacon/c360a/af68d388-4238-453b-94fb-a53732eeee10/scripts/c360a.min.js?wtcp_id=1NDOL0000000BRh4AM"
    />,
  ])
}
