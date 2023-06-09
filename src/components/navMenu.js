/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import Logo from "../images/ZapTwo.png"
import {
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  TerminalIcon,
  XIcon,
} from "@heroicons/react/outline"
import {
  ChartPieIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
  MailIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/solid"
import { Link } from "gatsby"

const solutions = [
  {
    name: "Web Development",
    description:
      "Build super fast websites that's takes less then 6s to load with us.",
    to: "/services/webdev",
    icon: TerminalIcon,
  },
  {
    name: "App Development",
    description: "We will help you build your customized applications. ",
    to: "/services/appdev",
    icon: CursorClickIcon,
  },
  {
    name: "Search Engine Optimization",
    description: "We make your site stand on the top",
    to: "/services/seoWork",
    icon: PresentationChartBarIcon,
  },
  {
    name: "Digital Marketing",
    description: "Our Expert will help your drive more potential buyers.",
    to: "/services/digital_m",
    icon: ChartPieIcon,
  },
  {
    name: "Data Analysis",
    description: "Data visulization using Python, R, Power BI",
    to: "/services/dataAnalysis",
    icon: CubeTransparentIcon,
  },
]
function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Example() {
  return (
    <div className="sticky top-0 z-50">
      <div className="bg-default-50 py-1">
        <div className="flex  flex-row-reverse max-h-full text-sm md:max-w-3/4 xl:max-w-3/5 mx-auto text-default">
          <a href="tel:+8801521109475" className="mr-3">
            +8801521109475
          </a>
          <PhoneIcon className="h-4 w-4 my-auto mr-1" aria-hidden="true" />
          <a href="mailto:zaptwosoft@gmail.com" className=" mr-2">
            zaptwosoft@gmail.com
          </a>
          <MailIcon className="h-4 w-4 my-auto mr-1" aria-hidden="true" />
        </div>
      </div>
      <Popover className="relative bg-white">
        {({ open }) => (
          <div className="max-h-full md:max-w-3/4 xl:max-w-3/5 mx-auto">
            <div>
              <div className="flex justify-between items-center py-3 md:justify-start md:space-x-10 px-5 md:px-0">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                  <Link to="/">
                    <span className="sr-only">ZapTwo</span>
                    <img
                      className="h-16 w-auto sm:h-16"
                      src={Logo}
                      alt="Brand main lg"
                    />
                  </Link>
                </div>
                <div className="-mr-2 -my-2 md:hidden">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-default">
                    <span className="sr-only">Open menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
                <Popover.Group as="nav" className="hidden md:flex space-x-10">
                  <Link
                    to="/"
                    className="text-base font-semibold text-gray-600 hover:text-gray-900"
                  >
                    Home
                  </Link>
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? "text-gray-900" : "text-gray-600",
                            "group bg-white rounded-md inline-flex items-center font-semibold hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-default"
                          )}
                        >
                          <span>Services</span>
                          <ChevronDownIcon
                            className={classNames(
                              open ? "text-gray-600" : "text-gray-400",
                              "ml-2 h-5 w-5 group-hover:text-gray-600"
                            )}
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel
                            static
                            className="absolute z-10 -ml-4 mt-3 transform w-96 px-2 max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                          >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                {solutions.map(item => (
                                  <Link
                                    key={item.name}
                                    to={item.to}
                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-default-50"
                                  >
                                    <item.icon
                                      className="flex-shrink-0 h-6 w-6 text-default"
                                      aria-hidden="true"
                                    />
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-900">
                                        {item.name}
                                      </p>
                                      <p className="mt-1 text-sm text-gray-600">
                                        {item.description}
                                      </p>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                              {/*<div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex m-auto justify-around sm:space-y-0 sm:space-x-10 sm:px-8">*/}
                              {/*  {callsToAction.map(item => (*/}
                              {/*    <div key={item.name} className="flow-root">*/}
                              {/*      <Link*/}
                              {/*        to={item.to}*/}
                              {/*        className="-m-3 p-3 flex items-center rounded-md text-base font-medium  bg-default hover:bg-indigo-800 text-white"*/}
                              {/*      >*/}
                              {/*        <item.icon*/}
                              {/*          className="flex-shrink-0  h-6 w-6 text-gray-400"*/}
                              {/*          aria-hidden="true"*/}
                              {/*        />*/}
                              {/*        <span className="ml-3">{item.name}</span>*/}
                              {/*      </Link>*/}
                              {/*    </div>*/}
                              {/*  ))}*/}
                              {/*</div>*/}
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>

                  <Link
                    to="/portfolio"
                    className="text-base font-semibold text-gray-600 hover:text-gray-900"
                  >
                    Our Works
                  </Link>
                  <Link
                    to="/about"
                    className="text-base font-semibold text-gray-600 hover:text-gray-900"
                  >
                    About us
                  </Link>
                </Popover.Group>
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                  <Link
                    to="/contact"
                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full text-bold shadow-sm text-base font-semibold bg-default text-default-50 hover:text-default hover:bg-default-50"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            <Transition
              show={open}
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                static
                className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                  <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <img
                          className="h-10 w-auto"
                          src={Logo}
                          alt="Workflow"
                        />
                      </div>
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-default">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                    <div className="mt-6">
                      <nav className="grid gap-y-8">
                        {solutions.map(item => (
                          <Link
                            key={item.name}
                            to={item.to}
                            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                          >
                            <item.icon
                              className="flex-shrink-0 h-6 w-6 text-default"
                              aria-hidden="true"
                            />
                            <span className="ml-3 text-base font-medium text-gray-900">
                              {item.name}
                            </span>
                          </Link>
                        ))}
                      </nav>
                    </div>
                  </div>
                  <div className="py-6 px-5 space-y-6">
                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                      <Link
                        to="/"
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        Home
                      </Link>

                      <Link
                        to="/portfolio"
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        Our Works
                      </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                      <Link
                        to="/about"
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        About Us
                      </Link>

                      <Link
                        to="/contact"
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        Contacts
                      </Link>
                    </div>
                    <div>
                      <Link
                        to="/contact"
                        className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full text-bold shadow-sm text-base font-medium bg-default w-full text-default-50 hover:text-default hover:bg-default-50"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </div>
        )}
      </Popover>
    </div>
  )
}
