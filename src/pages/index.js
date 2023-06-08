import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Services from "../components/Home/services"
import Testimonial from "../components/Home/testimonial"
import Hero from "../components/Home/hero"
import WhyUS from "../components/Home/whyUs"
import Serve from "../components/Home/serve"
import Blog from "../components/Home/blogs"
import ClientsComponent from "../components/Home/clients"
import Technologies from "../components/Home/technologies"
import ContactUsCTA from "../components/About/contactCTA"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="mt-10">
      <Hero />
      <WhyUS />
      <ClientsComponent />
      <Services />
      <Technologies />
      <Serve />
      <Testimonial />
      <ContactUsCTA />
      <Blog />
    </div>
  </Layout>
)

export default IndexPage
