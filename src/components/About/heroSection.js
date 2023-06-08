import * as React from "react"
import MobileLogo from "../../images/mobile.png"
import ContactUsCTA from "./contactCTA";

const heroSection = () => {
  return (
    <div className=" py-10">
      <div className="max-h-full md:max-w-3/4 xl:max-w-3/5 mx-auto py-10">
        <section className="bg-default rounded-xl mb-10">
          <div className="px-4 mx-auto overflow-hidden bg-default rounded-md max-w-7xl sm:px-6 lg:px-8">
            <div className="lg:py-12">
              <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-3 lg:gap-x-8 2xl:gap-x-10">
                <div className="col-span-2">
                  <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">
                    About Us
                  </h2>
                  <p className="mt-4 text-base text-gray-50">
                    ZapTwo is a complete tech solution company. We help
                    businesses of all sizes grow and succeed by providing them
                    with the software, mobile apps, web development, data
                    analysis, cloud computing, cybersecurity and managed
                    services they need to succeed.
                  </p>
                </div>

                <div className="relative px-12">
                  <svg
                    className="absolute inset-x-0 bottom-0 left-1/2 -translate-x-1/2 -mb-48 lg:-mb-72 text-yellow-300 w-[460px] h-[460px] sm:w-[600px] sm:h-[600px]"
                    fill="currentColor"
                    viewBox="0 0 8 8"
                  >
                    <circle cx="4" cy="4" r="3" />
                  </svg>
                  <img
                    className="relative w-full max-w-xs mx-auto -mb-60 lg:-mb-64"
                    src={MobileLogo}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10 bg-gray-50">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Why Choose ZapTwo?
              </h2>
              <p className="text-sm font-semibold tracking-widest text-default uppercase">
                There are many reasons to choose ZapTwo for your tech needs.
                Here are just a few
              </p>
            </div>

            <div className="grid items-center grid-cols-1 mt-12 gap-y-10 gap-x-4">
              <div className="space-y-8 lg:pr-16 xl:pr-24 lg:space-y-12">
                <div className="flex items-start">
                  {" "}
                  <svg
                    className="flex-shrink-0 text-blue-600 w-9 h-9"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {/*<svg className="flex-shrink-0 text-green-500 w-9 h-9" xmlns="http://www.w3.org/2000/svg"*/}
                  {/*     fill="none" viewBox="0 0 24 24" stroke="currentColor">*/}
                  {/*    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"*/}
                  {/*          d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/>*/}
                  {/*</svg>*/}
                  <div className="ml-5">
                    <h3 className="text-xl font-semibold text-black">
                      Experienced Developers
                    </h3>
                    <p className="mt-3 text-base text-gray-600">
                      We have a team of experienced and certified professionals
                      who are experts in a variety of tech solutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg
                    className="flex-shrink-0 text-red-500 w-9 h-9"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <div className="ml-5">
                    <h3 className="text-xl font-semibold text-black">
                      We understand you!
                    </h3>
                    <p className="mt-3 text-base text-gray-600">
                      We take the time to get to know your business and your
                      needs before we start working with you.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg
                    className="flex-shrink-0 text-green-500 w-9 h-9"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                    />
                  </svg>

                  <div className="ml-5">
                    <h3 className="text-xl font-semibold text-black">
                      Quality tech solutions
                    </h3>
                    <p className="mt-3 text-base text-gray-600">
                      We are committed to providing our clients with the highest
                      quality tech solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="my-10 bg-white py-10">
          <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
              <div className="">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                  Our mission is to grow your business.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  Our mission is to provide businesses with the software, mobile
                  apps, web development, data analysis, cloud computing,
                  cybersecurity and managed services they need to grow and
                  succeed. We believe that by providing businesses with the best
                  possible tech solutions, we can help them reach their full
                  potential and achieve their goals..
                </p>
              </div>

              <div className="relative pl-20 pr-6 sm:pl-6 md:px-0">
                <div className="relative w-full max-w-xs mt-4 mb-10 ml-auto">
                  <img
                    className="ml-auto"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/features/1/person.jpg"
                    alt=""
                  />

                  <img
                    className="absolute -top-4 -left-12"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/features/1/wavey-lines.svg"
                    alt=""
                  />

                  <div className="absolute -bottom-10 -left-16">
                    <div className="bg-default text-white rounded-md">
                      <div className="px-8 py-10">
                        <span className="block text-4xl font-bold  lg:text-5xl">
                          {" "}
                          92%{" "}
                        </span>
                        <span className="block mt-2 text-base leading-tight">
                          {" "}
                          Sales Boots{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ContactUsCTA />
    </div>
  )
}
export default heroSection
