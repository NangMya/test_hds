"use client";

import FormTitle from "@/components/FormTitle";
import LoadingOverlay from "@/components/LoadingOverlay";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const initialState = {
  open_date: "",
  close_date: "",
  position_en: "",
  position_km: "",
  description_en: "",
  description_km: "",
  department_en: "",
  department_km: "",
  level_en: "",
  level_km: "",
  experiences_en: "",
  experiences_km: "",
  overview_en: "",
  overview_km: "",
  job_type_en: "",
  job_type_km: "",
  salary_en: "",
  salary_km: "",
  gender: "",
  status: "",
};
type JobForm = {
  open_date: string;
  close_date: string;
  position_en: string;
  position_km: string;
  description_en: string;
  description_km: string;
  department_en: string;
  department_km: string;
  level_en: string;
  level_km: string;
  experiences_en: string;
  experiences_km: string;
  overview_en: string;
  overview_km: string;
  job_type_en: string;
  job_type_km: string;
  salary_en: string;
  salary_km: string;
  gender: string;
  status: string;
};

const page = () => {
  const [job, setJob] = useState<JobForm>(initialState);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState<boolean>(true);
  const [requirementsEn, setRequirementsEn] = useState([""]);
  const [requirementsKm, setRequirementsKm] = useState([""]);
  const [dutiesEn, setDutiesEn] = useState([""]);
  const [dutiesKm, setDutiesKm] = useState([""]);
  const router = useRouter();

  const { id } = useParams();

  useEffect(() => {
    const getJobData = async () => {
      try {
        const res = await fetch(`/api/admin/job/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await res.json();
        setLoading(false);
        console.log(data);

        const splitString = (str?: string): string[] =>
          str ? str.split(" , ").map((item) => item.trim()) : [];

        setRequirementsEn(splitString(data.requirements_en));
        setRequirementsKm(splitString(data.requirements_km));
        setDutiesEn(splitString(data.duties_en));
        setDutiesKm(splitString(data.duties_km));

        setJob({
          ...data,
          open_date: new Date(data.open_date).toISOString().split("T")[0],
          close_date: new Date(data.close_date).toISOString().split("T")[0],
        });
      } catch (err) {
        console.error("Failed to fetch work data", err);
      }
    };

    getJobData();
  }, [id]);

  const addRequirement = () => {
    setRequirementsEn([...requirementsEn, ""]);
    setRequirementsKm([...requirementsKm, ""]);
  };
  const handleChangeRequirementEn = (index: number, value: string) => {
    const updated = [...requirementsEn];
    updated[index] = value;
    setRequirementsEn(updated);
  };
  const handleChangeRequirementKm = (index: number, value: string) => {
    const updated = [...requirementsKm];
    updated[index] = value;
    setRequirementsKm(updated);
  };
  const addDuties = () => {
    setDutiesEn([...dutiesEn, ""]);
    setDutiesKm([...dutiesKm, ""]);
  };
  const handleChangeDutiesEn = (index: number, value: string) => {
    const updated = [...dutiesEn];
    updated[index] = value;
    setDutiesEn(updated);
  };
  const handleChangeDutiesKm = (index: number, value: string) => {
    const updated = [...dutiesKm];
    updated[index] = value;
    setDutiesKm(updated);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("open_date", job.open_date);
    formData.append("close_date", job.close_date);
    formData.append("position_en", job.position_en);
    formData.append("position_km", job.position_km);
    formData.append("description_en", job.description_en);
    formData.append("description_km", job.description_km);
    formData.append("department_en", job.department_en);
    formData.append("department_km", job.department_km);
    formData.append("experiences_en", job.experiences_en);
    formData.append("experiences_km", job.experiences_km);
    formData.append("level_en", job.level_en);
    formData.append("level_km", job.level_km);
    formData.append("overview_en", job.overview_en);
    formData.append("overview_km", job.overview_km);
    formData.append("job_type_en", job.job_type_en);
    formData.append("job_type_km", job.job_type_km);
    formData.append("salary_en", job.salary_en);
    formData.append("salary_km", job.salary_km);
    formData.append("duties_en", dutiesEn.join(" , "));
    formData.append("duties_km", dutiesKm.join(" , "));

    formData.append("requirements_en", requirementsEn.join(" , "));
    formData.append("requirements_km", requirementsKm.join(" , "));

    formData.append("gender", job.gender);
    formData.append("status", job.status);
    try {
      const response = await fetch(`/api/admin/job/${id}`, {
        method: "PUT",
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
    <section>
      {loading && <LoadingOverlay />}

      <div className="bg-white p-4 rounded-lg">
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
          <div className="grid grid-cols-2 gap-x-4 items-center">
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
              <label htmlFor="position_en" className="text-primary text-sm">
                Position EN
              </label>
              <input
                type="position_en"
                placeholder="Position (EN)"
                name="position_en"
                value={job.position_en}
                onChange={(e) =>
                  setJob({ ...job, position_en: e.target.value })
                }
                required
                className="w-full px-2 py-2 text-xs border border-border rounded hover:outline-none focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="position" className="text-primary text-sm">
                Position KM
              </label>
              <input
                type="text"
                placeholder="Position (KM)"
                name="position_km"
                value={job.position_km}
                onChange={(e) =>
                  setJob({ ...job, position_km: e.target.value })
                }
                required
                className="w-full px-2 py-2 text-xs border border-border rounded hover:outline-none focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description_en" className="text-primary text-sm">
                Description EN
              </label>
              <textarea
                rows={2}
                name="description_en"
                value={job.description_en}
                onChange={(e) =>
                  setJob({ ...job, description_en: e.target.value })
                }
                className="w-full px-2 py-2 text-xs border border-border rounded hover:outline-none focus:outline-none"
                placeholder="Description (EN)"
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="description_km" className="text-primary text-sm">
                Description KM
              </label>
              <textarea
                rows={2}
                name="description_km"
                value={job.description_km}
                onChange={(e) =>
                  setJob({ ...job, description_km: e.target.value })
                }
                className="w-full px-2 py-2 text-xs border border-border rounded hover:outline-none focus:outline-none"
                placeholder="Description (KM)"
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="overview_en" className="text-primary text-sm">
                Overview EN
              </label>
              <textarea
                rows={2}
                name="overview_en"
                value={job.overview_en}
                onChange={(e) =>
                  setJob({ ...job, overview_en: e.target.value })
                }
                className="w-full px-2 py-2 text-xs border border-border rounded hover:outline-none focus:outline-none"
                placeholder="Overview (EN)"
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="overview_km" className="text-primary text-sm">
                Overview KM
              </label>
              <textarea
                rows={2}
                name="overview_km"
                value={job.overview_km}
                onChange={(e) =>
                  setJob({ ...job, overview_km: e.target.value })
                }
                className="w-full px-2 py-2 text-xs border border-border rounded hover:outline-none focus:outline-none"
                placeholder="Overview (KM)"
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="department_en" className="text-primary text-sm">
                Department EN
              </label>
              <input
                type="text"
                name="department_en"
                value={job.department_en}
                onChange={(e) =>
                  setJob({ ...job, department_en: e.target.value })
                }
                className="w-full px-2 py-2 text-xs border border-border rounded hover:outline-none focus:outline-none"
                placeholder="Department (EN)"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="department_km" className="text-primary text-sm">
                Department KM
              </label>
              <input
                type="text"
                name="department_km"
                value={job.department_km}
                onChange={(e) =>
                  setJob({ ...job, department_km: e.target.value })
                }
                className="w-full px-2 py-2 text-xs border border-border rounded hover:outline-none focus:outline-none"
                placeholder="Department (KM)"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="experiences_en" className="text-primary text-sm">
                Required Experiences EN
              </label>
              <input
                type="text"
                placeholder="Experiences (EN)"
                name="experiences_en"
                value={job.experiences_en}
                onChange={(e) =>
                  setJob({ ...job, experiences_en: e.target.value })
                }
                required
                className="w-full px-2 py-2 text-xs border border-border rounded hover:outline-none focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="experiences_km" className="text-primary text-sm">
                Required Experiences KM
              </label>
              <input
                type="text"
                placeholder="Experiences (KM)"
                name="experiences_km"
                value={job.experiences_km}
                onChange={(e) =>
                  setJob({ ...job, experiences_km: e.target.value })
                }
                required
                className="w-full px-2 py-2 text-xs border border-border rounded hover:outline-none focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="level_en" className="text-primary text-sm">
                Level EN
              </label>
              <select
                name="level_en"
                value={job.level_en}
                onChange={(e) => setJob({ ...job, level_en: e.target.value })}
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
              <label htmlFor="job_type_en" className="text-primary text-sm">
                Job Type
              </label>
              <select
                name="job_type_en"
                value={job.job_type_en}
                onChange={(e) =>
                  setJob({ ...job, job_type_en: e.target.value })
                }
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
              <label htmlFor="salary_en" className="text-primary text-sm">
                Salary EN
              </label>
              <input
                type="text"
                placeholder="Salary (EN)"
                name="salary_en"
                value={job.salary_en}
                onChange={(e) => setJob({ ...job, salary_en: e.target.value })}
                required
                className="w-full px-2 py-2 text-xs border border-border rounded hover:outline-none focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="salary_km" className="text-primary text-sm">
                Salary KM
              </label>
              <input
                type="text"
                placeholder="Salary (KM)"
                name="salary_km"
                value={job.salary_km}
                onChange={(e) => setJob({ ...job, salary_km: e.target.value })}
                required
                className="w-full px-2 py-2 text-xs border border-border rounded hover:outline-none focus:outline-none"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-4 items-end mb-2 mt-4">
            <div className="mb-4">
              <label htmlFor="duties_en" className="text-primary text-sm">
                Duties & Responsibilities EN
              </label>
              {dutiesEn.map((req, index) => (
                <textarea
                  key={index}
                  rows={2}
                  value={req}
                  onChange={(e) => handleChangeDutiesEn(index, e.target.value)}
                  className="w-full px-2 py-2 text-xs border border-border rounded hover:outline-none focus:outline-none"
                  placeholder="Duties & Responsibilities (EN)"
                ></textarea>
              ))}
            </div>
            <div className="mb-4">
              <label htmlFor="duties_km" className="text-primary text-sm">
                Duties & Responsibilities KM
              </label>
              {dutiesKm.map((req, index) => (
                <textarea
                  key={index}
                  rows={2}
                  value={req}
                  onChange={(e) => handleChangeDutiesKm(index, e.target.value)}
                  className="w-full px-2 py-2 text-xs border border-border rounded hover:outline-none focus:outline-none"
                  placeholder="Duties & Responsibilities (KM)"
                ></textarea>
              ))}
            </div>
            <button
              type="button"
              onClick={addDuties}
              className="text-blue-500 mb-5 bg-dashboardBg rounded px-4 py-2 text-sm"
            >
              + Add another duties & Responsibilities
            </button>
          </div>
          <div className="grid grid-cols-3 gap-x-4 items-end mb-2">
            <div className="mb-4">
              <label htmlFor="requirements_en" className="text-primary text-sm">
                Requirements EN
              </label>

              {requirementsEn.map((req, index) => (
                <input
                  key={index}
                  type="text"
                  value={req}
                  onChange={(e) =>
                    handleChangeRequirementEn(index, e.target.value)
                  }
                  className="w-full px-2 py-2 text-xs border border-border rounded hover:outline-none focus:outline-none"
                  placeholder={`Requirement ${index + 1}`}
                />
              ))}
            </div>
            <div className="mb-4">
              <label htmlFor="requirements_km" className="text-primary text-sm">
                Requirements KM
              </label>
              {requirementsKm.map((req, index) => (
                <input
                  key={index}
                  type="text"
                  value={req}
                  onChange={(e) =>
                    handleChangeRequirementKm(index, e.target.value)
                  }
                  className="w-full px-2 py-2 text-xs border border-border rounded hover:outline-none focus:outline-none"
                  placeholder={`Requirement ${index + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={addRequirement}
              className="text-blue-500 mb-4 bg-dashboardBg rounded px-4 py-2 text-sm"
            >
              + Add another requirement
            </button>
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
