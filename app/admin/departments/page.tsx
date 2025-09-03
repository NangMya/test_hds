"use client";
import LoadingOverlay from "@/components/LoadingOverlay";
import { customFormatDate } from "@/lib/helps";
import { confirmDialog, errorAlert, successAlert } from "@/lib/swalUtils";
import { DepartmentProp } from "@/services/api";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaEdit, FaPlusSquare } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";

const page = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState<boolean>(true);
  const [departments, setDepartments] = useState<DepartmentProp[]>([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await fetch("/api/admin/department");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setDepartments(data);
      } catch (error) {
        setError("Failed to fetch department");
      } finally {
        setLoading(false);
      }
    };
    fetchDepartments();
  }, []);

  const handleDelete = async (id: number) => {
    const confirmed = await confirmDialog();

    if (!confirmed) return;

    try {
      setLoading(true);
      const res = await fetch(`/api/admin/department/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (res.ok) {
        successAlert("Item deleted successfully.");
        setDepartments((prevDepartment) =>
          prevDepartment.filter((department) => department.id !== id)
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
    <section>
      <div className="bg-white shadow rounded-lg p-6 w-full max-w-7xl mx-auto mainDiv">
        {loading && <LoadingOverlay />}
        {error && <p className="text-red-500">{error}</p>}

        <div className="flex py-2">
          <Link
            href="/admin/departments/create"
            className="py-2 px-4 rounded-lg bg-secondaryBg text-white border border-primary hover:bg-transparent hover:text-primary text-xs"
          >
            <FaPlusSquare size={20} className="inline pb-1" /> Create
          </Link>
        </div>

        <div className="overflow-x-auto  w-[1000px] tableDiv">
          <table className="min-w-full">
            <thead className="bg-dashboardBg text-secondaryBg py-2 text-sm font-lora">
              <tr className="whitespace-nowrap">
                <th className="px-4 py-2 text-sm font-lora">Name</th>
                <th className="px-4 py-2 text-sm font-lora">Status</th>
                <th className="px-4 py-2 text-sm font-lora">Created By</th>
                <th className="px-4 py-2 text-sm font-lora">Action</th>
              </tr>
            </thead>
            <tbody>
              {departments.map((department: DepartmentProp) => (
                <tr
                  key={department.id}
                  className="whitespace-nowrap border-b border-border"
                >
                  <td className="px-4 py-3 text-xs font-lora">
                    {department.name}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    {department.status}
                  </td>

                  <td className="px-4 py-3 text-xs font-lora">
                    {department.created_by}
                  </td>
                  <td className="px-4 py-3 text-xs font-lora">
                    <div className="flex justify-center gap-x-4">
                      <Link
                        href={`/admin/departments/edit/${department.id}`}
                        className="text-blue-500"
                      >
                        {" "}
                        <FaEdit size={20} />
                      </Link>
                      <button
                        onClick={() => handleDelete(department.id)}
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
