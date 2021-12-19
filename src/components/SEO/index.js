import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from 'gatsby'


const Seo = ({title, keywords, description }) => {

    const {site} = useStaticQuery(
        graphql`
           query {
               site{
                   siteMetadata{
                       title
                       description
                   }
               }
           }`
    )

    const metaTitle = title || site.siteMetadata?.title
    const metaDescription = description || site.siteMetadata?.description
    const metaImage = "https://res.cloudinary.com/acurunner79/image/upload/v1630468902/PathTradingPartner_LogoMarkOnly_dpkga2.ai"
    const metaKeywords = keywords || ['path trading partners','bob iaccino','mike arnold']
    return (
        
        <Helmet
        htmlAttributes={{
                lang: "en",
            }}
            title={title}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: metaTitle,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:image`,
                    content: metaImage,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata?.author || ``,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
            ].concat(
                metaKeywords && metaKeywords.length > 0 ? {
                    name: `keywords`,
                    content: metaKeywords.join(', '),
                } : []
            )}
        >
            <title>Path Trading Partners</title>
        </Helmet>
    );
}

export default Seo