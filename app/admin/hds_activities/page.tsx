"use client";
import ButtonLink from "@/components/ButtonLink";
import LoadingOverlay from "@/components/LoadingOverlay";
import { confirmDialog, errorAlert, successAlert } from "@/lib/swalUtils";
import { ActivityProp, GalleryProp } from "@/services/api";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaEdit, FaPlusSquare } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";

const page = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState<boolean>(true);
  const [activities, setActivities] = useState<ActivityProp[]>([]);

  useEffect(() => {
    const fetchMemebrs = async () => {
      try {
        const response = await fetch("/api/admin/hds_activities");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        setActivities(data);
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
      const res = await fetch(`/api/admin/hds_activities/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (res.ok) {
        successAlert("Item deleted successfully.");
        setActivities((prevActivities) =>
          prevActivities.filter((activity) => activity.id !== id)
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
          <ButtonLink url="/admin/hds_activities/create" label="Create" />
        </div>

        <div className="overflow-x-auto w-full tableDiv">
          <table className="min-w-full">
            <thead className="bg-dashboardBg text-secondaryBg py-2 text-sm font-lora w-full">
              <tr className="whitespace-nowrap">
                <th className="px-4 py-2 text-sm font-lora text-left">Title</th>
                <th className="px-4 py-2 text-sm font-lora text-left">Description</th>
                <th className="px-4 py-2 text-sm font-lora text-left">Images</th>
                <th className="px-4 py-2 text-sm font-lora text-left">Created By</th>
                <th className="px-4 py-2 text-sm font-lora">Action</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity: ActivityProp) => (
                <tr
                  key={activity.id}
                  className="whitespace-nowrap border-b border-border"
                >
                  <td className="px-4 py-3 text-xs font-lora">
                    {activity.title}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {activity.description}
                  </td>
                    <td className="px-4 py-3 text-xs font-lora">
                        {
                           activity.galleries && activity.galleries.map((img: GalleryProp) =>{
                                return (
                                <div key={img.id}>
                                <Image src={img.image as string} alt={activity.title} width={60} height={60} className="object-contain" />
                                </div>
                                )
                            })
                        }
                  </td>
                 

                  <td className="px-4 py-3 text-xs font-lora">
                    {activity?.createdBy?.name}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    <div className="flex justify-center gap-x-4">
                      <Link
                        href={`/admin/hds_activities/edit/${activity.id}`}
                        className="text-blue-500"
                      >
                        {" "}
                        <FaEdit size={20} />
                      </Link>
                      <button
                        onClick={() => handleDelete(Number(activity?.id))}
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
      </div>
    </section>
  );
};

export default page;
