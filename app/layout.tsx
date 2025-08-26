"use client";

import "./globals.css";
import { usePathname } from "next/navigation";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdminRoute = pathname.includes("admin");

  return (
    <html lang="en">
      <body className={`antialiased overflow-x-hidden font-graphik`}>
        {children}
      </body>
    </html>
  );
}
