import { Link } from "gatsby"
import React from "react"
export default function Cta() {
  return (
    <div className="BgImageClass mt-20 pb-15">
      <div className="max-h-full md:max-w-3/4 xl:max-w-3/5 mx-auto py-20">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <div className="text-3xl font-extrabold text-gray-900 sm:text-5xl">
            <span className="block text-white mb-3">Ready to dive in?</span>
            <span className="block text-default">Join Us as a Partner.</span>
            <span className=" block text-base text-white font-normal text-left mt-2">
              With the help of our partners, we can share our expertise and
              resources around the world. And thus we are expanding as the home
              of top IT professionals. So contact us to see how you can join our
              global family!
            </span>
            <div className="mt-8 flex lg:mt-5 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-semibold rounded-full text-white bg-default hover:bg-default-50 hover:text-default"
                >
                  Get started
                </Link>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <a
                  href="mailto:zaptwosoft@gmail.com"
                  className="inline-flex items-center bg-default-50 justify-center px-5 py-3 text-base font-semibold rounded-full text-default bg-white hover:bg-default hover:text-white"
                >
                  Mail Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
