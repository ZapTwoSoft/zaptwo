import * as React from "react"
import MobileLogo from "../../images/svg/bighead.svg"
import {Link} from "gatsby";

const ContactUsCTA = () => {
    return (
        <div className=" py-10">
            <div className="max-h-full md:max-w-3/4 xl:max-w-3/5 mx-auto py-10">
                <Link to="/contact" className="hover:cursor-pointer">
                    <section className="bg-default rounded-xl mb-10 relative">
                        <div className="px-4 mx-auto overflow-hidden bg-default rounded-md max-w-7xl sm:px-6 lg:px-8">
                            <div className="lg:py-12">
                                <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-3 lg:gap-x-8 2xl:gap-x-10">
                                    <div className="col-span-2">
                                        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">
                                            Let's Talk Tech !
                                        </h2>
                                        <p className="mt-4 text-base text-gray-50">
                                            Have something in mind? Leave us a quick message for a free consultancy session.
                                        </p>
                                        <Link
                                            to="/contact"
                                            className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full text-bold shadow-sm text-base font-semibold bg-default-50 text-default hover:text-default-50 hover:bg-default my-2"
                                        >
                                            Contact
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img
                            className="absolute h-48 max-w-xs  right-0 bottom-0"
                            src={MobileLogo}
                            alt=""
                        />
                    </section>
                </Link>
            </div>
        </div>
    )
}
export default ContactUsCTA
