"use client";

import CancelButton from "@/components/CancelButton";
import FormTitle from "@/components/FormTitle";
import LoadingOverlay from "@/components/LoadingOverlay";
import PrimaryButton from "@/components/PrimaryButton";
import { errorAlert } from "@/lib/swalUtils";
import { AwardProp, DepartmentProp, MemberProp } from "@/services/api";
import { useParams, useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

const initialState: AwardProp = {
  date: "",
  title: "",
  department_id: "",
  member_id: "",
};

const Page = () => {
  const [award, setAward] = useState<AwardProp>(initialState);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [members, setMembers] = useState<MemberProp[]>([]);
  const [departments, setDepartments] = useState<DepartmentProp[]>([]);

  const router = useRouter();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [awardRes, deptRes, memberRes] = await Promise.all([
          fetch(`/api/admin/awards/${id}`),
          fetch("/api/admin/department"),
          fetch("/api/admin/member"),
        ]);

        if (!awardRes.ok || !deptRes.ok || !memberRes.ok) {
          throw new Error("Failed to fetch data");
        }

        const [awardData, deptData, memberData] = await Promise.all([
          awardRes.json(),
          deptRes.json(),
          memberRes.json(),
        ]);
        setAward({
          ...awardData,
          date: new Date(awardData.date).toISOString().slice(0, 7),
        });
        setDepartments(deptData);
        setMembers(memberData);
      } catch (err) {
        errorAlert("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setAward((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("date", award.date);
      formData.append("title", award.title);
      if (award.department_id)
        formData.append("department_id", award.department_id);
      if (award.member_id) formData.append("member_id", award.member_id);

      const response = await fetch(`/api/admin/awards/${id}`, {
        method: "PUT",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        router.push("/admin/awards");
      } else {
        setError(data.error || "Fail to update award");
      }
    } catch {
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const filteredMembers = members.filter(
    (m) => m.department_id == award.department_id
  );

  return (
    <section className="py-20">
      {loading && <LoadingOverlay />}
      <div className="bg-white p-4 rounded-lg max-w-md mx-auto">
        <FormTitle title="Edit Award" />
        <form className="mt-6 px-6" onSubmit={handleSubmit}>
          {error && (
            <div className="px-4 py-2 text-sm text-red-700 bg-red-100 rounded-lg">
              {error}
            </div>
          )}

          {/* Date */}
          <div className="mb-2">
            <label htmlFor="date" className="text-primary text-sm">
              Date
            </label>
            <input
              type="month"
              name="date"
              value={award.date}
              onChange={handleChange}
              required
              className="w-full px-2 py-2 text-xs border border-border rounded"
            />
          </div>

          {/* Title */}
          <div className="mb-2">
            <label htmlFor="title" className="text-primary text-sm">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={award.title}
              onChange={handleChange}
              required
              className="w-full px-2 py-2 text-xs border border-border rounded"
              placeholder="Enter Award Title"
            />
          </div>

          {/* Department */}
          <div className="mb-4">
            <label htmlFor="department_id" className="text-primary text-sm">
              Department
            </label>
            <select
              name="department_id"
              value={award.department_id as string}
              onChange={handleChange}
              className="w-full px-2 py-2 text-xs border border-border rounded"
            >
              <option value="">Choose Department</option>
              {departments.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name}
                </option>
              ))}
            </select>
          </div>

          {/* Member */}
          <div className="mb-4">
            <label htmlFor="member_id" className="text-primary text-sm">
              Member
            </label>
            <select
              name="member_id"
              value={award.member_id as string}
              onChange={handleChange}
              className="w-full px-2 py-2 text-xs border border-border rounded"
            >
              <option value="">Choose Member</option>
              {filteredMembers.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.name}
                </option>
              ))}
            </select>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-2 mt-4">
            <CancelButton url="/admin/members" label="Cancel" />
            <PrimaryButton type="submit" label="Update" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Page;
