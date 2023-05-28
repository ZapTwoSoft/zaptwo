import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import FormSection from "../../components/About/formSection"
import { CursorClickIcon, GlobeAltIcon } from "@heroicons/react/outline"
import ProjectTwo from "../../images/souvik-banerjee-OMhubJCrtu0-unsplash.jpg"
import ServicesComponent from "../../components/Services"

const mockData = {
  title: "Domain and Hosting",
  subtitle:
    "ZapTwo is a full-service domain and hosting company that specializes in helping businesses of all sizes get online. We offer a variety of domain and hosting options to meet your specific needs, and we are committed to providing our customers with the highest quality service.",
  paragraphOne: "one",
  features: [
    {
      name: "Domain Names",
      description:
        "A domain name is your website's address on the internet. It is what people type into their browser to visit your site. We offer a variety of domain name options, including .com, .net, .org, and .info. We also offer domain name registration and renewal services.",
      icon: GlobeAltIcon,
      to: "/services/webdev",
    },
    {
      name: "Web Hosting",
      description:
        "Web hosting is the service that stores your website's files on a server and makes them accessible to visitors. We offer a variety of web hosting options, including shared hosting, VPS hosting, and dedicated hosting. We also offer web hosting plans with features such as unlimited storage, unlimited bandwidth, and free SSL certificates.",
      icon: CursorClickIcon,
      to: "/services/appdev",
    },
  ],
  typeImage: ProjectTwo,
  paragraphTwo:
    "Why Choose ZapTwo for Domain and Hosting?\n" +
    "There are many reasons to choose ZapTwo for domain and hosting. Here are just a few:",
  points: [
    "We offer a wide range of domain and hosting options to meet your specific needs.",
    "We are committed to providing our customers with the highest quality service.",
    "We offer competitive prices on domain and hosting.",
    "We offer a variety of features and benefits, such as unlimited storage, unlimited bandwidth, and free SSL certificates.",
  ],
  paragraphThree: "para three",
}

const DomainHosting = () => (
  <Layout>
    <Seo title="Domain and Hosting" />
    <ServicesComponent mockData={mockData} />
    <FormSection />
  </Layout>
)

export default DomainHosting
