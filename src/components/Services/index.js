import React from "react"
import {CheckIcon} from "@heroicons/react/outline"
import {Link} from "gatsby"

const ServicesComponent = ({ mockData }) => {
  return (
    <div className="max-h-full md:max-w-3/4 xl:max-w-3/5 mx-auto">
      <div className="bg-white">
        <div className="mx-auto py-5">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle
                cx={512}
                cy={512}
                r={512}
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fillOpacity="0.2"
              />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-10 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {mockData?.title}
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                {mockData?.subtitle}
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start py-5">
                <Link to={"/contact"}>
                  <div className="rounded-md bg-white px-5 py-4 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                    Contact US
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10">
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="flex flex-col gap-5 sm:gap-0">
            {mockData.features.map(feature => (
              <div key={feature.name} className="hover:bg-white my-4">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-default text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="ml-16 text-sm sm:text-base font-bold text-default font-medium text-gray-900">
                    {feature.name}
                  </div>
                </dt>
                <dd className="mt-2 ml-16 text-sm text-gray-500 text-justify hidden md:block">
                  {feature.description}{" "}
                </dd>
              </div>
            ))}
          </div>
          <div className="rounded-xl my-auto hidden sm:contents">
            <img
              src={mockData?.typeImage}
              className="w-full object-cover max-h-96 mb-5 rounded-xl "
              alt="Project One Static"
            />
          </div>
        </div>
      </div>
      <div className="my-10">
        <div className="lg:pr-4 px-3 sm:px-auto">
          <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
            <p>{mockData.paragraphTwo}</p>
            <div role="list" className="mt-8 space-y-8 text-gray-600">
              {mockData.points.map((point, index) => (
                <div className="flex gap-x-3" key={index}>
                  <CheckIcon
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      {point}
                    </strong>
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-8">{mockData.paragraphThree}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesComponent
