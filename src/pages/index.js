import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Services from "../components/Home/services"
import Testimonial from "../components/Home/testimonial"
import Hero from "../components/Home/hero"
import WhyUS from "../components/Home/whyUs"
import Serve from "../components/Home/serve"
import Cta from "../components/Home/cta"

/**
 *
 * To Do
 * @ Review overall spacing.
 */

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="mx-5 md:mx-auto my-10">
      <Hero />
      <WhyUS />
      <Services />
      <Serve />
      <Testimonial />
      <Cta />
    </div>
  </Layout>
)

export default IndexPage
