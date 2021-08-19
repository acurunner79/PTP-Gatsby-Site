import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO/index"


const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404: Not found"/>
        <h1>404: Oops! Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Link to="/">Go home</Link>
    </Layout>
  )
}

export default NotFoundPage
