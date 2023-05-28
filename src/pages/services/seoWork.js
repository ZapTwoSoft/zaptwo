import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import FormSection from "../../components/About/formSection"
import {CursorClickIcon, GlobeAltIcon, TrendingUpIcon} from "@heroicons/react/outline";
import ProjectTwo from "../../images/seo.jpg";
import ServicesComponent from "../../components/Services";

const mockData = {
  title: "Search Engine Optimization",
  subtitle: "ZapTwo is a full-service SEO company that specializes in helping businesses improve their search engine rankings. We have a team of experienced SEO experts who are experts in a variety of SEO techniques, including keyword research, on-page optimization, and off-page optimization.",
  paragraphOne: "We understand that every business is different, and that's why we take the time to get to know your business and your needs before we start working on your SEO. We work with you to create an SEO strategy that is tailored to your specific business goals.",
  features: [
    {
      name: "Keyword research",
      description:
          "We will help you identify the right keywords for your business and target those keywords in your website content and other marketing materials",
      icon: GlobeAltIcon,
    },
    {
      name: "On/Off-page optimization",
      description:
          "We will make sure that your website is optimized for search engines by improving your website's title tags, meta descriptions, and other on-page elements",
      icon: CursorClickIcon,
    },
    {
      name: "SEO audit",
      description:
          "We will conduct an audit of your website to identify any potential SEO issues.",
      icon: TrendingUpIcon,
    },   {
      name: "SEO reporting",
      description:
          " We will provide you with regular reports on your website's SEO performance so that you can track your progress and make necessary adjustments to your SEO strategy.",
      icon: TrendingUpIcon,
    },
  ],
  typeImage: ProjectTwo,
  paragraphTwo: "We are committed to providing our clients with the highest quality SEO services. We are confident that we can help you improve your search engine rankings and drive more traffic to your website.\n" +
      "Contact us today to learn more about our SEO services.\n" +
      "Here are some of the benefits of working with ZapTwo for your SEO needs:\n",
  points: ["We have a team of experienced SEO experts who are experts in various SEO techniques.",
  "We take the time to get to know your business and your needs before we start working on your SEO.",
  "We work with you to create an SEO strategy that is tailored to your specific business goals.",
  "We offer a variety of SEO services to meet your specific needs.",
  "We are committed to providing our clients with the highest quality SEO services."],
  paragraphThree: "If you are looking for an SEO company that can help you improve your search engine rankings and drive more traffic to your website, then contact ZapTwo today.",
}

const seoWork = () => (
  <Layout>
    <Seo title="Search Engine Optimazation" />
    <ServicesComponent mockData={mockData} />
    <FormSection />
  </Layout>
)

export default seoWork
