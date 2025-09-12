"use client";
import ButtonLink from "@/components/ButtonLink";
import LoadingOverlay from "@/components/LoadingOverlay";
import Pagination from "@/components/Pagination";
import SearchInput from "@/components/SearchInput";
import usePaginationSearch from "@/hook/usePaginationSearch";
import { customFormatDate } from "@/lib/helps";
import { confirmDialog, errorAlert, successAlert } from "@/lib/swalUtils";
import { AdminProp } from "@/services/api";
import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa6";

const page = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState<boolean>(true);
  const [admins, setAdmins] = useState<AdminProp[]>([]);
  const { search, setSearch, page, setPage, totalPages, currentData } =
    usePaginationSearch({
      data: admins,
      pageSize: 10,
      searchField: "name",
    });
  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const response = await fetch("/api/admin/admins");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        setAdmins(data);
      } catch (error) {
        setError("Failed to fetch awards");
      } finally {
        setLoading(false);
      }
    };
    fetchAdmins();
  }, []);

  const handleDelete = async (id: number) => {
    const confirmed = await confirmDialog();
    if (!confirmed) return;
    try {
      setLoading(true);
      const res = await fetch(`/api/admin/admins/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (res.ok) {
        successAlert("Item deleted successfully.");
        setAdmins((prevAdmin) => prevAdmin.filter((admin) => admin.id !== id));
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
            placeholder="Search by name..."
          />
        </div>

        <div className="overflow-x-auto w-full tableDiv">
          <table className="min-w-full">
            <thead className="bg-dashboardBg text-secondaryBg py-2 text-xs font-lora w-full">
              <tr className="whitespace-nowrap">
                <th className="px-4 py-2 text-xs font-lora text-left">Name</th>
                <th className="px-4 py-2 text-xs font-lora text-left">Email</th>
                
                <th className="px-4 py-2 text-xs font-lora text-left">
                  Created Time
                </th>
                <th className="px-4 py-2 text-xs font-lora">Action</th>
              </tr>
            </thead>
            <tbody className="text-xs">
              {currentData.map((admin: AdminProp) => (
                <tr
                  key={admin.id}
                  className="whitespace-nowrap border-b border-border"
                >
                    <td className="px-4 py-3 text-xs font-lora">
                    {admin.name}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {admin.email}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {customFormatDate(admin?.created_at)}
                  </td>
                  
                  <td className="px-4 py-3 text-xs font-lora">
                    <div className="flex justify-center gap-x-4">
                     
                      <button
                        onClick={() => handleDelete(Number(admin?.id))}
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
