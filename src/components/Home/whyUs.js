import React from "react"
import WebsiteImage from "../../images/svg/faster-websites.svg"
import SecureImage from "../../images/svg/secure-infrastructure.svg"
import UpImage from "../../images/svg/high-scale.svg"
import DevImage from "../../images/svg/improved-developer-experience.svg"

const pageData = [
  {
    id: 1,
    title: "Faster Website",
    subtitle: "Optimize your site with pre-rendering and global delivery.",
    image: WebsiteImage,
  },
  {
    id: 2,
    title: "Secure infrastructure",
    subtitle:
      "We Provide, Jamstack architectures that offers fewer points to attack.",
    image: SecureImage,
  },
  {
    id: 3,
    title: "Drive More Sales",
    subtitle: "Every company we handle we always drive more sales.",
    image: UpImage,
  },
  {
    id: 4,
    title: "Expert Developers",
    subtitle:
      "We have professional developer's to help you automate your business.",
    image: DevImage,
  },
]

function whyUs() {
  return (
    <div className="bg-default-50 py-5">
      <div className="container my-10 max-h-full md:max-w-3/4 xl:max-w-3/5 mx-auto ">
        <h1 className="text-center text-3xl text-default md:text-4xl mt-5 font-semibold">
          Why Us?
        </h1>
        <div className="container mx-auto p-10 md:py-10 px-0 md:p-10 md:px-0">
          <div className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row auto-rows-max  gap-5 items-start ">
            {pageData.map(item => (
              <div
                key={item.id}
                className="bg-white p-7 text-left transform duration-500 hover:-translate-y-1 hover:shadow hover:bg-white cursor-pointer border-2 border-gray-700 rounded-xl h-full"
              >
                <img
                  className="mx-auto mb-2 h-28"
                  src={item.image}
                  alt="icon for_services"
                ></img>
                <h1 className="text-base font-bold text-center mb-3 text-default">
                  {item.title}
                </h1>
                <p className="text-center text-sm">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default whyUs
