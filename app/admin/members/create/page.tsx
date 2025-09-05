"use client";

import ButtonLink from "@/components/ButtonLink";
import CancelButton from "@/components/CancelButton";
import FormTitle from "@/components/FormTitle";
import LoadingOverlay from "@/components/LoadingOverlay";
import PrimaryButton from "@/components/PrimaryButton";
import { errorAlert } from "@/lib/swalUtils";
import { DepartmentProp, MemberProp } from "@/services/api";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { BsFolderFill } from "react-icons/bs";

const initialState = {
  name: "",
  profile: "",
  position: "",
  department_id: "",
};

const page = () => {
  const [member, setMember] = useState<MemberProp>(initialState);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [departments, setDepartments] = useState<DepartmentProp[]>([]);
  const [profileUrl, setProfileUrl] = useState("");
  const [profileFile, setProfileFile] = useState<File | null>(null);
  const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    const maxSizeInBytes = 1 * 1024 * 1024;
    if (file && file.size > maxSizeInBytes) {
      errorAlert("File is too large!. Maximum size is 1MB.");
      return;
    }
    if(file){
        const url = URL.createObjectURL(file);
        setProfileUrl(url);
        setProfileFile(file);
    }
    // setMember({ ...member, profile: file  });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("name", member.name);
    formData.append("position", member.position);
    if (member.department_id != null) {
      formData.append("department_id", member.department_id as string);
    }

    if(profileFile){
        formData.append('profile',profileFile);
    }else{
        formData.append("profile", member.profile as string);
    }

    try {
      const response = await fetch("/api/admin/member", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        router.push("/admin/members");
      } else {
        setError(data.error || "Fail to create member");
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
        console.log("data", data);
        console.log("response", data);
        setDepartments(data);
      } catch (error) {
        setError("Failed to fetch department");
      } finally {
        setLoading(false);
      }
    };
    fetchDepartments();
  }, []);

  return (
    <section className="">
      {loading && <LoadingOverlay />}
      <div className="bg-white p-4 rounded-lg max-w-md mx-auto ">
        <FormTitle title="Create Member" />
        <form action="" className="mt-6 px-6" onSubmit={handleSubmit}>
        {error && (
          <div className="px-4 py-2 text-sm text-red-700 bg-red-100 rounded-lg">
            {error}
          </div>
        )}
          <div className="mb-2">
            <label htmlFor="name" className="text-primary text-sm">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Member Name"
              name="name"
              value={member.name}
              onChange={(e) => setMember({ ...member, name: e.target.value })}
              required
              className="w-full px-2 py-2 text-xs border border-border rounded hover:outline-none focus:outline-none"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="position" className="text-primary text-sm">
              Position
            </label>
            <input
              type="text"
              placeholder="Enter Position"
              name="position"
              value={member.position}
              onChange={(e) =>
                setMember({ ...member, position: e.target.value })
              }
              required
              className="w-full px-2 py-2 text-xs border border-border rounded hover:outline-none focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="department_id" className="text-primary text-sm">
              Department
            </label>
            <select
              name="departemnt_id"
              id="departemnt_id"
              className="w-full px-2 py-2 text-xs border border-border rounded hover:outline-none focus:outline-none"
              onChange={(e) =>
                setMember({ ...member, department_id: e.target.value })
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
          <div className="flex flex-col items-center justify-center border rounded px-4 py-10">
            <label htmlFor="profile" className="text-primary text-xs">
              Profile
            </label>
            {(profileUrl || member.profile) && (
              <div className="mt-4 w-full">
                <Image
                  src={(profileUrl || member.profile) as string}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="w-full max-h-48 rounded-lg object-contain"
                />
              </div>
            )}
            <button
              type="button"
              onClick={() => document.getElementById("profileInput")?.click()}
            >
              <BsFolderFill size={25} className="inline text-primary" />
              <p className="text-gray-600 text-xs">
                <span className="font-medium text-gray-900 text-xs">
                  Choose your file
                </span>
                to start uploading
              </p>
            </button>
            <input
              id="profileInput"
              type="file"
              name="profile"
              onChange={(e) => handleFileChange(e)}
              className="hidden"
              accept="image/*"
            />
          </div>

          <div className="flex justify-end gap-2 mb-4 mt-4">
            <CancelButton url="/admin/department" label="Cancel" />
            <PrimaryButton type="submit" label="Save" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default page;
