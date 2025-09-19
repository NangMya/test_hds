"use client";

import LoadingOverlay from "@/components/LoadingOverlay";
import Logo from "@/components/Logo";
import SocialLinks from "@/components/SocialLinks";
import Link from "next/link";
import React, { useState } from "react";

import { FaLocationDot } from "react-icons/fa6";

const Footer = async ({ footerData }: {  footerData: any }) => {
  const [loading, setLoading] = useState(false);
   
  return (
    <>
      {loading && <LoadingOverlay />}
      <div className="bg-[#EFF3F5] text-[#444444]">
        <div className="border-b border-b-[#c5c5c6] py-6">
          <div className=" w-[95%] md:w-[90%] mx-auto">
            <div className="flex flex-row md:flex-row lg:flex-row  justify-around sm:justify-between w-full ">
              <div>
                <Logo color="#892A51" width="130px" />
                <h1 className="font-extrabold text-lg py-2">Work With Us</h1>
                <p className="text-xs  py-2">{footerData?.email || "hello@hd&smedia.com"}</p>
                <p className="text-xs  py-2">{footerData?.phone1 || '(+855) 23 424 424'}</p>
                <p className="text-xs  py-2">{footerData?.phone2 || '(+855) 10 222 444'}</p>
                <div className="block sm:hidden">
                  <p className="text-sm py-4">
                    View Map
                    <span className="text-primary inline">
                      <FaLocationDot className="inline" size={20} />
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex flex-row sm:flex-row md:flex-row lg:flex-row justify-center sm:justify-between  gap-8 sm:gap-8">
                <div className="flex flex-col text-left">
                  <Link
                    href="/about_us"
                    prefetch={true}
                    className="text-xs sm:text-sm py-2 cursor-pointer hover:text-primary"
                    onClick={() => setLoading(true)}
                  >
                    Who we are
                  </Link>
                  <Link
                    href="/our_service"
                    prefetch={true}
                    className="text-xs sm:text-sm py-2 cursor-pointer hover:text-primary"
                    onClick={() => setLoading(true)}
                  >
                    What we do
                  </Link>
                  <Link
                    href="/our_work"
                    prefetch={true}
                    className="text-xs sm:text-sm py-2 cursor-pointer hover:text-primary"
                    onClick={() => setLoading(true)}
                  >
                    Our work
                  </Link>
                  <Link
                    href="/our_people"
                    prefetch={true}
                    className="text-xs sm:text-sm py-2 cursor-pointer hover:text-primary"
                    onClick={() => setLoading(true)}
                  >
                    Our people
                  </Link>
                  <Link
                    href="/contact"
                    prefetch={true}
                    className="text-xs sm:text-sm py-2 cursor-pointer hover:text-primary"
                    onClick={() => setLoading(true)}
                  >
                    Get in touch
                  </Link>
                  <Link
                    href="/join_our_team"
                    prefetch={true}
                    className="text-xs sm:text-sm py-2 cursor-pointer hover:text-primary"
                    onClick={() => setLoading(true)}
                  >
                    Join our team
                  </Link>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row justify-center sm:justify-between text-center md:text-left gap-4 sm:gap-8">
                  <div className="flex flex-col text-left">
                    <Link
                      href="#"
                      prefetch={true}
                      className="text-xs sm:text-sm py-2 cursor-pointer hover:text-primary"
                      onClick={() => setLoading(true)}
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      href="#"
                      prefetch={true}
                      className="text-xs sm:text-sm py-2 cursor-pointer hover:text-primary"
                      onClick={() => setLoading(true)}
                    >
                      Cookie Policy
                    </Link>
                    <Link
                      href="#"
                      prefetch={true}
                      className="text-xs sm:text-sm py-2 cursor-pointer hover:text-primary"
                      onClick={() => setLoading(true)}
                    >
                      Terms & Conditions
                    </Link>
                  </div>
                  <div className="flex flex-col justify-between text-left">
                    <div>
                      <p className="py-2 text-sm">Socials</p>
                      <div className="grid grid-cols-3 gap-4 text-primary pt-2">
                        <SocialLinks info={footerData}/>
                      </div>
                    </div>
                    <div className="hidden sm:block">
                      <p className="text-sm py-4">
                        View Map
                        <span className="text-primary inline">
                          <FaLocationDot className="inline" size={20} />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[90%] mx-auto">
          <div className="flex flex-row justify-between text-center md:text-left text-xs py-4">
            <p className="py-2 md:py-2">&copy;2024 HD&S Media Group Inc.</p>
            <p className="py-2 md:py-2">All rights are reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
