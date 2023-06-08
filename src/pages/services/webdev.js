import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import ServicesComponent from "../../components/Services/index"
import {
  CursorClickIcon,
  GlobeAltIcon,
  TrendingUpIcon,
} from "@heroicons/react/outline"
import ProjectTwo from "../../images/webdev.jpg"
import ContactUsCTA from "../../components/About/contactCTA"

const mockData = {
  title: "Web Development",
  subtitle:
    "ZapTwo is a full-service web development company specializing in creating custom websites and web applications for businesses of all sizes. We have a team of experienced developers who are experts in various web technologies.",
  paragraphOne:
    "We understand that every business is different, and that's why we take the time to get to know your business and your needs before we start developing your website. We work with you to create a website that is both visually appealing and functional, and that meets your specific business goals.\n" +
    "We also offer a variety of web development services, including:\n",
  features: [
    {
      name: "Website design",
      description: "_",
      icon: GlobeAltIcon,
      to: "/services/webdev",
    },
    {
      name: "Website development",
      description: "_",
      icon: CursorClickIcon,
      to: "/services/appdev",
    },
    {
      name: "Website maintenance",
      description: "_",
      icon: TrendingUpIcon,
      to: "/services/seoWork",
    },
    {
      name: "Website security and performance",
      description: "_",
      icon: TrendingUpIcon,
      to: "/services/seoWork",
    },
  ],
  typeImage: ProjectTwo,
  paragraphTwo:
    "We are committed to providing our clients with the highest quality web development services. We are confident that we can create a website that will help you achieve your business goals.\n" +
    "Contact us today to learn more about our web development services.\n" +
    "Here are some of the benefits of working with ZapTwo for your web development needs:",
  points: [
    "We have a team of experienced developers who are experts in various web technologies.",
    "We take the time to get to know your business and your needs before we start developing your website.",
    "We work with you to create a website that is both visually appealing and functional.",
    "We offer a variety of web development services to meet your specific needs.",
    "We are committed to providing our clients with the highest quality web development services.",
  ],
  paragraphThree:
    "If you are looking for a web development company to help you create a website to help you achieve your business goals, contact ZapTwo today.",
}

const WebDev = () => (
  <Layout>
    <Seo title="Website Development" />
    <ServicesComponent mockData={mockData} />
    <ContactUsCTA />
  </Layout>
)

export default WebDev
