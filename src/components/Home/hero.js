import { Link } from "gatsby"
import React from "react"
import ImageHero from "../../images/svg/banner.svg"

function hero() {
  return (
    <>
      <div className="max-h-full md:max-w-3/4 xl:max-w-3/5 mx-auto grid grid-cols-1 sm:grid-cols-3 lg:flex-row justify-between items-center mb-20 px-3">
        <div className="sm:mt-10 mb-10  col-span-1 sm:col-span-2">
          <h1 className="text-4xl sm:text-5xl leading-normal lg:text-left text-center font-extrabold mb-3">
            We Are The Complete <br/>
            Solutions For Your
            <br/>
            <span className="text-default">Brand</span>
          </h1>
          <p className="text-xl font-normal text-gray-700 lg:text-left border-red-500 text-center ">
            We provide all kind of services for your company,<br /> startup &  agency. You'll love our services.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md">
              <Link
                to="/contact"
                className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-full text-white border-2 hover:border-default bg-default hover:bg-default-50 hover:text-default md:py-3 md:text-lg md:px-10"
              >
                Services
              </Link>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="tel:+8801521109475"
                className="w-full flex items-center justify-center px-8 py-3 border-2 border-default text-base font-medium rounded-full text-default bg-default-50 hover:bg-default hover:text-default-50 md:py-3 md:text-lg md:px-10"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 lg:mt-0 hidden sm:contents">
          <img
            src={ImageHero}
            alt="Hero_right_image"
            className="object-contain lg:object-scale-down h-96"
          />
        </div>
      </div>
    </>
  )
}

export default hero
