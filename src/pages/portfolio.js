import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Works/hero"
import Works from "../components/Works/works"
import ContactUsCTA from "../components/About/contactCTA"

const portfolio = () => (
  <Layout>
    <Seo title="Our Works" />
    <Hero />
    <Works />
    <ContactUsCTA />
  </Layout>
)

export default portfolio
