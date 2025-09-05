"use client";

import FormTitle from "@/components/FormTitle";
import LoadingOverlay from "@/components/LoadingOverlay";
import { errorAlert } from "@/lib/swalUtils";
import { WorkProp } from "@/services/api";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BsFolderFill } from "react-icons/bs";

const initialState = {
  date: "",
  title: "",
  description: "",
  challenges: "",
  strategy: "",
  takeaway: "",
  image: "",
};

const page = () => {
  const [work, setWork] = useState<WorkProp>(initialState);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const router = useRouter();

  const { id } = useParams();

  useEffect(() => {
    const getWorkData = async () => {
      try {
        const res = await fetch(`/api/admin/our_work/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        setLoading(false);
        setWork(data);
      } catch (err) {
        console.error("Failed to fetch work data", err);
      }
    };

    getWorkData();
  }, [id]);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    const maxSizeInBytes = 1 * 1024 * 1024;
    if (file && file.size > maxSizeInBytes) {
      errorAlert("File is too large!. Maximum size is 1MB.");
      return;
    }
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
      setImageFile(file);
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("date", work.date);
    formData.append("title", work.title);
    formData.append("description", work.description);
    formData.append("challenges", work.challenges);
    formData.append("strategy", work.strategy);
    formData.append("takeaway", work.takeaway);
    if (imageFile) {
      formData.append("image", imageFile);
    } else {
      formData.append("image", work.image as string);
    }
    try {
      const response = await fetch(`/api/admin/our_work/${id}`, {
        method: "PUT",
        body: formData,
      });
      const data = await response.json();
      if (response.ok) {
        router.push("/admin/our_works");
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
      <div className="bg-white p-4 rounded-lg">
        {loading && <LoadingOverlay />}
        <FormTitle title="Edit Our Work" />
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
          {error && (
            <div className="px-4 py-2 text-sm text-red-700 bg-red-100 rounded-lg">
              {error}
            </div>
          )}

          <div className="grid grid-cols-2 gap-x-4 items-center">
            <div className="mb-4">
              <label htmlFor="title" className="text-primary text-sm">
                Title
              </label>
              <input
                type="text"
                placeholder="Title"
                name="title"
                value={work.title}
                onChange={(e) => setWork({ ...work, title: e.target.value })}
                required
                className="w-full px-2 py-2 text-xs border border-border rounded hover:outline-none focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="date" className="text-primary text-sm">
                Date
              </label>
              <input
                type="date"
                placeholder="Date"
                name="date"
  value={work.date ? work.date.slice(0, 10) : ''}
                onChange={(e) => setWork({ ...work, date: e.target.value })}
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
                value={work.description}
                onChange={(e) =>
                  setWork({ ...work, description: e.target.value })
                }
                className="w-full px-2 py-2 text-xs border border-border rounded hover:outline-none focus:outline-none"
                placeholder="Description"
              ></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="challenges" className="text-primary text-sm">
                Challenges
              </label>
              <textarea
                rows={2}
                name="challenges"
                value={work.challenges}
                onChange={(e) =>
                  setWork({ ...work, challenges: e.target.value })
                }
                className="w-full px-2 py-2 text-xs border border-border rounded hover:outline-none focus:outline-none"
                placeholder="Challenges"
              ></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="strategy" className="text-primary text-sm">
                Strategy
              </label>
              <textarea
                rows={2}
                name="strategy"
                value={work.strategy}
                onChange={(e) => setWork({ ...work, strategy: e.target.value })}
                className="w-full px-2 py-2 text-xs border border-border rounded hover:outline-none focus:outline-none"
                placeholder="Strategy"
              ></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="takeaway" className="text-primary text-sm">
                Takeaway
              </label>
              <textarea
                rows={2}
                name="takeaway"
                value={work.takeaway}
                onChange={(e) => setWork({ ...work, takeaway: e.target.value })}
                className="w-full px-2 py-2 text-xs border border-border rounded hover:outline-none focus:outline-none"
                placeholder="Takeaway"
              ></textarea>
            </div>
          </div>
          <div className="mb-4 flex flex-col items-center justify-center border rounded px-4 py-10">
            <label htmlFor="image" className="text-primary text-xs">
              Image
            </label>
            {(imageUrl || work.image) && (
              <div className="mt-4 w-full">
                <Image
                  src={(imageUrl || work.image) as string}
                  alt={work.title}
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

          <div className="flex justify-end gap-2 mb-4">
            <Link
              href="/admin/our_works"
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
