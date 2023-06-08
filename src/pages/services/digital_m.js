import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import {
  CursorClickIcon,
  GlobeAltIcon,
  TrendingUpIcon,
} from "@heroicons/react/outline"
import ProjectTwo from "../../images/dMarketing.jpg"
import ServicesComponent from "../../components/Services"
import ContactUsCTA from "../../components/About/contactCTA"

const mockData = {
  title: "Digital Marketing",
  subtitle:
    "ZapTwo is a full-service digital marketing agency that specializes in helping businesses reach their target audiences online. We have a team of experienced digital marketers who are experts in a variety of digital marketing channels, including search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, and content marketing.",
  paragraphOne:
    "We understand that every business is different, and that's why we take the time to get to know your business and your needs before we start working on your digital marketing. We work with you to create a digital marketing strategy that is tailored to your specific business goals.\n" +
    "We also offer a variety of digital marketing services, including:\n",
  features: [
    {
      name: "Social media marketing",
      description:
        " We will help you create and manage social media campaigns so that you can connect with your target audiences online and build relationships with them.",
      icon: GlobeAltIcon,
      to: "/services/webdev",
    },
    {
      name: "Content marketing",
      description:
        "We will help you create and distribute valuable content so that you can attract and retain your target audiences online.",
      icon: CursorClickIcon,
      to: "/services/appdev",
    },
    {
      name: "Email marketing",
      description:
        "We will help you create and manage email marketing campaigns so that you can stay in touch with your customers and promote your products or services.",
      icon: TrendingUpIcon,
      to: "/services/seoWork",
    },
  ],
  typeImage: ProjectTwo,
  paragraphTwo:
    "We are committed to providing our clients with the highest quality digital marketing services. We are confident that we can help you reach your target audiences online and achieve your business goals.\n" +
    "Contact us today to learn more about our digital marketing services.\n" +
    "Here are some of the benefits of working with ZapTwo for your digital marketing needs.",
  points: [
    "We have a team of experienced digital marketers who are experts in a variety of digital marketing channels.",
    "We take the time to get to know your business and your needs before we start working on your digital marketing.",
    "We work with you to create a digital marketing strategy that is tailored to your specific business goals.",
    "We offer a variety of digital marketing services to meet your specific needs.",
    "We are committed to providing our clients with the highest quality digital marketing services.",
  ],
  paragraphThree:
    "If you are looking for a digital marketing agency that can help you reach your target audiences online and achieve your business goals, then contact ZapTwo today.",
}

const digitalMarketing = () => (
  <Layout>
    <Seo title="Digital Marketing" />
    <ServicesComponent mockData={mockData} />
    <ContactUsCTA />
  </Layout>
)

export default digitalMarketing
