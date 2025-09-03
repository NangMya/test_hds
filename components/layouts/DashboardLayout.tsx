// // THE CORRECTED CODE TO USE
// "use client";

// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import DashboardHeader from "../General/DashboardHeader";
// import Sidebar from "../General/Sidebar/Sidebar";
// import LoadingOverlay from "../LoadingOverlay";

// const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
//   const [loading, setLoading] = useState(true); // Start in a loading state
//   const [token, setToken] = useState<string | null>(null);
//   const router = useRouter();

//   useEffect(() => {
//     const storedToken = localStorage.getItem("auth-token");
//     if (storedToken) {
//       setToken(storedToken);
//     } else {
//       // If no token, redirect. The component will return null until the redirect happens.
//       router.push("/auth/login");
//     }
//     setLoading(false); // We have now checked localStorage, so stop loading
//   }, [router]);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <LoadingOverlay/>
//       </div>
//     );
//   }

//   // If we've finished loading and still don't have a token, return null.
//   // This is a safety check and will only be true for a brief moment before the redirect occurs.
//   if (!token) {
//     return null;
//   }

//   // If all checks pass, render the actual layout.
//   return (
//     <div className="min-h-svh flex overflow-hidden h-screen">
//       <Sidebar />
//       <div className="flex-1 flex flex-col">
//         <DashboardHeader />
//         <main className="flex-1">
//           <div className="bg-gray-100 py-24 h-screen overflow-y-auto overflow-x-hidden">
//             <div className="max-w-7xl mx-auto overflow-x-hidden px-4 sm:px-6 lg:px-8">
//               {children}
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;