import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import {CursorClickIcon, GlobeAltIcon, TrendingUpIcon,} from "@heroicons/react/outline"
import ProjectTwo from "../../images/appdev.jpg"
import ServicesComponent from "../../components/Services";
import ContactUsCTA from "../../components/About/contactCTA";

const mockData = {
  title: "App Development",
  subtitle:
    "ZapTwo is a full-service app development company specializing in creating custom mobile apps for businesses of all sizes. We have a team of experienced developers who are experts in various mobile app development technologies, including iOS, Android, and React Native.",
  paragraphOne:
    "We understand that every business is different, and that's why we take the time to get to know your business and your needs before we start developing your app. We work with you to create an app that is both visually appealing and functional, and that meets your specific business goals.\n" +
    "We also offer a variety of app development services, including:",
  features: [
    {
      name: "Mobile Application Design",
      description:
        "_",
      icon: GlobeAltIcon,
    },
    {
      name: "Mobile Application Development",
      description:"_",
      icon: CursorClickIcon,
    },
    {
      name: "Application Deployment",
      description:"_",
      icon: TrendingUpIcon,
    },
    {
      name: "Application Marketing",
      description:"_",
      icon: TrendingUpIcon,
    },
  ],
  typeImage: ProjectTwo,
  paragraphTwo:
    "We are committed to providing our clients with the highest quality app development services. We are confident that we can create an app that will help you achieve your business goals.Contact us today to learn more about our app development services.Here are some of the benefits of working with ZapTwo for your app development needs:",
  points: [
    "We have a team of experienced developers who are experts in various mobile app development technologies.",
    "We take the time to get to know your business and your needs before we start developing your app.",
    "We work with you to create an app that is both visually appealing and functional.",
    "We offer a variety of app development services to meet your specific needs.",
    "We are committed to providing our clients with the highest quality app development services.",
  ],
  paragraphThree:
    "If you are looking for an app development company that can help you create an app that will help you achieve your business goals, then contact ZapTwo today.",
}

const AppDev = () => (
  <Layout>
    <Seo title="App Development" />
    <ServicesComponent mockData={mockData} />
    <ContactUsCTA />
  </Layout>
)

export default AppDev
