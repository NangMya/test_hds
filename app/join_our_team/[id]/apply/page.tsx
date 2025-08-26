"use client";

import JobTitle from "@/components/JobTitle";
import WebsiteLayout from "@/components/layouts/WebsiteLayout";
import LoadingOverlay from "@/components/LoadingOverlay";
import { errorAlert, successAlert } from "@/lib/swalUtils";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useCallback, useRef, useState } from "react";
import { BsFolderFill } from "react-icons/bs";

type JobApplyProps = {
  name: string;
  email: string;
  phone: string;
  address: string;
  experience: string;
  expected_salary: string;
  job_id: string;
  file: File | null;
};
const initialState = {
  name: "",
  email: "",
  phone: "",
  address: "",
  job_id: "",
  experience: "",
  expected_salary: "",
  file: null as File | null,
};

const page = () => {
  const [applicant, setApplicant] = useState(initialState);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { id } = useParams();
  const handleDragEnter = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const files = Array.from(e.dataTransfer.files);
      setSelectedFiles(files);
    }
  }, []);

  //   const handleFileInputChange = useCallback(
  //     (e: React.ChangeEvent<HTMLInputElement>) => {
  //       if (e.target.files && e.target.files.length > 0) {
  //         // multiple file
  //         const files = Array.from(e.target.files);
  //         setSelectedFiles(files);

  //         setApplicant({ ...applicant, file: e.target.files?.[0] ?? null });
  //       }
  //     },
  //     []
  //   );
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const files = Array.from(e.target.files);

      const maxSizeInBytes = 5 * 1024 * 1024; // 5MB
      const file = files[0];
      if (file) {
        if (file.size > maxSizeInBytes) {
          errorAlert("File too large!");
        } else {
          setSelectedFiles(files);

          setApplicant({ ...applicant, file: file ?? null });
        }
      }
    }
  };

  const triggerFileInput = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleApply = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", applicant.name);
      formData.append("email", applicant.email);
      formData.append("phone", applicant.phone);
      formData.append("job_id", id.toString());
      formData.append("address", applicant.address);
      formData.append("experience", applicant.experience);
      formData.append("expected_salary", applicant.expected_salary);
      if (applicant.file) formData.append("file", applicant.file);

        if (selectedFiles.length > 0){
            formData.append("file", selectedFiles[0]);

        //   for(let i = 0; i<= selectedFiles.length; i++){
        //       formData.append("file", selectedFiles[i]);
        //   }
        }
      const res = await fetch("/api/applicant", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      if (result.error) {
        errorAlert(result.error || "Delete failed.");
      } else {
        successAlert("Successfully Applied.");
        setTimeout(() => {
          setApplicant({
            name: "",
            email: "",
            phone: "",
            address: "",
            job_id: "",
            file: null,
            expected_salary: "",
            experience: "",
          });
          setSelectedFiles([]);
        }, 1000);
      }
    } catch (err) {
      setError("Something went wrong.");
    } finally {
      setTimeout(() => setLoading(false), 1000);
    }
  };
  return (
    <WebsiteLayout>
      <section className="pt-12 w-[90%] mx-auto font-lora px-6 relative">
        {loading && <LoadingOverlay />}
        <JobTitle />
        <div className="py-6">
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2">
              <h1 className="text-3xl mb-4">Apply Now</h1>
              <p className="opacity-80 text-sm">
                Design and produce high-quality graphics, illustrations, and
                layouts for various platforms including websites, social media,
                email campaigns, print materials, and more.
              </p>
              <form
                className="py-6"
                onSubmit={handleApply}
                encType="multipart/form-data"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="mb-2">
                    <input
                      type="text"
                      placeholder="Your Name *"
                      name="name"
                      value={applicant.name}
                      onChange={(e) =>
                        setApplicant({ ...applicant, name: e.target.value })
                      }
                      required
                      className="w-full p-2 border border-border rounded-sm text-xs focus:ring-0 focus:outline-none"
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="email"
                      placeholder="Email *"
                      required
                      value={applicant.email}
                      onChange={(e) =>
                        setApplicant({ ...applicant, email: e.target.value })
                      }
                      className="w-full p-2 border border-border rounded-sm text-xs focus:ring-0 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    placeholder="Phone"
                    value={applicant.phone}
                    onChange={(e) =>
                      setApplicant({ ...applicant, phone: e.target.value })
                    }
                    className="w-full p-2 border border-border rounded-sm text-xs focus:ring-0 focus:outline-none"
                  />
                </div>
                <div className="mb-2">
                  <textarea
                    rows={5}
                    placeholder="Address / City"
                    value={applicant.address}
                    onChange={(e) =>
                      setApplicant({ ...applicant, address: e.target.value })
                    }
                    className="w-full p-2 border border-border rounded-sm text-xs focus:ring-0 focus:outline-none"
                  ></textarea>
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    placeholder="Experience *"
                    required
                    value={applicant.experience}
                    onChange={(e) =>
                      setApplicant({ ...applicant, experience: e.target.value })
                    }
                    className="w-full p-2 border border-border rounded-sm text-xs focus:ring-0 focus:outline-none"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    placeholder="Expected Salary *"
                    required
                    value={applicant.expected_salary}
                    onChange={(e) =>
                      setApplicant({
                        ...applicant,
                        expected_salary: e.target.value,
                      })
                    }
                    className="w-full p-2 border border-border rounded-sm text-xs focus:ring-0 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col items-center justify-center mb-2 ">
                  <div
                    className={`w-full rounded-sm border border-dashed ${
                      isDragging
                        ? "border-blue-500 bg-blue-50"
                        : "border-primary"
                    } p-12 text-center transition-colors duration-200`}
                    onDragEnter={handleDragEnter}
                    onDragLeave={handleDragLeave}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                  >
                    <div className="flex flex-col items-center justify-center space-y-4">
                      <BsFolderFill size={25} className="inline text-primary" />
                      <p className="text-gray-600">
                        <span className="font-medium text-gray-900">
                          Drag your file(s)
                        </span>{" "}
                        to start uploading
                      </p>
                      <div className="flex flex-row items-center justify-center gap-2 py-4">
                        <div className="w-40 bg-hr h-[1px]"></div>
                        <p className="text-secondaryBg">OR</p>
                        <div className="w-40 bg-hr h-[1px]"></div>
                      </div>
                      <button
                        type="button"
                        onClick={triggerFileInput}
                        className="inline-flex items-center rounded-md border bg-transparent px-4 py-2 text-sm font-medium hover:text-white shadow-sm hover:bg-primary focus:outline-none focus:ring-0"
                      >
                        Browse files
                      </button>
                      <input
                        type="file"
                        name="file"
                        ref={fileInputRef}
                        onChange={handleFileInputChange}
                        className="hidden"
                        // multiple
                      />
                    </div>
                    {selectedFiles.length > 0 && (
                      <div className="mt-4 w-full">
                        <h3 className="text-lg font-medium text-gray-900">
                          Selected files:
                        </h3>
                        <ul className="mt-2 divide-y divide-gray-200 rounded-md border border-gray-200">
                          {selectedFiles.map((file, index) => (
                            <li
                              key={index}
                              className="flex items-center justify-between py-3 pl-3 pr-4 text-sm"
                            >
                              <span className="flex w-0 flex-1 items-center">
                                <svg
                                  className="h-5 w-5 flex-shrink-0 text-gray-400"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span className="ml-2 w-0 flex-1 truncate">
                                  {file.name}
                                </span>
                              </span>
                              <span className="ml-4 flex-shrink-0 text-gray-500">
                                {(file.size / 1024).toFixed(1)} KB
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white text-sm py-2 border border-primary hover:bg-transparent hover:text-primary transition-all duration-300 rounded-sm"
                >
                  Submit Application
                </button>
              </form>
            </div>
            <div className="">
              <h1 className="text-3xl mb-4">Other Job</h1>
              <div className="flex justify-between">
                <div>
                  <h1 className="font-medium">UI/UX Designer</h1>
                  <p className="text-xs opacity-50 lowercase">
                    creative department
                  </p>
                </div>
                <p className="text-xs opacity-80">(4 applicants)</p>
              </div>
              <hr className="my-3" />
              <div className="flex justify-between">
                <div>
                  <h1 className="font-medium">Full stack Developer</h1>
                  <p className="text-xs opacity-50">it department</p>
                </div>
                <p className="text-xs opacity-80">(4 applicants)</p>
              </div>
              <hr className="my-3" />
              <div className="flex justify-between">
                <div>
                  <h1 className="font-medium">Senior Sale</h1>
                  <p className="text-xs opacity-50">marketing department</p>
                </div>
                <p className="text-xs opacity-80">(4 applicants)</p>
              </div>
              <hr className="my-3" />
              <div className="flex justify-between">
                <div>
                  <h1 className="font-medium">Account</h1>
                  <p className="text-xs opacity-50">finance department</p>
                </div>
                <p className="text-xs opacity-80">(0 applicants)</p>
              </div>
              <hr className="my-3" />
            </div>
          </div>
        </div>

        <Image
          src="/images/join_our_team/job_form_img.webp"
          alt="image"
          width={400}
          height={400}
          className="absolute -bottom-52 -right-28 -z-20"
        />
      </section>
    </WebsiteLayout>
  );
};

export default page;
