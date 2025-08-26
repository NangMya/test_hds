"use client";
import { adminNavLinks } from "@/components/constant/menus";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";


const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="bg-dashboardBg shadow-sm min-w-44 overflow-hidden">
      <ul className="py-2">
      <li className="px-2 pb-6 mb-6">
        <Image
          src="/logo.svg"
          alt="HDS"
          width={150}
          height={90}
          className="w-[92px] h-[42px] object-cover"
        />
        </li>
        {
          adminNavLinks.map((link) =>{
            return (
              <li key={link.id} className="px-6 pb-6 text-sm cursor-pointer text-secondaryBg hover:text-primary">
              <Link
                href={link.url}
                className={`${pathname.startsWith(link.url) ? 'text-primary' : 'text-secondaryBg'} hover:text-primary` }
              >
                {link.label}
              </Link>
            </li>            
            )
          })
        }
      </ul>
    </div>
  );
};

export default Sidebar;
