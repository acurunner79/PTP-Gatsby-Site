import React from 'react' 
import Layout from '../../components/Layout/index'
import { Link } from 'gatsby'
import { Content, Post, Pagination } from './style'



const PaginatedBlogPage = ({pageContext}) => {
    console.log(pageContext.posts)
    return (
        <Layout>
            <Content>
                <h1 id="blog-header">Welcome to PTP's Blog</h1>
                {pageContext.posts.map((post) => (
                    <Post key={post.contentful_id}>
                        <div>
                            <Link to={`/${pageContext.blogSlug}/${post.slug}`}>{post.title}</Link>
                        </div>
                        <div>{post.description}</div>
                        <div>
                            <small>
                                {post.publishedDate}
                            </small>
                        </div>
                    </Post>
                ))}
            </Content>
            <Pagination>
                {Array.from({length: pageContext.totalPages}).map((n, i) => {
                    return (
                        <Link to={`/${pageContext.blogSlug}/${i === 0 ? '' : i + 1}`}>
                            {i + 1}
                        </Link>
                    )
                })}
            </Pagination>
        </Layout>
    )
}


export default PaginatedBlogPage