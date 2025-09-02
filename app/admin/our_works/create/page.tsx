"use client";

import FormTitle from "@/components/FormTitle";
import LoadingOverlay from "@/components/LoadingOverlay";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const initialState = {
  date: "",
  title_en: "",
  title_km: "",
  description_en: "",
  description_km: "",
  challenges_en: "",
  challenges_km: "",
  strategy_en: "",
  strategy_km: "",
  takeaway_en: "",
  takeaway_km: "",
  image: null as File | null,
};
type WorkForm = {
  date: string;
  title_en: string;
  title_km: string;
  description_en: string;
  description_km: string;
  challenges_en: string;
  challenges_km: string;
  strategy_en: string;
  strategy_km: string;
  takeaway_en: string;
  takeaway_km: string;
  image: File | null;
};

const page = () => {
  const [work, setWork] = useState<WorkForm>(initialState);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("date", work.date);
    formData.append("title_en", work.title_en);
    formData.append("title_km", work.title_km);
    formData.append("description_en", work.description_en);
    formData.append("description_km", work.description_km);
    formData.append("challenges_en", work.challenges_en);
    formData.append("challenges_km", work.challenges_km);
    formData.append("strategy_en", work.strategy_en);
    formData.append("strategy_km", work.strategy_km);
    formData.append("takeaway_en", work.takeaway_en);
    formData.append("takeaway_km", work.takeaway_km);
    if (work.image) formData.append("image", work.image);

    try {
      const response = await fetch("/api/admin/our_work", {
        method: "POST",
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
      {loading && <LoadingOverlay />}

      <div className="bg-white p-4 rounded-lg">
        <FormTitle title="Create Our Work" />
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
          <div className="mb-4">
            <label htmlFor="date" className="text-primary text-sm">
              Date
            </label>
            <input
              type="date"
              placeholder="Date"
              name="date"
              value={work.date}
              onChange={(e) => setWork({ ...work, date: e.target.value })}
              required
              className="w-full px-2 py-2 text-xs border border-border rounded hover:outline-none focus:outline-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-x-4 items-center">
            <div className="mb-4">
              <label htmlFor="title_en" className="text-primary text-sm">
                Title EN
              </label>
              <input
                type="title_en"
                placeholder="Title (EN)"
                name="title_en"
                value={work.title_en}
                onChange={(e) => setWork({ ...work, title_en: e.target.value })}
                required
                className="w-full px-2 py-2 text-xs border border-border rounded hover:outline-none focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="title_km" className="text-primary text-sm">
                Title KM
              </label>
              <input
                type="title_km"
                placeholder="Title (KM)"
                name="title_km"
                value={work.title_km}
                onChange={(e) => setWork({ ...work, title_km: e.target.value })}
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
                value={work.description_en}
                onChange={(e) =>
                  setWork({ ...work, description_en: e.target.value })
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
                value={work.description_km}
                onChange={(e) =>
                  setWork({ ...work, description_km: e.target.value })
                }
                className="w-full px-2 py-2 text-xs border border-border rounded hover:outline-none focus:outline-none"
                placeholder="Description (KM)"
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="challenges_en" className="text-primary text-sm">
                Challenges EN
              </label>
              <textarea
                rows={2}
                name="challenges_en"
                value={work.challenges_en}
                onChange={(e) =>
                  setWork({ ...work, challenges_en: e.target.value })
                }
                className="w-full px-2 py-2 text-xs border border-border rounded hover:outline-none focus:outline-none"
                placeholder="Challenges (EN)"
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="challenges_km" className="text-primary text-sm">
                Challenges KM
              </label>
              <textarea
                rows={2}
                name="challenges_km"
                value={work.challenges_km}
                onChange={(e) =>
                  setWork({ ...work, challenges_km: e.target.value })
                }
                className="w-full px-2 py-2 text-xs border border-border rounded hover:outline-none focus:outline-none"
                placeholder="Challenges (KM)"
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="strategy_en" className="text-primary text-sm">
                Strategy EN
              </label>
              <textarea
                rows={2}
                name="strategy_en"
                value={work.strategy_en}
                onChange={(e) =>
                  setWork({ ...work, strategy_en: e.target.value })
                }
                className="w-full px-2 py-2 text-xs border border-border rounded hover:outline-none focus:outline-none"
                placeholder="Strategy (EN)"
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="strategy_km" className="text-primary text-sm">
                Strategy KM
              </label>
              <textarea
                rows={2}
                name="strategy_km"
                value={work.strategy_km}
                onChange={(e) =>
                  setWork({ ...work, strategy_km: e.target.value })
                }
                className="w-full px-2 py-2 text-xs border border-border rounded hover:outline-none focus:outline-none"
                placeholder="Strategy (KM)"
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="takeaway_en" className="text-primary text-sm">
                Takeaway EN
              </label>
              <textarea
                rows={2}
                name="takeaway_en"
                value={work.takeaway_en}
                onChange={(e) =>
                  setWork({ ...work, takeaway_en: e.target.value })
                }
                className="w-full px-2 py-2 text-xs border border-border rounded hover:outline-none focus:outline-none"
                placeholder="Takeaway (EN)"
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="takeaway_km" className="text-primary text-sm">
                Takeaway KM
              </label>
              <textarea
                rows={2}
                name="takeaway_km"
                value={work.takeaway_km}
                onChange={(e) =>
                  setWork({ ...work, takeaway_km: e.target.value })
                }
                className="w-full px-2 py-2 text-xs border border-border rounded hover:outline-none focus:outline-none"
                placeholder="Takeaway (KM)"
              ></textarea>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="text-primary text-sm">
              Image
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={(e) =>
                setWork({ ...work, image: e.target.files?.[0] ?? null })
              }
              className="w-full px-2 py-2 text-xs border border-border rounded hover:outline-none focus:outline-none"
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
