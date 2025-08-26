"use client";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import LoadingOverlay from "@/components/LoadingOverlay";
import { customFormatDate } from "@/lib/helps";
import { confirmDialog, errorAlert, successAlert } from "@/lib/swalUtils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaEdit, FaPlusSquare } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";


type WorkProps = {
  id: number;
  date: string;
  title_en: string;
  title_km: string;
  description_en: string;
  description_km: string;
  challenges_en: string;
  challenges_km: string;
  strategy_en: string;
  strategy_km: string;
  takeaway_en: string;
  takeaway_km: string;
  image: string;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
};
const page = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState<boolean>(true);
  const [works, setWorks] = useState<WorkProps[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchWroks = async () => {
      try {
        const response = await fetch("/api/our_work");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setWorks(data);
      } catch (error) {
        setError("Failed to fetch work");
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
        const res = await fetch(`/api/our_work/${id}`, {
          method: "DELETE",
        });
  
        const data = await res.json();
  
        if (res.ok) {
          successAlert("Item deleted successfully.");
          setWorks(prevWorks => prevWorks.filter(work => work.id !== id));
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
    <DashboardLayout>
      <div className="bg-white shadow rounded-lg p-6 w-full max-w-7xl mx-auto mainDiv">
        {loading && <LoadingOverlay />}
        {error && <p className="text-red-500">{error}</p>}

        <div className="flex py-2">
          <Link
            href="/admin/our_works/create"
            className="py-2 px-4 rounded-lg bg-secondaryBg text-white border border-primary hover:bg-transparent hover:text-primary text-xs"
          >
            <FaPlusSquare size={20} className="inline pb-1" /> Create
          </Link>
        </div>

        <div className="overflow-x-auto  w-[1000px] tableDiv">
          <table className="min-w-full">
            <thead className="bg-dashboardBg text-secondaryBg py-2 text-sm font-lora">
              <tr className="whitespace-nowrap">
                <th className="px-4 py-2 text-sm font-lora">Date</th>
                <th className="px-4 py-2 text-sm font-lora">Title EN</th>
                <th className="px-4 py-2 text-sm font-lora">Title KM</th>
                <th className="px-4 py-2 text-sm font-lora">Description EN</th>
                <th className="px-4 py-2 text-sm font-lora">Description KM</th>
                <th className="px-4 py-2 text-sm font-lora">Challenges EN</th>
                <th className="px-4 py-2 text-sm font-lora">Challenges KM</th>
                <th className="px-4 py-2 text-sm font-lora">Strategy EN</th>
                <th className="px-4 py-2 text-sm font-lora">Strategy KM</th>
                <th className="px-4 py-2 text-sm font-lora">Takeaway EN</th>
                <th className="px-4 py-2 text-sm font-lora">Takeaway KM</th>
                <th className="px-4 py-2 text-sm font-lora">Image</th>
                <th className="px-4 py-2 text-sm font-lora">Created By</th>
                <th className="px-4 py-2 text-sm font-lora">Action</th>
              </tr>
            </thead>
            <tbody>
              {works.map((work: WorkProps) => (
                <tr
                  key={work.id}
                  className="whitespace-nowrap border-b border-border"
                >
                  <td className="px-4 py-3 text-xs font-lora">
                    {customFormatDate(work.date)}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {work.title_en}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {work.title_km}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {work.description_en}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {work.description_km}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {work.challenges_en}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {work.challenges_km}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {work.strategy_en}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {work.strategy_km}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {work.takeaway_en}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {work.takeaway_km}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {work.image ? (
                      <Image
                        src={work.image}
                        alt={work.title_en}
                        width={80}
                        height={80}
                      />
                    ) : null}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {work.created_by}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    <div className="flex justify-center gap-x-4">

                    <Link
                      href={`/admin/our_works/edit/${work.id}`}
                      className="text-blue-500"
                    >
                      {" "}
                      <FaEdit size={20} />
                    </Link>
                    <button
                      onClick={() => handleDelete(work.id)}
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
    </DashboardLayout>
  );
};

export default page;
