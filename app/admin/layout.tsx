// THE CORRECTED CODE TO USE
"use client";

import DashboardHeader from "@/components/General/DashboardHeader";
import Sidebar from "@/components/General/Sidebar/Sidebar";
import LoadingOverlay from "@/components/LoadingOverlay";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true); // Start in a loading state
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem("auth-token");
    if (storedToken) {
      setToken(storedToken);
    } else {
      router.push("/auth/login");
    }
    setLoading(false); 
  }, [router]);

  if (loading) {
    return (
        <LoadingOverlay/>
    );
  }
  if (!token) {
    return null;
  }
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
