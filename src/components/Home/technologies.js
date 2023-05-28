import * as React from "react"
import ReactLogo from "../../images/tech/react.png"
import Next from "../../images/tech/next-js-logo.png"
import Jamstack from "../../images/tech/jamstack.png"
import Shopify from "../../images/tech/Shopify.png"
import Nest from "../../images/tech/nestjs.png"
import Ts from "../../images/tech/typescript.png"
import Tailwind from "../../images/tech/tailwind.jpg"
import Vue from "../../images/tech/Vuejs.png"
import PowerBi from "../../images/tech/power-bi.png"
import Mui from "../../images/tech/mui.png"

const TechItems = [
  {
    id: 1,
    logo: ReactLogo,
  },
  {
    id: 2,
    logo: Next,
  },
  {
    id: 3,
    logo: Jamstack,
  },
  {
    id: 4,
    logo: Shopify,
  },
  {
    id: 5,
    logo: Nest,
  },
  {
    id: 6,
    logo: Ts,
  },
  {
    id: 7,
    logo: Tailwind,
  },
  {
    id: 8,
    logo: Vue,
  },
  {
    id: 9,
    logo: PowerBi,
  },
  {
    id: 10,
    logo: Mui,
  },
]

export default function Technologies() {
  return (
    <div className="max-h-full md:max-w-3/4 xl:max-w-3/5 mx-auto my-10">
      <h1 className="text-center text-3xl text-default md:text-4xl font-semibold">
        Technology We Use
      </h1>
      <p className="text-xl text-gray-600 font-medium text-center">
        Cutting edge technology to solve business problems
      </p>
      <div className="bg-white py-5 sm:py-10">
        <div className="">
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            {TechItems.map(item => (
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                key={item.id}
                src={item.logo}
                alt="Transistor"
                width={158}
                height={48}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
