import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout/Layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    ONE
    <Link to="/aboutUs/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
