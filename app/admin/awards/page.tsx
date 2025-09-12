"use client";
import ButtonLink from "@/components/ButtonLink";
import LoadingOverlay from "@/components/LoadingOverlay";
import Pagination from "@/components/Pagination";
import SearchInput from "@/components/SearchInput";
import usePaginationSearch from "@/hook/usePaginationSearch";
import { customFormatDate, monthAndYear } from "@/lib/helps";
import { confirmDialog, errorAlert, successAlert } from "@/lib/swalUtils";
import { AwardProp, MemberProp } from "@/services/api";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaEdit, FaPlusSquare } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";

const page = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState<boolean>(true);
  const [awards, setAwards] = useState<AwardProp[]>([]);
  const { search, setSearch, page, setPage, totalPages, currentData } =
    usePaginationSearch({
      data: awards,
      pageSize: 10,
      searchField: "title",
    });
  useEffect(() => {
    const fetchAwars = async () => {
      try {
        const response = await fetch("/api/admin/awards");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        setAwards(data);
      } catch (error) {
        setError("Failed to fetch awards");
      } finally {
        setLoading(false);
      }
    };
    fetchAwars();
  }, []);

  const handleDelete = async (id: number) => {
    const confirmed = await confirmDialog();
    if (!confirmed) return;
    try {
      setLoading(true);
      const res = await fetch(`/api/admin/award/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (res.ok) {
        successAlert("Item deleted successfully.");
        setAwards((prevAward) => prevAward.filter((award) => award.id !== id));
      } else {
        errorAlert(data.error || "Delete failed.");
      }
      setLoading(false);
    } catch (error) {
      console.error("Delete failed:", error);
      errorAlert("Something went wrong");
    }
  };

  return (
    <section className="py-20">
      <div className="bg-white shadow rounded-lg p-6 w-full mx-auto mainDiv">
        {loading && <LoadingOverlay />}
        {error && <p className="text-red-500">{error}</p>}

        <div className="flex py-2 justify-end">
          <SearchInput
            value={search}
            onChange={setSearch}
            placeholder="Search by title..."
          />
          <ButtonLink url="/admin/awards/create" label="Create" />
        </div>

        <div className="overflow-x-auto w-full tableDiv">
          <table className="min-w-full">
            <thead className="bg-dashboardBg text-secondaryBg py-2 text-xs font-lora w-full">
              <tr className="whitespace-nowrap">
                <th className="px-4 py-2 text-xs font-lora text-left">Date</th>
                <th className="px-4 py-2 text-xs font-lora text-left">Name</th>
                <th className="px-4 py-2 text-xs font-lora text-left">Title</th>
                <th className="px-4 py-2 text-xs font-lora text-left">
                  Department
                </th>
                <th className="px-4 py-2 text-xs font-lora text-left">
                  Created By
                </th>
                <th className="px-4 py-2 text-xs font-lora">Action</th>
              </tr>
            </thead>
            <tbody className="text-xs">
              {currentData.map((award: AwardProp) => (
                <tr
                  key={award.id}
                  className="whitespace-nowrap border-b border-border"
                >
                  <td className="px-4 py-3 text-xs font-lora">
                    {monthAndYear(award.date)}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {award?.member?.name}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">{award.title}</td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {award?.department?.name}
                  </td>

                  <td className="px-4 py-3 text-xs font-lora">
                    {award?.createdBy?.name}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    <div className="flex justify-center gap-x-4">
                      <Link
                        href={`/admin/awards/edit/${award.id}`}
                        className="text-blue-500"
                      >
                        {" "}
                        <FaEdit size={20} />
                      </Link>
                      <button
                        onClick={() => handleDelete(Number(award?.id))}
                        className="text-red-500  hover:text-red-600"
                      >
                        <FaTrash size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination page={page} totalPages={totalPages} setPage={setPage} />
      </div>
    </section>
  );
};

export default page;
