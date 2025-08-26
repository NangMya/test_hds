"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  FaEllipsisVertical,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Link from "next/link";
import { CgClose } from "react-icons/cg";
import { navLinks } from "@/components/constant/menus";
import LoadingOverlay from "@/components/LoadingOverlay";

type Props = {
  openNav: () => void;
  closeNav: () => void;
};
const Nav = ({ openNav, closeNav }: Props) => {
  const [openNavBar, setOpenNavBar] = useState(false);
  const [changeColor, setChangeColor] = useState(false);
  const [loading, setLoading] = useState(false);

  const navOpen = openNavBar ? "translate-x-0" : "-translate-x-full";

  useEffect(() => {
    const toggleChangeColor = () => {
      if (window.scrollY > 30) {
        setChangeColor(true);
      } else {
        setChangeColor(false);
      }
    };
    window.addEventListener("scroll", toggleChangeColor);
    return () => window.removeEventListener("scroll", toggleChangeColor);
  }, []);

  return (
    <>
    {
      loading && <LoadingOverlay/>
    }
      <div className="transition-all duration-200 h-14 z-[100] w-full fixed flex items-center">
        <div className="flex flex-row items-center justify-between w-[90%] mx-auto">
          <Link href="/" prefetch={true} onClick={() => setLoading(true)}>
            <Image
              priority={true}
              src="/hds.png"
              alt="HDS"
              width={150}
              height={90}
              className="w-[92px] h-[42px] object-cover cursor-pointer"
            />
          </Link>

          <div className="flex flex-row items-center justify-between gap-4">
            {/* <LanguageSwitcher changeColor={changeColor} /> */}
            <FaEllipsisVertical
              onClick={() => setOpenNavBar(true)}
              className={`${
                changeColor ? "text-black" : "text-white"
              } cursor-pointer`}
            />
          </div>
        </div>
      </div>

      <div>
        <div
          className={`fixed inset-0 bg-black transition-opacity duration-500 ease-in-out ${
            openNavBar
              ? "opacity-70 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          } z-[1001]`}
          onClick={() => setOpenNavBar(false)}
        />

        <div
          className={`fixed top-0 left-0 h-full bg-[#F6F6F6] w-[100%] md:w-[80%] grid grid-cols-2 transition-transform duration-500 ease-in-out z-[1050] ${navOpen}`}
        >
          <div className="flex items-center justify-center">
            <Image
              priority={true}
              src="/images/nav_image.webp"
              alt="Illustration"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>

          <div className="relative flex flex-col justify-center p-6 text-gray-800">
            <CgClose
              onClick={() => setOpenNavBar(false)}
              className="absolute top-4 right-6 w-8 h-8 text-black rounded-full border p-1 cursor-pointer"
            />

            <nav className="space-y-6">
              {navLinks.map((item) => (
                <div key={item.id} className="border-b border-gray-300 pb-4">
                  <Link
                    href={item.url || "#"}
                    prefetch={true}
                    onClick={() => {
                      setLoading(true);
                      setOpenNavBar(false);
                    }}
                    className="flex justify-between items-center uppercase font-semibold"
                  >
                    <span>{item.label}</span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs ${
                        item.id % 2 == 1 ? "bg-[#F26729]" : "bg-primary"
                      }`}
                    >
                      <span className="-rotate-45 pb-1">&#8594;</span>
                    </div>
                  </Link>

                  {item.subMenu && (
                    <div className="ml-4 mt-2 space-y-1 text-xs text-gray-500">
                      {item.subMenu.map((sub) => (
                        <Link
                          prefetch={true}
                          key={sub.id}
                          href={sub.url}
                          onClick={() => {
                            setLoading(true);
                            setOpenNavBar(false);
                          }}
                          className="block py-1"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="mt-10 flex gap-4 text-xl text-gray-700">
              <Link href="#" prefetch={true} onClick={() => setLoading(true)}>
                <FaLinkedin size={20} />
              </Link>
              <Link href="#" prefetch={true} onClick={() => setLoading(true)}>
                <FaFacebook size={20} />
              </Link>
              <Link href="#" prefetch={true} onClick={() => setLoading(true)}>
                <FaInstagram size={20} />
              </Link>
              <Link href="#" prefetch={true} onClick={() => setLoading(true)}>
                <FaYoutube size={20} />
              </Link>
              <Link href="#" prefetch={true} onClick={() => setLoading(true)}>
                <FaTiktok size={20} />
              </Link>
              <Link href="#" prefetch={true} onClick={() => setLoading(true)}>
                <FaTelegram size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
