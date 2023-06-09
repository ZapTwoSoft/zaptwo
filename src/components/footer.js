import { MailIcon, PhoneIcon } from "@heroicons/react/outline"
import { Link } from "gatsby"
import * as React from "react"
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai"

const footer = () => {
  return (
    <div className="bg-gray-800 text-white">
      <div className="max-h-full md:max-w-3/4 xl:max-w-3/5 mx-auto">
        <div className="text-3xl md:ml-0 ml-5">
          {" "}
          ZapTwo<span className="my-5 text-7xl text-green-400 ">.</span>
          <span className="text-gray-400 text-3xl">com</span>
        </div>
        <div className="flex flex-col md:flex-row my-5 bg-gray-800 text-white">
          <div className="mr-auto md:ml-0 ml-5">
            <h1 className="text-base font-bold text-default md:mt-0 mt-3">Sitemap.</h1>
            <ul className="font-light text-sm">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services/webdev">Services</Link>
              </li>
              <li>
                <Link to="/portfolio">Our Works</Link>
              </li>
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="mr-auto md:ml-0 ml-5">
            <h3 className="text-base font-bold text-default md:mt-0 mt-3">Services.</h3>
            <ul className="font-light text-sm">
              <li>
                <Link to="/services/webdev">Web Development</Link>{" "}
              </li>
              <Link to="/services/appdev">
                <li>App Development</li>
              </Link>
              <Link to="/services/seoWork">
                <li>SEO</li>
              </Link>
              <Link to="/services/dataAnalysis">
                <li>Data Analysis</li>
              </Link>
              <Link to="/services/digital_m">
                <li>Digital Marketing</li>
              </Link>
            </ul>
          </div>
          <div className="mr-auto md:ml-0 ml-5">
            <h1 className="text-base font-bold text-default md:mt-0 mt-3">Address.</h1>
            <div className="grid grid-cols-3 font-light text-sm">
              <div className="mr-3">
                {/*<h3 className="font-medium underline">Headquater</h3>*/}
                <p>Merkley square,</p>
                <p>Scarborough, ontario,</p>
                <p>Canada</p>
              </div>
              <div className="mr-3">
                {/*<h3 className="font-medium underline">Branch</h3>*/}
                <p>Mirpur</p>
                <p>Dhaka 1216</p>
                <p>Bangladesh</p>
              </div>
            </div>
          </div>
          <div className="mr-auto md:ml-0 ml-5">
            <h3 className="text-base font-bold text-default md:mt-0 mt-3">
              Get In Touch.
            </h3>
            <div className="flex flex-row mt-2">
              <PhoneIcon className="h-5" />
              <a
                className="ml-3  text-md"
                rel="noreferrer"
                href="tel:+8801521109475"
              >
                +8801521109475
              </a>
            </div>
            <div className="flex flex-row">
              <MailIcon className="h-5" />
              <a
                className="ml-3 mb-3 text-md "
                rel="noreferrer"
                href="mailto:zaptwosoft@gmail.com"
              >
                zaptwosoft@gmail.com
              </a>
            </div>
            <div className="flex gap-1">
              <a
                href="https://www.facebook.com/zaptwoo/"
                rel="noreferrer"
                target="_blank"
              >
                <AiFillFacebook className="h-7 w-7" />
              </a>
              <a
                href="https://www.linkedin.com/company/zaptwo/"
                rel="noreferrer"
                target="_blank"
              >
                <AiFillLinkedin className="h-7 w-7" />
              </a>
              <a
                href="https://twitter.com/zaptwoSoft"
                rel="noreferrer"
                target="_blank"
              >
                <AiFillTwitterSquare className="h-7 w-7" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-5 text-center text-xs pb-10">
          Made With{" "}
          <span role="img" aria-label="lovemealkemy">
            ❤️
          </span>{" "}
          By <span className='font-bold text-default'>ZapTwo</span>
        </div>
      </div>
    </div>
  )
}

export default footer
