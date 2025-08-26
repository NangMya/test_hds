"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import DashboardHeader from "../General/DashboardHeader";
import Sidebar from "../General/Sidebar/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();
  useEffect(() => {
    setMounted(true);
  }, []);

  
  useEffect(() => {
    const storedToken = localStorage.getItem("auth-token");
    setToken(storedToken);
    if (!storedToken) {
      router.push("/admin/login");
    }
  }, [router]);

  if (token === null) {
    return <div></div>;
  }
  if (!mounted) return null;
  return (
    <div className="min-h-svh flex overflow-hidden h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1">
          <div className="bg-gray-100 py-24 h-screen overflow-y-auto overflow-x-hidden">
            <div className="max-w-7xl mx-auto overflow-x-hidden px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
