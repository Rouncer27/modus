const React = require("react") // 🟣 import React since JSX won't work in Node

exports.onRenderBody = ({
  setHtmlAttributes,
  setHeadComponents,
  setPostBodyComponents,
}) => {
  // keep your existing lang attribute
  setHtmlAttributes({ lang: `en` })

  // tracking script in <head>
  setHeadComponents([
    React.createElement("script", {
      key: "groupcreative365-script",
      type: "text/javascript",
      src: "https://www.groupcreative365.com/js/806860.js",
    }),
  ])

  // noscript fallback in <body>
  setPostBodyComponents([
    React.createElement(
      "noscript",
      { key: "groupcreative365-noscript" },
      React.createElement("img", {
        alt: "",
        src: "https://www.groupcreative365.com/806860.png",
        style: { display: "none" },
      })
    ),
  ])
}
