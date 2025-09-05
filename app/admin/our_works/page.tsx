"use client";
import ButtonLink from "@/components/ButtonLink";
import LoadingOverlay from "@/components/LoadingOverlay";
import { customFormatDate } from "@/lib/helps";
import { confirmDialog, errorAlert, successAlert } from "@/lib/swalUtils";
import { WorkProp } from "@/services/api";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaEdit, FaPlusSquare } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";



const page = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState<boolean>(true);
  const [works, setWorks] = useState<WorkProp[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchWroks = async () => {
      try {
        const response = await fetch("/api/admin/our_work");
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
        const res = await fetch(`/api/admin/our_work/${id}`, {
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
    <section>
      <div className="bg-white shadow rounded-lg p-6 w-full max-w-7xl mx-auto mainDiv">
        {loading && <LoadingOverlay />}
        {error && <p className="text-red-500">{error}</p>}

         <div className="flex py-2 justify-end">
          <ButtonLink url="/admin/our_works/create" label="Create" />
        </div>

        <div className="overflow-x-auto  w-[1000px] tableDiv">
          <table className="min-w-full">
            <thead className="bg-dashboardBg text-secondaryBg py-2 text-sm font-lora">
              <tr className="whitespace-nowrap">
                <th className="px-4 py-2 text-sm font-lora">Date</th>
                <th className="px-4 py-2 text-sm font-lora">Title</th>
                <th className="px-4 py-2 text-sm font-lora">Description</th>
                <th className="px-4 py-2 text-sm font-lora">Challenges</th>
                <th className="px-4 py-2 text-sm font-lora">Strategy</th>
                <th className="px-4 py-2 text-sm font-lora">Takeaway</th>
                <th className="px-4 py-2 text-sm font-lora">Image</th>
                <th className="px-4 py-2 text-sm font-lora">Created By</th>
                <th className="px-4 py-2 text-sm font-lora">Action</th>
              </tr>
            </thead>
            <tbody>
              {works.map((work: WorkProp) => (
                <tr
                  key={work.id}
                  className="whitespace-nowrap border-b border-border"
                >
                  <td className="px-4 py-3 text-xs font-lora">
                    {customFormatDate(work.date)}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {work.title}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {work.description}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {work.challenges}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {work.strategy}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {work.takeaway}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {work.image ? (
                      <Image
                        src={work.image}
                        alt={work.title}
                        width={80}
                        height={80}
                      />
                    ) : null}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {work.createdBy?.name}
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
                      onClick={() => handleDelete(work.id as number)}
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
    </section>
  );
};

export default page;
