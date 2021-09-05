import React from 'react' 
import { graphql } from 'gatsby'
import Layout from '../../components/Layout/index'
import RichText from '../../components/RichText/index'
import Seo from '../../components/SEO/index'
import { BlogContent } from '../BlogPost/style'


const BlogPost = (props) => {
    console.log("blog post props", props)
    return (
        <Layout>
            <Seo 
                title={props.data.contentfulBlogPost.title} 
                description={props.data.contentfulBlogPost.description}
                />
            <BlogContent>
                <RichText raw={props.data.contentfulBlogPost.pageContent.raw}/>
            </BlogContent>
        </Layout>
    )
}

export const query = graphql`
    query BlogPostQuery($postId: String) {
    contentfulBlogPost(contentful_id: {eq: $postId}) {
        publishedDate(formatString: "MMM DD YYYY")
            pageContent {
                raw
            }
            description
            title
            contentful_id
            slug
        }
    }
`


export default BlogPost