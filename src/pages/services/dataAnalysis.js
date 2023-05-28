import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import FormSection from "../../components/About/formSection"
import {CursorClickIcon, GlobeAltIcon, TrendingUpIcon} from "@heroicons/react/outline";
import ProjectTwo from "../../images/dsa.jpg";
import ServicesComponent from "../../components/Services";

const mockData = {
  title: "Data Analysis",
  subtitle: "ZapTwo is a full-service data analysis company that specializes in helping businesses make better decisions with their data. We have a team of experienced data analysts who are experts in a variety of data analysis techniques, including data mining, machine learning, and statistical analysis.",
  paragraphOne: "We understand that every business has different data needs, and that's why we take the time to get to know your business and your data before we start working with you. We work with you to understand your business goals and then develop a data analysis strategy that is tailored to your specific needs.\n" +
      "We also offer a variety of data analysis services, including:",
  features: [
    {
      name: "Data visualization",
      description:
          "We will help you create visualizations of your data that are easy to understand and communicate.",
      icon: GlobeAltIcon,
      to: "/services/webdev",
    },
    {
      name: "Machine learning ",
      description:
          "We will help you develop models that can predict future behavior based on your historical data.",
      icon: CursorClickIcon,
      to: "/services/appdev",
    },
    {
      name: "Data mining",
      description:
          " We will help you discover patterns and trends in your data that can help you make better decisions.",
      icon: TrendingUpIcon,
      to: "/services/seoWork",
    },
  ],
  typeImage: ProjectTwo,
  paragraphTwo: "We are committed to providing our clients with the highest quality data analysis services. We are confident that we can help you make better decisions with your data.\n" +
      "Contact us today to learn more about our data analysis services." +
      "Here are some of the benefits of working with ZapTwo for your data analysis needs:",
  points: ["We have a team of experienced data analysts who are experts in a variety of data analysis techniques." ,
  "We take the time to get to know your business and your data before we start working with you." ,
  "We work with you to understand your business goals and then develop a data analysis strategy that is tailored to your specific needs." ,
  "We offer a variety of data analysis services to meet your specific needs." +
  "We are committed to providing our clients with the highest quality data analysis services.",],
  paragraphThree: "We are confident that we can help you make better decisions with your data. Contact us today to learn more about our data analysis services.",
}

const DataAnalysis = () => (
  <Layout>
    <Seo title="Data Analysis" />
    <ServicesComponent mockData={mockData} />
    <FormSection />
  </Layout>
)

export default DataAnalysis
