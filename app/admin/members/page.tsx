"use client";
import ButtonLink from "@/components/ButtonLink";
import LoadingOverlay from "@/components/LoadingOverlay";
import Pagination from "@/components/Pagination";
import SearchInput from "@/components/SearchInput";
import usePaginationSearch from "@/hook/usePaginationSearch";
import { confirmDialog, errorAlert, successAlert } from "@/lib/swalUtils";
import { MemberProp } from "@/services/api";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";

const page = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState<boolean>(true);
  const [members, setMembers] = useState<MemberProp[]>([]);
const { search, setSearch, page, setPage, totalPages, currentData } =
    usePaginationSearch({
      data: members,
      pageSize: 10,
      searchField: "name",
    });
  useEffect(() => {
    const fetchMemebrs = async () => {
      try {
        const response = await fetch("/api/admin/member");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        setMembers(data);
      } catch (error) {
        setError("Failed to fetch department");
      } finally {
        setLoading(false);
      }
    };
    fetchMemebrs();
  }, []);

  const handleDelete = async (id: number) => {
    const confirmed = await confirmDialog();
    if (!confirmed) return;
    try {
      setLoading(true);
      const res = await fetch(`/api/admin/member/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (res.ok) {
        successAlert("Item deleted successfully.");
        setMembers((prevMember) =>
          prevMember.filter((member) => member.id !== id)
        );
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
          <ButtonLink url="/admin/members/create" label="Create" />
        </div>

        <div className="overflow-x-auto w-full tableDiv">
          <table className="min-w-full">
            <thead className="bg-dashboardBg text-secondaryBg py-2 text-sm font-lora w-full">
              <tr className="whitespace-nowrap">
                <th className="px-4 py-2 text-xs font-lora text-left">Profile</th>
                <th className="px-4 py-2 text-xs font-lora text-left">Name</th>
                <th className="px-4 py-2 text-xs font-lora text-left">Position</th>
                <th className="px-4 py-2 text-xs font-lora text-left">Department</th>
                <th className="px-4 py-2 text-xs font-lora text-left">Created By</th>
                <th className="px-4 py-2 text-xs font-lora">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((member: MemberProp) => (
                <tr
                  key={member.id}
                  className="whitespace-nowrap border-b border-border"
                >
                    <td className="px-4 py-3 text-xs font-lora">
                    <Image src={member.profile as string} alt={member.name} width={50} height={50} className="object-contain" />
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {member.name}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {member.position}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {member?.department?.name}
                  </td>

                  <td className="px-4 py-3 text-xs font-lora">
                    {member?.createdBy?.name}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    <div className="flex justify-center gap-x-4">
                      <Link
                        href={`/admin/members/edit/${member.id}`}
                        className="text-blue-500"
                      >
                        {" "}
                        <FaEdit size={20} />
                      </Link>
                      <button
                        onClick={() => handleDelete(Number(member?.id))}
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
