"use client";

import FormTitle from "@/components/FormTitle";
import LoadingOverlay from "@/components/LoadingOverlay";
import { DepartmentProp, JobProp } from "@/services/api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const initialState = {
  open_date: "",
  close_date: "",
  position: "",
  description: "",
  department_id: "",
  level: "",
  overview: "",
  job_type: "",
  salary: "",
  duties: "",
  requirements: "",
  experiences: "",
  gender: "",
  status: "",
};

const page = () => {
  const [job, setJob] = useState<JobProp>(initialState);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [departments, setDepartments] = useState<DepartmentProp[]>([]);
  const [requirements, setRequirement] = useState([""]);
  const [duties, setDuties] = useState([""]);
  const router = useRouter();

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
  const addRequirement = () => {
    setRequirement([...requirements, ""]);
  };

  const handleChangeRequirement = (index: number, value: string) => {
    const updated = [...requirements];
    updated[index] = value;
    setRequirement(updated);
  };

  const addDuties = () => {
    setDuties([...duties, ""]);
  };
  const handleChangeDuties = (index: number, value: string) => {
    const updated = [...duties];
    updated[index] = value;
    setDuties(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("open_date", job.open_date);
    formData.append("close_date", job.close_date);
    formData.append("position", job.position);
    formData.append("description", job.description);
    if (job.department_id) {
      formData.append("department_id", job.department_id);
    }
    formData.append("experiences", job.experiences);
    formData.append("level", job.level);
    formData.append("overview", job.overview);
    formData.append("job_type", job.job_type);
    formData.append("salary", job.salary);
    formData.append("duties", duties.join(" , "));
    formData.append("requirements", requirements.join(" , "));
    formData.append("gender", job.gender);
    formData.append("status", job.status);
    try {
      const response = await fetch("/api/admin/job", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        router.push("/admin/jobs");
      } else {
        setError(data.error || "Fail to create");
      }
      setLoading(false);
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <section className="py-20">
    <div className="bg-white p-4 rounded-lg">
      {loading && <LoadingOverlay />}
      <FormTitle title="Create New Job" />
      {error && (
        <div className="p-4 text-sm text-red-700 bg-red-100 rounded-lg">
          {error}
        </div>
      )}
      <form
        action=""
        className="mt-6 px-6"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <div className="grid grid-cols-2 gap-x-4 ">
          <div className="mb-4">
            <label htmlFor="open_date" className="text-primary text-sm">
              Open Date
            </label>
            <input
              type="date"
              placeholder="Open Date"
              name="open_date"
              value={job.open_date}
              onChange={(e) => setJob({ ...job, open_date: e.target.value })}
              required
              className="w-full px-2 py-2 text-xs border border-border rounded hover:outline-none focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="close_date" className="text-primary text-sm">
              Closed Date
            </label>
            <input
              type="date"
              placeholder="Closed Date"
              name="close_date"
              value={job.close_date}
              onChange={(e) => setJob({ ...job, close_date: e.target.value })}
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
                setJob({ ...job, department_id: e.target.value })
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
            <label htmlFor="position" className="text-primary text-sm">
              Position
            </label>
            <input
              type="position_en"
              placeholder="Position"
              name="position"
              value={job.position}
              onChange={(e) => setJob({ ...job, position: e.target.value })}
              required
              className="w-full px-2 py-2 text-xs border border-border rounded hover:outline-none focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="text-primary text-sm">
              Description
            </label>
            <textarea
              rows={2}
              name="description"
              value={job.description}
              onChange={(e) => setJob({ ...job, description: e.target.value })}
              className="w-full px-2 py-2 text-xs border border-border rounded hover:outline-none focus:outline-none"
              placeholder="Description"
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="overview" className="text-primary text-sm">
              Overview
            </label>
            <textarea
              rows={2}
              name="overview"
              value={job.overview}
              onChange={(e) => setJob({ ...job, overview: e.target.value })}
              className="w-full px-2 py-2 text-xs border border-border rounded hover:outline-none focus:outline-none"
              placeholder="Overview"
            ></textarea>
          </div>
         
          <div className="mb-4">
            <label htmlFor="experiences" className="text-primary text-sm">
              Required Experiences
            </label>
            <input
              type="text"
              placeholder="Experiences"
              name="experiences"
              value={job.experiences}
              onChange={(e) => setJob({ ...job, experiences: e.target.value })}
              required
              className="w-full px-2 py-2 text-xs border border-border rounded hover:outline-none focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="level" className="text-primary text-sm">
              Level
            </label>
            <select
              name="level"
              value={job.level}
              onChange={(e) => setJob({ ...job, level: e.target.value })}
              className="w-full px-2 py-2 text-xs border border-border rounded hover:outline-none focus:outline-none"
            >
              <option value="intern">Intern</option>
              <option value="junior">Junior</option>
              <option value="senior">Senior</option>
              <option value="lead">Lead</option>
              <option value="manager">Manager</option>
              <option value="director">Director</option>
              <option value="executive">Executive</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="job_type" className="text-primary text-sm">
              Job Type
            </label>
            <select
              name="job_type"
              value={job.job_type}
              onChange={(e) => setJob({ ...job, job_type: e.target.value })}
              className="w-full px-2 py-2 text-xs border border-border rounded hover:outline-none focus:outline-none"
            >
              <option value="full_time">Full-time</option>
              <option value="part_time">Part-time</option>
              <option value="internship">Internship</option>
              <option value="freelence">Freelence</option>
              <option value="remote">Remote</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="salary" className="text-primary text-sm">
              Salary
            </label>
            <input
              type="text"
              placeholder="Salary"
              name="salary"
              value={job.salary}
              onChange={(e) => setJob({ ...job, salary: e.target.value })}
              required
              className="w-full px-2 py-2 text-xs border border-border rounded hover:outline-none focus:outline-none"
            />
          </div>
        <div className="grid grid-cols-3 gap-x-4 items-end mb-2">
          <div className="mb-4 col-span-2">
            <label htmlFor="duties" className="text-primary text-sm">
              Duties & Responsibilities
            </label>
            {duties.map((req, index) => (
              <input
                key={index}

                value={req}
                onChange={(e) => handleChangeDuties(index, e.target.value)}
                className="w-full px-2 py-2 text-xs border border-border rounded hover:outline-none focus:outline-none mb-2"
                placeholder={`Duties & Responsibilities ${index + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={addDuties}
            className="text-blue-500 bg-dashboardBg rounded px-4 py-2 text-sm mb-6"
          >
            + Add
          </button>
        </div>
        <div className="grid grid-cols-3 gap-x-4 items-end mb-2">
          <div className="mb-4 col-span-2">
            <label htmlFor="requirements" className="text-primary text-sm">
              Requirements
            </label>

            {requirements.map((req, index) => (
              <input
                key={index}
                type="text"
                value={req}
                onChange={(e) =>
                  handleChangeRequirement(index, e.target.value)
                }
                className="w-full px-2 py-2 text-xs border border-border rounded hover:outline-none focus:outline-none mb-2"
                placeholder={`Requirement ${index + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={addRequirement}
            className="text-blue-500 bg-dashboardBg rounded px-4 py-2 text-sm mb-6"
          >
            + Add 
          </button>
        </div>
        </div>

        <div className="grid grid-cols-3 gap-x-4 items-center mb-2">
          <div className="mb-4">
            <label className="text-primary text-sm block mb-2">Gender</label>
            <div className="flex gap-4 text-xs">
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="gender"
                  value="both"
                  checked={job.gender === "both"}
                  onChange={(e) => setJob({ ...job, gender: e.target.value })}
                />
                Both
              </label>
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={job.gender === "female"}
                  onChange={(e) => setJob({ ...job, gender: e.target.value })}
                />
                Female
              </label>
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={job.gender === "male"}
                  onChange={(e) => setJob({ ...job, gender: e.target.value })}
                />
                Male
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label className="text-primary text-sm block mb-2">Status</label>
            <div className="flex gap-4 text-xs">
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="status"
                  value="open"
                  checked={job.status === "open"}
                  onChange={(e) => setJob({ ...job, status: e.target.value })}
                />
                Open
              </label>
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="status"
                  value="closed"
                  checked={job.status === "closed"}
                  onChange={(e) => setJob({ ...job, status: e.target.value })}
                />
                Closed
              </label>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2 mb-4">
          <Link
            href="/admin/jobs"
            className="py-2 px-4 rounded-lg bg-transparent text-primary border border-border hover:bg-transparent hover:text-second text-xs"
          >
            cancel
          </Link>
          <button
            type="submit"
            className="py-2 px-4 rounded-lg bg-primary text-white border border-primary hover:bg-transparent hover:text-primary text-xs"
          >
            Save
          </button>
        </div>
      </form>
    </div>
    </section>
  );
};

export default page;
