/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({
  setHtmlAttributes,
  setHeadComponents,
  setPostBodyComponents,
}) => {
  // keep your existing lang attribute ✅
  setHtmlAttributes({ lang: `en` })

  // 🔵 Added tracking script to <head>
  setHeadComponents([
    <script
      key="groupcreative365-script"
      type="text/javascript"
      src="https://www.groupcreative365.com/js/806860.js"
    />,
  ])

  // 🔵 Added <noscript> fallback to <body>
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
