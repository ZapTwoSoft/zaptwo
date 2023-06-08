import { MailIcon, PhoneIcon } from "@heroicons/react/outline"
import * as React from "react"
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa"

const formSection = () => {
  return (
    <div className=" py-20">
      <div className="max-h-full md:max-w-3/4 xl:max-w-3/5 mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="pl-4">
            <div className="text-5xl text-gray-700 font-light pb-10 mt-16">
              Let's Talk Tech !
            </div>
            <p className="text-left text-base font-medium text-gray-500">
              Have something in mind? Leave us a quick message for a free
              consultancy session.
            </p>
            <div className="flex flex-row mt-10">
              <PhoneIcon className="h-5" />
              <a className="ml-3  text-xl" href="tel:+8801521109475">
                +8801521109475
              </a>
            </div>
            <div className="flex flex-row">
              <MailIcon className="h-5" />
              <a
                className="ml-3  mb-5 text-xl"
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
                <FaFacebookSquare className="h-14 w-14 text-blue-600" />
              </a>
              <a
                href="https://www.linkedin.com/company/zaptwo/"
                rel="noreferrer"
                target="_blank"
              >
                <FaLinkedin className="h-14 w-14 text-blue-800" />
              </a>
              <a
                href="https://twitter.com/zaptwoSoft"
                rel="noreferrer"
                target="_blank"
              >
                <FaTwitterSquare className="h-14 w-14 text-default" />
              </a>
            </div>
          </div>
          <div className="  p-4  text-gray-800 rounded-md">
            <form
              action=""
              className="p-5"
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="contact" value="contact" />
              <div className="my-2">
                <label htmlFor="name" className="mb-1">
                  Name
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  aria-label="name"
                  placeholder="Name"
                />
              </div>
              <div className="my-2">
                <label htmlFor="name" className="mb-1">
                  Email
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  aria-label="email"
                  placeholder="Email"
                />
              </div>
              <div className="my-2">
                <label htmlFor="name" className="mb-1">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  aria-label="phone"
                  placeholder="Phone"
                />
              </div>
              <div className="my-2">
                <label htmlFor="name" className="mb-1">
                  Type of Service you looking
                </label>
                <select
                  name="ServiceType"
                  type="text"
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  aria-label="ServiceType"
                >
                  <option value="Web Development">Web Development</option>
                  <option value="App Development">App Development</option>
                  <option value="SEO">Search Engine Optimization</option>
                  <option value="Digital marketing">Digital Marketing</option>
                  <option value="Data Analysis">Data Analysis</option>
                  <option value="Ohters">Others</option>
                </select>
              </div>
              <div className="my-2">
                <label htmlFor="name" className="mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  type="text"
                  rows={5}
                  className="bg-gray-200 resize appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  aria-label="Message"
                  placeholder="Message"
                />
              </div>
              <button
                type="submit"
                className=" w-full py-3 px-4 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-default hover:bg-default focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-default-50 "
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default formSection
