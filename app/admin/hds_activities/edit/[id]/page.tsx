"use client";

import CancelButton from "@/components/CancelButton";
import FormTitle from "@/components/FormTitle";
import LoadingOverlay from "@/components/LoadingOverlay";
import PrimaryButton from "@/components/PrimaryButton";
import { errorAlert } from "@/lib/swalUtils";
import { ActivityProp } from "@/services/api";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BsFolderFill } from "react-icons/bs";

const initialState = {
  title: "",
  description: "",
};
type ImageState = {
  id?: number; // DB image id if it exists
  url: string; // preview url or DB url
  file?: File; // new file only
  isNew?: boolean; // flag for new files
};

const page = () => {
  const [activity, setActivity] = useState<ActivityProp>(initialState);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();
  const { id } = useParams();
  const [images, setImages] = useState<ImageState[]>([]);

  useEffect(() => {
    const getActivity = async () => {
      try {
        const res = await fetch(`/api/admin/hds_activities/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();

        setImages(
          data.galleries.map((g: any) => ({
            id: g.id,
            url: g.image,
            isNew: false,
          }))
        );
        setLoading(false);
        setActivity(data);
      } catch (err) {
        errorAlert("Failed to fetch activiy");
      }
    };
    getActivity();
  }, []);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    const maxSizeInBytes = 1 * 1024 * 1024; // 1MB
    const newImages: { file: File; url: string }[] = [];

    files.forEach((file) => {
      if (file.size > maxSizeInBytes) {
        errorAlert(`${file.name} is too large! Max size is 1MB.`);
        return;
      }
      const url = URL.createObjectURL(file);
      newImages.push({ file, url });
    });

    setImages((prev) => [...prev, ...newImages]);
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("title", activity.title);
    formData.append("description", activity.description);
    images.forEach((img) => {
      if (img.file) {
        formData.append("images[]", img.file);
      }
    });
    const existingUrls = images
      .filter((img) => !img.file)
      .map((img) => img.url);
    formData.append("existingImages", JSON.stringify(existingUrls));

    // if(profileFile){
    //     formData.append('profile',profileFile);
    // }else{
    //     formData.append("profile", activity.profile as string);
    // }

    try {
      const response = await fetch(`/api/admin/hds_activities/${id}`, {
        method: "PUT",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        router.push("/admin/hds_activities");
      } else {
        setError(data.error || "Fail to create activity");
      }
      setLoading(false);
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  };
  console.log("image", images);

  return (
    <section className="py-20">
      {loading && <LoadingOverlay />}
      <div className="bg-white p-4 rounded-lg max-w-md mx-auto ">
        <FormTitle title="Edit Activity" />
        <form action="" className="mt-6 px-6" onSubmit={handleSubmit}>
          {error && (
            <div className="px-4 py-2 text-sm text-red-700 bg-red-100 rounded-lg">
              {error}
            </div>
          )}
          <div className="mb-2">
            <label htmlFor="title" className="text-primary text-sm">
              Title
            </label>
            <input
              type="text"
              placeholder="Enter Activitiy Title"
              name="title"
              value={activity.title}
              onChange={(e) =>
                setActivity({ ...activity, title: e.target.value })
              }
              required
              className="w-full px-2 py-2 text-xs border border-border rounded hover:outline-none focus:outline-none"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="description" className="text-primary text-sm">
              Description
            </label>
            <textarea
              rows={3}
              placeholder="Enter Activitiy Description"
              name="description"
              value={activity.description}
              onChange={(e) =>
                setActivity({ ...activity, description: e.target.value })
              }
              required
              className="w-full px-2 py-2 text-xs border border-border rounded hover:outline-none focus:outline-none"
            >
              {activity.description}
            </textarea>
          </div>

          <div className="flex flex-col items-center justify-center border rounded px-4 py-10">
            <label htmlFor="images" className="text-primary text-xs">
              Images
            </label>
            <div className="mt-4 grid grid-cols-3 gap-4">
              {images.map((img, i) => {
                console.log("i", img);
                return (
                  <div key={i} className="relative">
                    <img
                      src={img.url || img.url}
                      alt={`Preview ${i}`}
                      className="w-32 h-32 object-cover rounded"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(i)}
                      className="absolute top-1 right-1 bg-red-500 text-white text-xs px-2 py-1 rounded"
                    >
                      ✕
                    </button>
                  </div>
                );
              })}
            </div>
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
              multiple
            />
          </div>

          <div className="flex justify-end gap-2 mb-4 mt-4">
            <CancelButton url="/admin/hds_activities" label="Cancel" />
            <PrimaryButton type="submit" label="Update" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default page;
