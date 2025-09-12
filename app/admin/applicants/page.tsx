"use client";

import LoadingOverlay from "@/components/LoadingOverlay";
import Pagination from "@/components/Pagination";
import SearchInput from "@/components/SearchInput";
import usePaginationSearch from "@/hook/usePaginationSearch";
import { ApplicantProp } from "@/services/api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";

const Page = () => {
  const router = useRouter();
  const [applicants, setApplicants] = useState<ApplicantProp[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const { search, setSearch, page, setPage, totalPages, currentData } =
    usePaginationSearch({
      data: applicants,
      pageSize: 10,
      searchField: "name",
    });

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
    <section className="py-20">
      <div className="bg-white shadow rounded-lg p-6 w-full max-w-7xl mx-auto mainDiv">
        {loading && <LoadingOverlay />}
        {error && <p className="text-red-500">{error}</p>}
        <div className="flex py-2 justify-end">
          <SearchInput
            value={search}
            onChange={setSearch}
            placeholder="Search by name..."
          />
        </div>
        <div className="overflow-x-auto  w-[1000px] tableDiv">
          <table className="min-w-full">
            <thead className="bg-dashboardBg text-secondaryBg py-2 text-xs font-lora">
              <tr className="whitespace-nowrap">
                <th className="px-4 py-2 text-xs font-lora">Name</th>
                <th className="px-4 py-2 text-xs font-lora">Position</th>
                <th className="px-4 py-2 text-xs font-lora">Email</th>
                <th className="px-4 py-2 text-xs font-lora">Phone</th>
                <th className="px-4 py-2 text-xs font-lora">Address</th>
                <th className="px-4 py-2 text-xs font-lora">Status</th>
                <th className="px-4 py-2 text-xs font-lora">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((applicant: ApplicantProp) => (
                <tr
                  key={applicant.id}
                  className="whitespace-nowrap border-b border-border text-center"
                >
                  <td className="px-4 py-3 text-xs font-lora">
                    {applicant.name}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {applicant.job?.position}
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
        <Pagination page={page} totalPages={totalPages} setPage={setPage}/> 
      </div>
    </section>
  );
};

export default Page;
