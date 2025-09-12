"use client";
import ButtonLink from "@/components/ButtonLink";
import LoadingOverlay from "@/components/LoadingOverlay";
import Pagination from "@/components/Pagination";
import SearchInput from "@/components/SearchInput";
import usePaginationSearch from "@/hook/usePaginationSearch";
import { customFormatDate } from "@/lib/helps";
import { confirmDialog, errorAlert, successAlert } from "@/lib/swalUtils";
import { JobProp } from "@/services/api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaEdit, FaPlusSquare } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";

const page = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState<boolean>(true);
  const [jobs, setJobs] = useState<JobProp[]>([]);
  const { search, setSearch, page, setPage, totalPages, currentData } =
    usePaginationSearch({
      data: jobs,
      pageSize: 10,
      searchField: "position",
    });

  useEffect(() => {
    const fetchWroks = async () => {
      try {
        const response = await fetch("/api/admin/job");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        setError("Failed to fetch job");
      } finally {
        setLoading(false);
      }
    };
    fetchWroks();
  }, []);

  const handleDelete = async (id: number) => {
    const confirmed = await confirmDialog();

    if (!confirmed) return;

    try {
      setLoading(true);
      const res = await fetch(`/api/admin/job/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (res.ok) {
        successAlert("Item deleted successfully.");
        setJobs((preJobs) => preJobs.filter((job) => job.id !== id));
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
      <div className="bg-white shadow rounded-lg p-6 w-full max-w-7xl mx-auto mainDiv">
        {loading && <LoadingOverlay />}
        {error && <p className="text-red-500">{error}</p>}

        <div className="flex py-2 justify-end">
          <SearchInput
            value={search}
            onChange={setSearch}
            placeholder="Search by position..."
          />
          <ButtonLink url="/admin/jobs/create" label="Create" />
        </div>

        <div className="overflow-x-auto  w-[1000px] tableDiv">
          <table className="min-w-full">
            <thead className="bg-dashboardBg text-secondaryBg py-2 text-sm font-lora">
              <tr className="whitespace-nowrap">
                <th className="px-4 py-2 text-xs font-lora">Open Date</th>
                <th className="px-4 py-2 text-xs font-lora">Close Date</th>
                <th className="px-4 py-2 text-xs font-lora">Position</th>
                <th className="px-4 py-2 text-xs font-lora">Description</th>
                <th className="px-4 py-2 text-xs font-lora">Department</th>
                <th className="px-4 py-2 text-xs font-lora">Level</th>
                <th className="px-4 py-2 text-xs font-lora">Experiences</th>
                <th className="px-4 py-2 text-xs font-lora">Overview</th>
                <th className="px-4 py-2 text-xs font-lora">Job Type</th>
                <th className="px-4 py-2 text-xs font-lora">Salary</th>
                <th className="px-4 py-2 text-xs font-lora">Duties</th>
                <th className="px-4 py-2 text-xs font-lora">Requirements</th>
                <th className="px-4 py-2 text-xs font-lora">Gender</th>
                <th className="px-4 py-2 text-xs font-lora">Status</th>
                <th className="px-4 py-2 text-xs font-lora">Created By</th>
                <th className="px-4 py-2 text-xs font-lora">Action</th>
              </tr>
            </thead>
            <tbody className="text-xs">
              {currentData.map((job: JobProp) => (
                <tr
                  key={job.id}
                  className="whitespace-nowrap border-b border-border"
                >
                  <td className="px-4 py-3 text-xs font-lora">
                    {customFormatDate(job.open_date)}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {customFormatDate(job.close_date)}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {job.position}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {job.description}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {job?.department?.name}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora capitalize">
                    {job.level}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {job.experiences}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {job.overview}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {job.job_type}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">{job.salary}</td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {job.duties.length > 35
                      ? job.duties.substring(0, 35) + "..."
                      : job.duties}
                  </td>{" "}
                  <td className="px-4 py-3 text-xs font-lora">
                    {job.requirements.length > 35
                      ? job.requirements.substring(0, 35) + "..."
                      : job.requirements}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora capitalize">
                    {job.gender}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora capitalize">
                    {job.status}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {job.createdBy?.name}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    <div className="flex justify-center gap-x-4">
                      <Link
                        href={`/admin/jobs/edit/${job.id}`}
                        className="text-blue-500"
                      >
                        {" "}
                        <FaEdit size={20} />
                      </Link>
                      <button
                        onClick={() => handleDelete(Number(job.id))}
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
