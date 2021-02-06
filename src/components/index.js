import React from "react"
import { Link } from "gatsby"

import Layout from "./layout/layout";
import SEO from "./seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <Link to="/page-2/">Go to page</Link> <br />
  </Layout>
)

export default IndexPage
