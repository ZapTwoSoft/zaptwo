import React from "react"
import { Link } from "gatsby"
import WebDev from "../../images/web.gif"
import AppDev from "../../images/app.gif"
import Seo from "../../images/searching.gif"
import Marketing from "../../images/promotion.gif"
import Data from "../../images/line-chart.gif"
import Hosting from "../../images/copy.gif"

const features = [
  {
    name: "Web Design and Development",
    description:
      "Elevate your business with a trusted website that your customers will love.Your website will load extremely fast and look great on all devices.",
    icon: WebDev,
    to: "/services/webdev",
  },
  {
    name: "Mobile Application ",
    description:
      "BlueSpaces is the fast-growing Mobile application and Game development Company that is guided in delivering the products and views into mobile space with prime quality.",
    icon: AppDev,
    to: "/services/appdev",
  },
  {
    name: "Search Engine Optimization",
    description:
      "BlueSpaces provides full-service SEO packages with specialists and customer success representatives dedicated to helping you increase your ranking online.",
    icon: Seo,
    to: "/services/seoWork",
  },
  {
    name: "Data Analysis",
    description:
      "We also provide data analysis services for your business to take smarter decisions, using tools like Power BI, SSRS, tableau dashboard",
    icon: Data,
    to: "/services/dataAnalysis",
  },
  {
    name: "Digital Marketing",
    description:
      "We offer all types of online marketing services including SEO, SEM, SMM, SMO, paid ads, email marketing, SMS marketing and push notification services. We are a dedicated team of people who always serve the brand supervisor’s clients. ",
    icon: Marketing,
    to: "/services/digital_m",
  },
  {
    name: "Domain And Hosting",
    description:
      "BlueSpaces also offers an All in One website maintenance solution that encompasses hosting, Content Updates, and Source Update of the current site. We help you concentrate on your business while leaving Content Updates and Regular Maintenance of your website to us.",
    icon: Hosting,
    to: "/services/domainHosting",
  },
]

export default function Services() {
  return (
    <div className="bg-default-50 py-5">
      <div className="pb-10 max-h-full md:max-w-3/4 xl:max-w-3/5 mx-auto mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="text-center text-3xl text-default md:text-4xl mt-5 font-semibold">
              Our Services
            </p>
            <p className="mb-20 max-w-2xl text-base my-5 text-gray-500 lg:mx-auto">
              We as a big team provide IT enable support including Web and App
              development, IT Consultation, SEO, Digital Marketing, Data
              Analysis and many more.
            </p>
          </div>

          <div className="mt-5">
            <dl className="space-y-10 md:space-y-0 grid grid-cols-1 md:grid-cols-3 md:gap-x-8 md:gap-y-10 mx-5 sm:mx-0">
              {features.map(feature => (
                <Link
                  key={feature.name}
                  to={feature.to}
                  className="relative transform duration-500 hover:-translate-y-2  border-2 border-default-50 bg-white rounded-xl "
                >
                  <div className="flex justify-between items-center">
                    <div className="my-auto p-2">
                      <img
                        src={feature.icon}
                        className="w-20 min-w-20 hover:bg-default-50"
                        alt="iconsss"
                      />
                    </div>
                    <div className="text-sm sm:text-base p-10 font-bold text-default leading-6 font-medium">
                      {feature.name}
                    </div>
                  </div>
                </Link>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
