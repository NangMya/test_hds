"use client";

import LoadingOverlay from "@/components/LoadingOverlay";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
    {
      loading && <LoadingOverlay/>
    }
    <div className="bg-[#EFF3F5] text-[#444444]">
      <div className="border-b border-b-[#c5c5c6] py-6">
        <div className="w-[90%] mx-auto">
          <div className="flex flex-row md:flex-col lg:flex-row  justify-center sm:justify-between text-center md:text-left items-center">
            <div>
              <Image
                alt="logo"
                src="/logo.svg"
                width={100}
                height={100}
                className="object-cover mx-auto md:mx-0"
              />
              <h1 className="font-extrabold text-lg p-3">Work With Us</h1>
              <p className="text-xs px-3 py-2">hello@hd&smedia.com</p>
              <p className="text-xs px-3 py-2">+1 (201) 895-3801</p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row justify-center sm:justify-between text-center md:text-left gap-4 sm:gap-8">
              <div className="flex flex-col ">
                <Link href="/about_us" prefetch={true} className="text-sm py-2 cursor-pointer hover:text-primary" onClick={() => setLoading(true)}>Who we are</Link>
                <Link href="/our_service" prefetch={true} className="text-sm py-2 cursor-pointer hover:text-primary" onClick={() => setLoading(true)}>What we do</Link>
                <Link href="/our_work" prefetch={true} className="text-sm py-2 cursor-pointer hover:text-primary" onClick={() => setLoading(true)}>Our work</Link>
                <Link href="/our_people" prefetch={true} className="text-sm py-2 cursor-pointer hover:text-primary" onClick={() => setLoading(true)}>Our people</Link>
                <Link href="/contact" prefetch={true} className="text-sm py-2 cursor-pointer hover:text-primary" onClick={() => setLoading(true)}>Get in touch</Link>
                <Link href="/join_our_team" prefetch={true} className="text-sm py-2 cursor-pointer hover:text-primary" onClick={() => setLoading(true)}>Join our team</Link>
              </div>
              <div className="flex flex-col ">
                <Link href="#" prefetch={true} className="text-sm py-2 cursor-pointer hover:text-primary" onClick={() => setLoading(true)}>Privacy Policy</Link>
                <Link href="#" prefetch={true} className="text-sm py-2 cursor-pointer hover:text-primary" onClick={() => setLoading(true)}>Cookie Policy</Link>
                <Link href="#" prefetch={true} className="text-sm py-2 cursor-pointer hover:text-primary" onClick={() => setLoading(true)}>Terms & Conditions</Link>
              </div>
              <div className="flex flex-col items-center justify-between">
                <div>
                  <p className="py-2 text-sm">Socials</p>
                  <div className="grid grid-cols-3 gap-4 text-primary pt-2">
                    <FaLinkedin size={18} className="cursor-pointer" />
                    <FaFacebook size={18} className="cursor-pointer" />
                    <FaInstagram size={18} className="cursor-pointer" />
                    <FaYoutube size={18} className="cursor-pointer" />
                    <FaTiktok size={18} className="cursor-pointer" />
                    <FaTelegram size={18} className="cursor-pointer" />
                  </div>
                </div>
                <div>
                  <p className="text-sm py-4">View Map  <span className="text-primary inline"> <FaLocationDot className="inline" size={20} /> </span> </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col sm:flex-row justify-between text-center md:text-left text-xs py-4">
          <p className="py-2 md:py-2">&copy;2024 HD&S Media Group Inc.</p>
          <p className="py-2 md:py-2">All rights are reserved.</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Footer;
