import { CubeIcon } from "@heroicons/react/outline"
import {
  AcademicCapIcon,
  HomeIcon,
  OfficeBuildingIcon,
  PlusCircleIcon,
  ShoppingCartIcon,
} from "@heroicons/react/solid"
import React from "react"

function Serve() {
  return (
    <div className="bg-gray-800 text-white py-10">
      <h1 className="text-center text-3xl text-default md:text-4xl font-semibold">
        Industries We Serve
      </h1>
      <p className="text-xl text-gray-100 font-medium text-center mt-5">
        We Serve many Industries to make their daily much easier.
      </p>
      <div className="bg-gray-800 text-white md:mx-0 ">
        <div className="max-h-full md:max-w-3/4 xl:max-w-3/5 mx-auto mb-10">
          <div className="grid grid-cols-2 mt-10 md:grid-cols-6 py-5">
            <div className="mx-auto  rounded-lg shadow-md">
              <HomeIcon className="h-10 mb-4 mt-3 mx-auto" />
              <h1 className="font-semibold">Real State</h1>
            </div>
            <div className="mx-auto  rounded-lg shadow-md">
              <PlusCircleIcon className="h-10 mb-4 mt-3 mx-auto" />
              <h1 className="font-semibold">Medical</h1>
            </div>
            <div className="mx-auto  rounded-lg shadow-md">
              <OfficeBuildingIcon className="h-10 mb-4  mt-3 mx-auto" />
              <h1 className="font-semibold">Tourism</h1>
            </div>
            <div className="mx-auto  rounded-lg shadow-md">
              <ShoppingCartIcon className="h-10 mb-4 mt-3 mx-auto" />
              <h1 className="font-semibold">E-Com</h1>
            </div>
            <div className="mx-auto  rounded-lg shadow-md">
              <AcademicCapIcon className="h-10 mb-4  mt-3 mx-auto" />
              <h1 className="font-semibold">Education</h1>
            </div>
            <div className="mx-auto rounded-lg shadow-md">
              <CubeIcon className="h-10 mb-4 mt-3 mx-auto" />
              <h1 className="font-semibold">Miscellaneous</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Serve
