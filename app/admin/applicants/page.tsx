"use client"; 

import LoadingOverlay from "@/components/LoadingOverlay";
import Link from "next/link";
import { useRouter } from "next/navigation"; 
import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";

type ApplicantProps = {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  status: string;
  created_at: string;
  updated_at: string;
};

const Page = () => {
  const router = useRouter();
  const [applicants, setApplicants] = useState<ApplicantProps[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true); 

  useEffect(() => {
  
    const fetchApplicants = async () => {
      try {
        const response = await fetch("/api/admin/applicant");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setApplicants(data);
      } catch (err) {
        console.error(err); 
        setError("Failed to fetch messages");
      } finally {
        setLoading(false); 
      }
    };

    fetchApplicants();
  }, [router]);


  return (
    <section>
    <div className="bg-white shadow rounded-lg p-6 w-full max-w-7xl mx-auto mainDiv">
      {loading && <LoadingOverlay />}
      {error && <p className="text-red-500">{error}</p>}

      <div className="overflow-x-auto  w-[1000px] tableDiv">
        <table className="min-w-full">
          <thead className="bg-dashboardBg text-secondaryBg py-2 text-sm font-lora">
            <tr className="whitespace-nowrap">
              <th className="px-4 py-2 text-sm font-lora">Name</th>
              <th className="px-4 py-2 text-sm font-lora">Email</th>
              <th className="px-4 py-2 text-sm font-lora">Phone</th>
              <th className="px-4 py-2 text-sm font-lora">Address</th>
              <th className="px-4 py-2 text-sm font-lora">Status</th>
              <th className="px-4 py-2 text-sm font-lora">Action</th>
            </tr>
          </thead>
          <tbody>
            {applicants.map((applicant: ApplicantProps) => (
              <tr
                key={applicant.id}
                className="whitespace-nowrap border-b border-border text-center"
              >
               
                <td className="px-4 py-3 text-xs font-lora">
                  {applicant.name}
                </td>
                <td className="px-4 py-3 text-xs font-lora">
                  {applicant.email}
                </td>
                <td className="px-4 py-3 text-xs font-lora">
                  {applicant.phone}
                </td>
                <td className="px-4 py-3 text-xs font-lora">
                  {applicant.address}
                </td>
                <td className="px-4 py-3 text-xs font-lora">
                    <span className="text-xs bg-blue-100 text-blue-500 px-2 py-1 border border-blue-500 rounded">
                  {applicant.status}
                    </span>
                </td>
            
                <td className="px-4 py-3 text-xs font-lora">
                  <div className="flex justify-center gap-x-4">

                  <Link
                    href={`/admin/applicants/edit/${applicant.id}`}
                    className="text-blue-500"
                  >
                    {" "}
                    <FaEdit size={20} />
                  </Link>
                  
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
  );
};

export default Page;
