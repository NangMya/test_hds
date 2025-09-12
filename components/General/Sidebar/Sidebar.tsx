"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { usePathname } from "next/navigation";
import { adminNavLinks } from "@/components/constant/menus";

export default function Sidebar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleMenu = (label: string) => {
    setOpenMenu(openMenu === label ? null : label);
  };

  return (
    <aside className="min-w-52 bg-white min-h-screen px-4 pb-6 z-20">
      <div className="px-2 pb-4">
        <Logo width="90px" />
      </div>
      <nav className="mt-4">
        <ul className="space-y-2 custom-scroll hover:overflow-y-auto overflow-y-hidden  max-h-screen pb-20  h-full z-20">
          {adminNavLinks.map((item: any) => (
            <li key={item.label}>
              {item.subItems ? (
                <div>
                  <button
                    onClick={() => toggleMenu(item.label)}
                   
                    className={`px-6 py-2 border rounded-lg flex justify-between items-center w-full text-sm cursor-pointer text-secondaryBg hover:text-white ${
                      pathname.startsWith(item.url)
                        ? "text-white bg-primary"
                        : "text-secondaryBg"
                    } hover:text-primary hover:bg-primary`}
                  >
                    <span className="flex items-center gap-2">
                      {item.label}
                    </span>
                    <span>{openMenu === item.label ? "−" : "+"}</span>
                  </button>
                  {openMenu === item.label && (
                    <ul className="ml-4 mt-1 space-y-1">
                      {item.subItems.map((sub: any) => (
                        <li key={sub.label}>
                          <Link
                            href={sub.href}
                           className={`px-6 py-2 border rounded-lg flex justify-between items-center w-full text-sm cursor-pointer text-secondaryBg hover:text-white ${
                      pathname.startsWith(sub.href)
                        ? "text-white bg-primary"
                        : "text-secondaryBg"
                    } hover:text-primary hover:bg-primary`}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href || "#"}
                  className={`px-6 py-2 border rounded-lg flex justify-between items-center w-full text-sm cursor-pointer text-secondaryBg hover:text-white ${
                      pathname.startsWith(item.href)
                        ? "text-white bg-primary"
                        : "text-secondaryBg"
                    } hover:text-primary hover:bg-primary`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
