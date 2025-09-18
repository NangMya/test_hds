"use client";

import Image from "next/image";
import React, { useEffect, useState, useMemo } from "react";
import {
  FaEllipsisVertical,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";
import Link from "next/link";
import { CgClose } from "react-icons/cg";
import LoadingOverlay from "@/components/LoadingOverlay";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import { Info } from "@/services/api"; 
import { navLinks } from "@/components/constant/menus";

const socialMediaIcons: { [key: string]: React.ElementType } = {
  linkedin: FaLinkedin,
  facebook: FaFacebook,
  instagram: FaInstagram,
  youtube: FaYoutube,
  tiktok: FaTiktok,
  telegram: FaTelegram,
};

type SocialLink = {
  name: string;
  url: string;
};

type NavProps = {
  openNav?: () => void;
  closeNav?: () => void;
  info?: Info;
};

const Nav = ({ openNav, closeNav, info }: NavProps) => {
  const [openNavBar, setOpenNavBar] = useState(false);
  const [loading, setLoading] = useState(false);
  const pathName = usePathname();
  const isHomePage = pathName === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const navOpen = openNavBar ? "translate-x-0" : "-translate-x-full";

  const socialLinks = useMemo(() => {
    const links: SocialLink[] = [];
    if (!info) {
      return links;
    }

    if (info.linkedin_url)
      links.push({ name: "linkedin", url: info.linkedin_url });
    if (info.facebook_url)
      links.push({ name: "facebook", url: info.facebook_url });
    if (info.instagram_url)
      links.push({ name: "instagram", url: info.instagram_url });
    if (info.youtube_url)
      links.push({ name: "youtube", url: info.youtube_url });
    if (info.tiktok_url) links.push({ name: "tiktok", url: info.tiktok_url });
    if (info.telegram_url)
      links.push({ name: "telegram", url: info.telegram_url });

    return links;
  }, [info]); 

  useEffect(() => {
    const toggleChangeColor = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", toggleChangeColor);
    return () => window.removeEventListener("scroll", toggleChangeColor);
  }, []);

 
  useEffect(() => {
    const toggleChangeColor = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", toggleChangeColor);
    return () => window.removeEventListener("scroll", toggleChangeColor);
  }, []);

  const navClass =
    isHomePage && !isScrolled
      ? " border-b-0"
      : "bg-white border-b-[1px] shadow";
  const logoColor = isHomePage && !isScrolled ? "#FFFFFF" : "#892A51";
  const color = isHomePage && !isScrolled ? "text-white" : "text-primary";


  return (
    <>
      {loading && <LoadingOverlay />}
    <nav  className={` transition-all duration-500 h-14 z-[100] w-full fixed flex items-center    ${navClass}`}>
        <div className="flex flex-row items-center justify-between w-[90%] mx-auto">
          <Link href="/">
            <Logo color={logoColor} />
          </Link>
          <div className="flex flex-row items-center justify-between gap-4">
            <FaEllipsisVertical
              onClick={() => setOpenNavBar(true)}
              className={`${color} cursor-pointer`}
            />
          </div>
        </div>
      </nav>

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
          className={`fixed top-0 left-0 h-full bg-[#F6F6F6] w-[100%] sm:w-[80%] grid grid-cols-1 sm:grid-cols-2 transition-transform duration-500 ease-in-out z-[1050] ${navOpen}`}
        >
          <div className=" items-center justify-center hidden sm:flex">
            <Image
              priority={true}
              src="/images/nav_image.webp"
              alt="Illustration"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
          <div className="relative flex flex-col justify-start sm:justify-center p-6 text-gray-800">
            <CgClose
              onClick={() => setOpenNavBar(false)}
              className="absolute top-4 right-6 w-8 h-8 text-black rounded-full border p-1 cursor-pointer"
            />
            <nav className="space-y-6 mt-12 sm:mt-0">
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
                  > <span>{item.label}</span>               
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs ${item.id % 2 == 1 ? "bg-[#F26729]" : "bg-primary"
                      }`}
                    > <span className="-rotate-45 pb-1">&#8594;</span> </div>
                  </Link>
                  {item.subMenu && (
                    <div className="ml-4 mt-2 space-y-1 text-xs text-gray-500">
                      {item.subMenu.map((sub: any) => (
                        <Link
                          prefetch={true}
                          key={sub.id}
                          href={sub.url}
                          onClick={() => {
                            setLoading(true);
                            setOpenNavBar(false);
                          }}
                          className="block py-1"
                        > {sub.label}                 
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            {/* Social Links */}
            <div className="mt-10 flex gap-4 text-xl text-gray-700 absolute bottom-4 sm:relative">
              {/* FIX: Ensure `socialLinks` is not empty before mapping */}
              {socialLinks.length > 0 &&
                socialLinks.map((link) => {
                  const Icon = socialMediaIcons[link.name];
                  if (!Icon) return null;

                  return (
                    <Link
                      key={link.name}
                      href={link.url}
                      prefetch={true}
                      onClick={() => setLoading(true)}
                    >
                      <Icon size={20} />
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
