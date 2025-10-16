const React = require("react") // 🟣 import React since JSX won't work in Node

exports.onRenderBody = ({
  setHtmlAttributes,
  setHeadComponents,
  setPreBodyComponents,
  setPostBodyComponents,
}) => {
  // keep your existing lang attribute
  setHtmlAttributes({ lang: `en` })

  // ✅ 2️⃣ Add scripts that belong in the <head>
  setHeadComponents([
    // 🟣 Salesforce Marketing Cloud tracking script
    <script
      key="salesforce-c360a"
      type="text/javascript"
      src="https://cdn.c360a.salesforce.com/beacon/c360a/af68d388-4238-453b-94fb-a53732eeee10/scripts/c360a.min.js?wtcp_id=1NDOL0000000BRh4AM"
    />,

    // 🟣 Google Tag Manager (head)
    <script
      key="gtm-head"
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-KZNWKCVJ');`,
      }}
    />,
  ])

  // ✅ 3️⃣ Add GTM <noscript> immediately after <body>
  setPreBodyComponents([
    <noscript
      key="gtm-body-noscript"
      dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KZNWKCVJ"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
      }}
    />,
  ])
}
