"use client";
import LoadingOverlay from "@/components/LoadingOverlay";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { errorAlert, successAlert } from "@/lib/swalUtils";
import { BsFolderFill } from "react-icons/bs";

type InfoProps = {
  id: number;
  name: string;
  email: string;
  phone1: string;
  phone2: string;
  address: string;
  map: string;
  facebook_url: string;
  linkedin_url: string;
  instagram_url: string;
  youtube_url: string;
  telegram_url: string;
  tiktok_url: string;
  showreel_pc: string | null;
  showreel_mb: string | null;
  created_by: string;
  updated_by: string;
  created_at: string;
  updated_at: string;
};
const emptyInfo: InfoProps = {
  id: 0,
  name: "",
  email: "",
  phone1: "",
  phone2: "",
  address: "",
  map: "",
  facebook_url: "",
  linkedin_url: "",
  instagram_url: "",
  youtube_url: "",
  telegram_url: "",
  tiktok_url: "",
  showreel_pc: "",
  showreel_mb: "",
  created_by: "",
  updated_by: "",
  created_at: "",
  updated_at: "",
};
const page = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState<boolean>(true);
  const [info, setInfo] = useState<InfoProps>(emptyInfo);
  const [pcShowreelFile, setPcShowreelFile] = useState<File | null>(null);
  const [mbShowreelFile, setMbShowreelFile] = useState<File | null>(null);
  const [pcShowreelUrl, setPcShowreelUrl] = useState<string | null>(null);
  const [mbShowreelUrl, setMbShowreelUrl] = useState<string | null>(null);

  const fetchInfo = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/admin/info");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      console.log("data", data);
      setInfo(data);
    } catch (err) {
      setError("Failed to fetch info data.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchInfo();
  }, [fetchInfo]);

  useEffect(() => {
    if (pcShowreelFile) {
      const url = URL.createObjectURL(pcShowreelFile);
      setPcShowreelUrl(url);
      return () => URL.revokeObjectURL(url);
    } else {
      setPcShowreelUrl(null);
    }
  }, [pcShowreelFile]);
  useEffect(() => {
    if (mbShowreelFile) {
      const url = URL.createObjectURL(mbShowreelFile);
      setMbShowreelUrl(url);

      return () => URL.revokeObjectURL(url);
    } else {
      setMbShowreelUrl(null);
    }
  }, [mbShowreelFile]);

  const handleFileChange = useCallback(
    (
      e: React.ChangeEvent<HTMLInputElement>,
      fileType: "pcShowreel" | "mbShowreel"
    ) => {
      const file = e.target.files?.[0] || null;
      const maxSizeInBytes = 5 * 1024 * 1024; // 5MB

      if (file && file.size > maxSizeInBytes) {
        errorAlert("File too large! Maximum size is 5MB.");
        return;
      }

      if (fileType === "pcShowreel") {
        setPcShowreelFile(file);
      } else {
        setMbShowreelFile(file);
      }
    },
    []
  );

  // Consolidated submission handler for ALL forms
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    console.log("info", info);
    const formData = new FormData();

    formData.append("name", info.name);
    formData.append("email", info.email);
    formData.append("phone1", info.phone1);
    formData.append("phone2", info.phone2);
    formData.append("address", info.address);
    formData.append("map", info.map);
    formData.append("facebook_url", info.facebook_url);
    formData.append("linkedin_url", info.linkedin_url);
    formData.append("instagram_url", info.instagram_url);
    formData.append("youtube_url", info.youtube_url);
    formData.append("telegram_url", info.telegram_url);
    formData.append("tiktok_url", info.tiktok_url);
    if (pcShowreelFile) {
      formData.append("showreel_pc", pcShowreelFile);
    }else{
      if(info.showreel_pc){
      formData.append("showreel_pc",info.showreel_pc);
    }
    }
    if (mbShowreelFile) {
      formData.append("showreel_mb", mbShowreelFile);
    }else{
      
      if(info.showreel_mb){
        formData.append("showreel_mb",info.showreel_mb);
      }
    }
    

    try {
      const response = await fetch("/api/admin/info", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      console.log('result',result);
      if (result.error) {
        setError(result.error || "An error occurred. Please try again later.");
        throw new Error(result.error || "Failed to update.");
      }
      if (!response.ok) {
        throw new Error(result.error || "Failed to update.");
      }
      successAlert("Successfully updated.");
      fetchInfo();
    } catch (err: any) {
      setError(err.message || "An error occurred. Please try again later.");
      errorAlert(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-7xl w-full py-20">
      {loading && <LoadingOverlay />}
      {error && <p className="text-red-500 py-2 text-xs">{error}</p>}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="bg-white shadow rounded-lg p-6 w-full mx-auto">
            <h1 className="text-sm text-primary font-semibold mb-2">
              Basic Information
            </h1>
            <div className="mb-3">
              <label htmlFor="name" className="text-primary text-xs">
                Name
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={info.name}
                onChange={(e) => setInfo({ ...info, name: e.target.value })}
                required
                className="w-full px-2 py-2 text-xs border-0 border-b-[1px] border-b-border rounded hover:outline-none focus:outline-none"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="text-primary text-xs">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={info.email}
                onChange={(e) => setInfo({ ...info, email: e.target.value })}
                required
                className="w-full px-2 py-2 text-xs border-0 border-b-[1px] border-b-border rounded hover:outline-none focus:outline-none"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone1" className="text-primary text-xs">
                Phone 1
              </label>
              <input
                type="tel"
                placeholder="Phone"
                name="phone1"
                value={info.phone1}
                onChange={(e) => setInfo({ ...info, phone1: e.target.value })}
                required
                className="w-full px-2 py-2 text-xs border-0 border-b-[1px] border-b-border rounded hover:outline-none focus:outline-none"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone2" className="text-primary text-xs">
                Phone 2
              </label>
              <input
                type="tel"
                placeholder="Phone"
                name="phone2"
                value={info.phone2}
                onChange={(e) => setInfo({ ...info, phone2: e.target.value })}
                required
                className="w-full px-2 py-2 text-xs border-0 border-b-[1px] border-b-border rounded hover:outline-none focus:outline-none"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="text-primary text-xs">
                Address
              </label>
              <textarea
                rows={2}
                placeholder="Address"
                name="address"
                value={info.address}
                onChange={(e) => setInfo({ ...info, address: e.target.value })}
                required
                className="w-full px-2 py-2 text-xs border-0 border-b-[1px] border-b-border rounded hover:outline-none focus:outline-none"
              ></textarea>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg p-6 w-full mx-auto">
            <h1 className="text-sm text-primary font-semibold">Socials</h1>
            <div className="mb-3">
              <label htmlFor="facebook_url" className="text-primary text-xs">
                Facebook
              </label>
              <input
                type="url"
                placeholder="Facebook URL"
                name="facebook_url"
                value={info.facebook_url}
                onChange={(e) =>
                  setInfo({ ...info, facebook_url: e.target.value })
                }
                className="w-full px-2 py-2 text-xs border-0 border-b-[1px] border-b-border rounded hover:outline-none focus:outline-none"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="instagram_url" className="text-primary text-xs">
                Instagram
              </label>
              <input
                type="url"
                placeholder="Instagram URL"
                name="instagram_url"
                value={info.instagram_url}
                onChange={(e) =>
                  setInfo({ ...info, instagram_url: e.target.value })
                }
                className="w-full px-2 py-2 text-xs border-0 border-b-[1px] border-b-border rounded hover:outline-none focus:outline-none"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="youtube_url" className="text-primary text-xs">
                Youtube
              </label>
              <input
                type="url"
                placeholder="Youtube URL"
                name="youtube_url"
                value={info.youtube_url}
                onChange={(e) =>
                  setInfo({ ...info, youtube_url: e.target.value })
                }
                className="w-full px-2 py-2 text-xs border-0 border-b-[1px] border-b-border rounded hover:outline-none focus:outline-none"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="linkedin_url" className="text-primary text-xs">
                Linked in
              </label>
              <input
                type="url"
                placeholder="Linked in URL"
                name="linkedin_url"
                value={info.linkedin_url}
                onChange={(e) =>
                  setInfo({ ...info, linkedin_url: e.target.value })
                }
                className="w-full px-2 py-2 text-xs border-0 border-b-[1px] border-b-border rounded hover:outline-none focus:outline-none"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="telegram_url" className="text-primary text-xs">
                Telegram
              </label>
              <input
                type="url"
                placeholder="Telegram URL"
                name="telegram_url"
                value={info.telegram_url}
                onChange={(e) =>
                  setInfo({ ...info, telegram_url: e.target.value })
                }
                className="w-full px-2 py-2 text-xs border-0 border-b-[1px] border-b-border rounded hover:outline-none focus:outline-none"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="tiktok_url" className="text-primary text-xs">
                TikTok
              </label>
              <input
                type="url"
                placeholder="TikTok URL"
                name="tiktok_url"
                value={info.tiktok_url}
                onChange={(e) =>
                  setInfo({ ...info, tiktok_url: e.target.value })
                }
                className="w-full px-2 py-2 text-xs border-0 border-b-[1px] border-b-border rounded hover:outline-none focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6 w-full mx-auto">
          <h1 className="text-sm text-primary font-semibold mb-2">Showreel</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
            <div className="flex flex-col items-center justify-center space-y-4 border rounded p-4">
              <label htmlFor="showreel_pc" className="text-primary text-xs">
                Showreel for Desktop
              </label>
              {/* {(info.showreel_pc) && (
                <div className="mt-4 w-full">
                  <video
                    key={(info.showreel_pc) as string}
                    controls
                    className="w-full max-h-48 rounded-lg"
                    src={(info.showreel_pc) as string }
                  />
                </div>
              )} */}
              {(pcShowreelUrl || info.showreel_pc) && (
                <div className="mt-4 w-full">
                  <video
                    key={(pcShowreelUrl || info.showreel_pc) as string}
                    controls
                    className="w-full max-h-48 rounded-lg"
                    src={(pcShowreelUrl || info.showreel_pc) as string}
                  />
                </div>
              )}
              <button
                type="button"
                onClick={() =>
                  document.getElementById("showreel_pc_input")?.click()
                }
              >
                <BsFolderFill size={25} className="inline text-primary" />
                <p className="text-gray-600 text-xs">
                  <span className="font-medium text-gray-900 text-xs">
                    Choose your file
                  </span>{" "}
                  to start uploading
                </p>
              </button>
              <input
                id="showreel_pc_input"
                type="file"
                name="showreel_pc"
                onChange={(e) => handleFileChange(e, "pcShowreel")}
                className="hidden"
                accept="video/*"
              />
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 border rounded p-4">
              <label htmlFor="showreel_mb" className="text-primary text-xs">
                Showreel for Mobile
              </label>
              {(mbShowreelUrl || info.showreel_mb) && (
                <div className="mt-4 w-full">
                  <video
                    key={mbShowreelUrl || info.showreel_mb}
                    controls
                    className="w-full max-h-48 rounded-lg"
                    src={mbShowreelUrl || info.showreel_mb as string}
                  />
                </div>
              )}
              <button
                type="button"
                onClick={() =>
                  document.getElementById("showreel_mb_input")?.click()
                }
              >
                <BsFolderFill size={25} className="inline text-primary" />
                <p className="text-gray-600 text-xs">
                  <span className="font-medium text-gray-900 text-xs">
                    Choose your file
                  </span>{" "}
                  to start uploading
                </p>
              </button>
              <input
                id="showreel_mb_input"
                type="file"
                name="showreel_mb"
                onChange={(e) => handleFileChange(e, "mbShowreel")}
                className="hidden"
                accept="video/*"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-end w-full justify-end mt-4">
          <button
            type="submit"
            className="py-2 px-4 rounded-lg bg-primary text-white border border-primary hover:bg-transparent hover:text-primary text-xs"
          >
            Save
          </button>
        </div>
      </form>
    </section>
  );
};

export default page;
