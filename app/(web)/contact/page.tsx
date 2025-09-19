import ContactForm from "@/components/Contact/ContactForm";
import Heading from "@/components/Heading";
import WebsiteLayout from "@/components/layouts/WebsiteLayout";
import LoadingOverlay from "@/components/LoadingOverlay";
import SocialLinks from "@/components/SocialLinks";
import { api } from "@/services/api";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";

const page = async () => {
  const info = await api.getInfo();
  
  

  return (
    <WebsiteLayout footerData={info}>
      <section className="pt-12">
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
             <SocialLinks info={info}/>
            </div>
            <p className="opacity-50 text-xs py-6">
              The right direction shapes the whole journey. Let us be your guide.
            </p>
          </div>
        </div>

        <ContactForm/>

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
                    <p className="text-xs pb-2">{info.email}</p>
                    {/* <p className="text-xs pb-2">support@info.com</p> */}
                  </div>
                  <div>
                    <p className="text-sm font-normal">Number</p>
                    <div className="w-10 h-0.5 sm:h-1 bg-white rounded-lg mt-2 mb-4"></div>
                    <p className="text-xs pb-2">{info.phone1}</p>
                    <p className="text-xs pb-2">{info.phone2}</p>
                  </div>
                  <div>
                    <p className="text-sm font-normal">Location</p>
                    <div className="w-10 h-0.5 sm:h-1 bg-white rounded-lg mt-2 mb-4"></div>
                    <p className="text-xs pb-2 max-w-40">{info.address}</p>
                   
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
