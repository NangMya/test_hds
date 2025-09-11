"use client";
import { adminNavLinks } from "@/components/constant/menus";
import Logo from "@/components/Logo";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="bg-white shadow-sm min-w-48 z-10">
      <div className="px-2 pb-4">
        <Logo width="90px" />
      </div>
      <div className="custom-scroll hover:overflow-y-auto overflow-y-hidden  max-h-screen pb-20  h-full z-20">
        <ul className="mx-4">
          {adminNavLinks.map((link) => {
            return (
              <li key={link.id} className="mb-4 w-full">
                <Link
                  href={link.url}
                  className={`px-6 py-2 border rounded-lg block w-full text-sm cursor-pointer text-secondaryBg hover:text-white ${
                    pathname.startsWith(link.url)
                      ? "text-white bg-primary"
                      : "text-secondaryBg"
                  } hover:text-primary hover:bg-primary`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
