import React from "react"
import Helmet from "react-helmet"

export default React.memo(
  ({
    author,
    canonicalUrl,
    datePublished,
    defaultTitle,
    description,
    image,
    logo,
    isBlogPost,
    organization,
    title,
    url,
  }) => {
    const baseSchema = [
      {
        "@context": "http://schema.org",
        "@type": "ProfessionalService",
        "@id": "https://modus.ca/",
        name: "MODUS Structures",
        alternateName: "MODUS Structures",
        logo: logo,
        telephone: "403-274-2422",
        email: "sales@modus.ca",
        sameAs: ["https://www.linkedin.com/company/modusstructures"],
        url: "https://modus.ca/",
        image: image,
        priceRange: "$$",
        description: description,
        address: {
          "@type": "PostalAddress",
          streetAddress: "34 McCool Cr",
          addressLocality: "Crossfield",
          addressRegion: "Alberta",
          postalCode: "T0M 0S0",
          addressCountry: "CA",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday"],
            opens: "7:30am",
            closes: "4pm",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Tuesday"],
            opens: "7:30am",
            closes: "4pm",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Wednesday"],
            opens: "7:30am",
            closes: "4pm",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Thursday"],
            opens: "7:30am",
            closes: "4pm",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Friday"],
            opens: "7:30am",
            closes: "4pm",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday"],
            opens: "",
            closes: "",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Sunday"],
            opens: "",
            closes: "",
          },
        ],
      },
    ]

    const schema = isBlogPost
      ? [
          ...baseSchema,
          {
            "@context": "http://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                item: {
                  "@id": url,
                  name: title,
                  image,
                },
              },
            ],
          },
          {
            "@context": "http://schema.org",
            "@type": "BlogPosting",
            url,
            name: title,
            alternateName: defaultTitle,
            headline: title,
            image: {
              "@type": "ImageObject",
              url: image,
            },
            description,
            author: {
              "@type": "Person",
              name: author.name,
            },
            publisher: {
              "@type": "Organization",
              url: organization.url,
              logo: organization.logo,
              name: organization.name,
            },
            mainEntityOfPage: {
              "@type": "WebSite",
              "@id": canonicalUrl,
            },
            datePublished,
          },
        ]
      : baseSchema

    return (
      <Helmet>
        {/* Schema.org tags */}
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
    )
  }
)
