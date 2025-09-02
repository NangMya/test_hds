"use client";
import LoadingOverlay from "@/components/LoadingOverlay";
import { customFormatDate } from "@/lib/helps";
import { confirmDialog, errorAlert, successAlert } from "@/lib/swalUtils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaEdit, FaPlusSquare } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";


type JobProps = {
  id: number;
  open_date: string;
  close_date: string;
  position_en: string;
  position_km: string;
  description_en: string;
  description_km: string;
  department_en: string;
  department_km: string;
  experiences_en: string;
  experiences_km: string;
  level_en: string;
  level_km: string;
  overview_en: string;
  overview_km: string;
  job_type_en:string;
  job_type_km:string;
  salary_en: string;
  salary_km:string;
  duties_en:string;
  duties_km:string;
  requirements_en:string;
  requirements_km:string;
  gender:string;
  status:string;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
};
const page = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState<boolean>(true);
  const [jobs, setJobs] = useState<JobProps[]>([]);
  const router = useRouter();

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
  }, [router]);

  const handleDelete = async (id: number) => {
    const confirmed = await confirmDialog({
      title: "Delete this item?",
      text: "This action cannot be undone.",
      confirmText: "Delete",
    });
  
    if (!confirmed) return;
  
      try {
        setLoading(true);
        const res = await fetch(`/api/admin/job/${id}`, {
          method: "DELETE",
        });
  
        const data = await res.json();
  
        if (res.ok) {
          successAlert("Item deleted successfully.");
          setJobs(preJobs => preJobs.filter(job => job.id !== id));
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
      <div className="bg-white shadow rounded-lg p-6 w-full max-w-7xl mx-auto mainDiv">
        {loading && <LoadingOverlay />}
        {error && <p className="text-red-500">{error}</p>}

        <div className="flex py-2">
          <Link
            href="/admin/jobs/create"
            className="py-2 px-4 rounded-lg bg-secondaryBg text-white border border-primary hover:bg-transparent hover:text-primary text-xs"
          >
            <FaPlusSquare size={20} className="inline pb-1" /> Create
          </Link>
        </div>

        <div className="overflow-x-auto  w-[1000px] tableDiv">
          <table className="min-w-full">
            <thead className="bg-dashboardBg text-secondaryBg py-2 text-sm font-lora">
              <tr className="whitespace-nowrap">
                <th className="px-4 py-2 text-sm font-lora">Open Date</th>
                <th className="px-4 py-2 text-sm font-lora">Close Date</th>
                <th className="px-4 py-2 text-sm font-lora">Position EN</th>
                <th className="px-4 py-2 text-sm font-lora">Position KM</th>
                <th className="px-4 py-2 text-sm font-lora">Description EN</th>
                <th className="px-4 py-2 text-sm font-lora">Description KM</th>
                <th className="px-4 py-2 text-sm font-lora">Department EN</th>
                <th className="px-4 py-2 text-sm font-lora">Department KM</th>
                <th className="px-4 py-2 text-sm font-lora">Level EN</th>
                <th className="px-4 py-2 text-sm font-lora">Level KM</th>
                <th className="px-4 py-2 text-sm font-lora">Experiences EN</th>
                <th className="px-4 py-2 text-sm font-lora">Experiences KM</th>
                <th className="px-4 py-2 text-sm font-lora">Overview EN</th>
                <th className="px-4 py-2 text-sm font-lora">Overview KM</th>
                <th className="px-4 py-2 text-sm font-lora">Job Type EN</th>
                <th className="px-4 py-2 text-sm font-lora">Job Type KM</th>
                <th className="px-4 py-2 text-sm font-lora">Salary EN</th>
                <th className="px-4 py-2 text-sm font-lora">Salary KM</th>
                <th className="px-4 py-2 text-sm font-lora">Duties EN</th>
                <th className="px-4 py-2 text-sm font-lora">Duties KM</th>
                <th className="px-4 py-2 text-sm font-lora">Requirements EN</th>
                <th className="px-4 py-2 text-sm font-lora">Requirements KM</th>
                <th className="px-4 py-2 text-sm font-lora">Gender</th>
                <th className="px-4 py-2 text-sm font-lora">Status</th>
                <th className="px-4 py-2 text-sm font-lora">Created By</th>
                <th className="px-4 py-2 text-sm font-lora">Action</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job: JobProps) => (
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
                    {job.position_en}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {job.position_km}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {job.description_en}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {job.description_km}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {job.department_en}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {job.department_km}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {job.level_en}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {job.level_km}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {job.experiences_en}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {job.experiences_km}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {job.overview_en}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {job.overview_km}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {job.job_type_en}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {job.job_type_km}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {job.salary_en}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {job.salary_km}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {job.duties_en}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {job.duties_km}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {job.requirements_en}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {job.requirements_km}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {job.gender}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {job.status}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {job.created_by}
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
                      onClick={() => handleDelete(job.id)}
                      className="text-red-500  hover:text-red-600"
                    >
                      <FaTrash size={20}/>
                    </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  );
};

export default page;
