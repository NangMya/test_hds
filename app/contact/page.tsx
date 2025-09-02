"use client";
import Heading from "@/components/Heading";
import WebsiteLayout from "@/components/layouts/WebsiteLayout";
import LoadingOverlay from "@/components/LoadingOverlay";
import Image from "next/image";
import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";

const page = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await res.json();
      if (result.error) {
        setError(result.error);
      } else {
        setTimeout(() => {
          setForm({ name: "", email: "", phone: "", message: "" });
          setSuccessMsg("Your message has been sent.");
        }, 1000); 

        setTimeout(() => setSuccessMsg(""), 6000);
      }
    } catch (err) {
      setError("Something went wrong.");
    } finally {
      setTimeout(() => setLoading(false), 1000);
    }
  };

  return (
    <WebsiteLayout>
      <section className="pt-12">
        {loading && <LoadingOverlay />}
        <Heading firstTitle="Contact" secondTitle="" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-4 sm:px-10">
          <div className="pl-0 sm:pl-6 pt-4 sm:pt-16 font-graphik">
            <h1 className="text-3xl sm:text-3xl md:text-5xl">We'd love to</h1>
            <p className="opacity-50 text-3xl sm:text-3xl md:text-5xl"> hear from you</p>
          </div>
          <div>
            <Image
              src="/images/common/get_in_touch.webp"
              alt="get_in_touch"
              className="object-cover mb-6"
              width={650}
              height={200}
              priority
            />
          </div>
          <div className="px-0 sm:px-4 pt-4 sm:pt-16">
            <div className="flex gap-4 pt-2">
              <FaLinkedin size={18} className="cursor-pointer" />
              <FaFacebook size={18} className="cursor-pointer" />
              <FaInstagram size={18} className="cursor-pointer" />
              <FaYoutube size={18} className="cursor-pointer" />
              <FaTiktok size={18} className="cursor-pointer" />
              <FaTelegram size={18} className="cursor-pointer" />
            </div>
            <p className="opacity-50 text-xs py-6">
              The right direction shapes the whole journey. Let us be your guide.
            </p>
          </div>
        </div>

        <div className="px-4 sm:px-16 font-lora pt-6 sm:pt-0">
          <form onSubmit={handleSendMessage}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-10 pb-6">
              <div>
                <label htmlFor="name" className="text-xs sm:text-sm uppercase block">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="border-b border-b-border focus:outline-none hover:outline-none w-full py-2"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-xs sm:text-sm uppercase block">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="border-b border-b-border focus:outline-none hover:outline-none w-full py-2"
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-xs sm:text-sm uppercase block">
                  Phone Number (Optional)
                </label>
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="border-b border-b-border focus:outline-none hover:outline-none w-full py-2"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="text-xs sm:text-sm uppercase block">
                Message
              </label>
              <textarea
                name="message"
                rows={1}
                value={form.message}
                onChange={handleChange}
                className="border-b border-b-border focus:outline-none hover:outline-none w-full pt-6"
              />
            </div>
            <div className="flex justify-between w-full">
              <button
                type="submit"
                className="text-black font-bold inline-flex items-center text-xs focus:outline-none cursor-pointer"
              >
                Leave us message
                <span className="ml-2 font-normal text-xl">&#8594;</span>
              </button>
              {successMsg && <p className="text-sm text-green-400 font-bold">{successMsg}</p>}
              {error && <p className="text-sm text-red-500 font-bold">{error}</p>}
            </div>
          </form>
        </div>


        <div className="pt-14 bg-[url('/images/contact_bg.svg')] bg-no-repeat bg-contain sm:bg-cover mt-10">
          <div className="w-full font-lora bg-primary">
          <div className="w-[90%] mx-auto font-lora pb-10">
            <div className="flex flex-col md:flex-col lg:flex-row justify-between sm:justify-between items-start sm:items-center text-white pt-4 sm:pt-10">
              <div>
                <p className="sm font-normal">Contact Info</p>
                <h1 className="font-semibold text-3xl max-w-sm py-4 sm:py-8 font-lora">
                  We are happy to assist you
                </h1>
                <p className="text-xs sm:text-sm py-2">
                  Opening Hours: Monday - Friday. Every 9 AM - 5 PM
                </p>
              </div>
              <div className="pt-6 sm:pt-0 flex flex-col">
                <div className="flex flex-col sm:flex-row md:flex-row  justify-between sm:justify-between text-left sm:text-center md:text-left gap-4 sm:gap-16">
                  <div>
                    <p className="text-sm font-normal">Email Address</p>
                    <div className="w-10 h-0.5 sm:h-1 bg-white rounded-lg mt-2 mb-4"></div>
                    <p className="text-xs pb-2">help@info.com</p>
                    <p className="text-xs pb-2">support@info.com</p>
                  </div>
                  <div>
                    <p className="text-sm font-normal">Number</p>
                    <div className="w-10 h-0.5 sm:h-1 bg-white rounded-lg mt-2 mb-4"></div>
                    <p className="text-xs pb-2">(808) 998-34256</p>
                    <p className="text-xs pb-2">09788789031</p>
                  </div>
                  <div>
                    <p className="text-sm font-normal">Location</p>
                    <div className="w-10 h-0.5 sm:h-1 bg-white rounded-lg mt-2 mb-4"></div>
                    <p className="text-xs pb-2">Block 45 (B), Pyay Road,</p>
                    <p className="text-xs pb-2">Bahan Township,</p>
                    <p className="text-xs pb-2">Yangon</p>
                  </div>
                </div>
                <div className="flex w-full justify-end items-center mb-6 sm:mb-0 sm:mt-8 order-first sm:order-last">
                  <p className="text-xs sm:text-sm font-semibold flex items-center">
                    View our office location
                    <span className="ps-2">
                      <FaMapLocation className="inline" size={20} />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
     
      </section>
    </WebsiteLayout>
  );
};

export default page;
