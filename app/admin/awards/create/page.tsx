"use client";

import ButtonLink from "@/components/ButtonLink";
import CancelButton from "@/components/CancelButton";
import FormTitle from "@/components/FormTitle";
import LoadingOverlay from "@/components/LoadingOverlay";
import PrimaryButton from "@/components/PrimaryButton";
import { errorAlert } from "@/lib/swalUtils";
import { AwardProp, DepartmentProp, MemberProp } from "@/services/api";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { BsFolderFill } from "react-icons/bs";

const initialState = {
  date: "",
  title: "",
  department_id: "",
  member_id: "",
};

const page = () => {
  const [award, setAward] = useState<AwardProp>(initialState);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [departments, setDepartments] = useState<DepartmentProp[]>([]);
  const [members, setMembers] = useState<MemberProp[]>([]);
  const [profileUrl, setProfileUrl] = useState("");
  const [profileFile, setProfileFile] = useState<File | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("date", award.date);
    formData.append("title", award.title);
    if (award.department_id != null) {
      formData.append("department_id", award.department_id as string);
    }
    if (award.member_id != null) {
      formData.append("member_id", award.member_id as string);
    }

    try {
      const response = await fetch("/api/admin/awards", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        router.push("/admin/awards");
      } else {
        setError(data.error || "Fail to create award");
      }
      setLoading(false);
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  };
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
  useEffect(() => {
  
    const fetchMemebrs = async () => {
      try {
        const response = await fetch("/api/admin/member");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMembers(data);
      } catch (error) {
        setError("Failed to fetch department");
      } finally {
        setLoading(false);
      }
    };
    fetchMemebrs();
  }, [award.department_id]);

  return (
    <section className="h-full overflow-auto py-20">
      {loading && <LoadingOverlay />}
      <div className="bg-white p-4 rounded-lg max-w-md mx-auto ">
        <FormTitle title="Create Award" />
        <form action="" className="mt-6 px-6" onSubmit={handleSubmit}>
          {error && (
            <div className="px-4 py-2 text-sm text-red-700 bg-red-100 rounded-lg">
              {error}
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="date" className="text-primary text-sm">
              Date
            </label>
            <input
              type="month"
              placeholder="Choose Date"
              name="date"
              value={award.date}
              onChange={(e) => setAward({ ...award, date: e.target.value })}
              required
              className="w-full px-2 py-2 text-xs border border-border rounded hover:outline-none focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="title" className="text-primary text-sm">
              Title
            </label>
            <input
              type="text"
              placeholder="Enter Award Title"
              name="title"
              value={award.title}
              onChange={(e) => setAward({ ...award, title: e.target.value })}
              required
              className="w-full px-2 py-2 text-xs border border-border rounded hover:outline-none focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="department_id" className="text-primary text-sm">
              Department
            </label>
            <select
              name="department_id"
              id="department_id"
              className="w-full px-2 py-2 text-xs border border-border rounded hover:outline-none focus:outline-none"
              onChange={(e) =>
                setAward({ ...award, department_id: e.target.value })
              }
            >
              <option value="">Choose Department</option>
              {departments.map((department) => {
                return (
                  <option key={department.id} value={department.id}>
                    {department.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="member_id" className="text-primary text-sm">
              Member
            </label>
            <select
              name="member_id"
              id="member_id"
              className="w-full px-2 py-2 text-xs border border-border rounded hover:outline-none focus:outline-none"
              onChange={(e) =>
                setAward({ ...award, member_id: e.target.value })
              }
            >
              <option value="">Choose Member</option>
              {members.map((member) => {
                return (
                  member.department_id == award.department_id && (
                    <option key={member.id} value={member.id}>
                      {member.name}
                    </option>
                  )
                );
              })}
            </select>
          </div>
          <div className="flex justify-end gap-2 mb-4 mt-4">
            <CancelButton url="/admin/awards" label="Cancel" />
            <PrimaryButton type="submit" label="Save" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default page;
