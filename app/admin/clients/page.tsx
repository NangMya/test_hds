"use client";
import ClientImageCard from "@/components/ClientImageCard";
import LoadingOverlay from "@/components/LoadingOverlay";
import { confirmDialog, errorAlert, successAlert } from "@/lib/swalUtils";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaPlusSquare, FaTimesCircle } from "react-icons/fa";

type ClientProps = {
  id: number;
  name: string;
  logo: string | null;
};
const page = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [clients, setClients] = useState<ClientProps[]>([]);
  const [selectedImage, setSelectedImage] = useState<string>("");

  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleDivClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    fileInputRef.current?.click();
  };
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const maxSizeInBytes = 1 * 1024 * 1024; // 1MB

    if (file && file.size > maxSizeInBytes) {
      errorAlert("File too large! Maximum size is 5MB.");
      return;
    }
    if (file) {
      const url = URL.createObjectURL(file);
      setSelectedImage(url);
    }

    try {
      const formData = new FormData();
      if (file) {
        formData.append("name", file.name);
        formData.append("logo", file);
      }
      const response = await fetch("/api/admin/client", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      if (result.error) {
        setError(result.error || "An error occurred. Please try again later.");
        throw new Error(result.error || "Failed to update.");
      }
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      fetchClients();
      successAlert("Successfully updated.");
    } catch (error: any) {
      setError(error.message || "An error occurred. Please try again later.");
      errorAlert(error.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const fetchClients = async () => {
    try {
      const response = await fetch("/api/admin/client");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setLoading(false)
      setClients(data);
      setSelectedImage("");
    } catch (error) {
      setError("Failed to fetch clients");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchClients();
  }, []);

  const handleDeleteClient = async (id: number) => {
    const confirmed = await confirmDialog();
    if (!confirmed) return;
    try {
      setLoading(true);
      const res = await fetch(`/api/admin/client/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (res.ok) {
        successAlert("Client deleted successfully");
        setClients(clients.filter((client) => client.id !== id));
        fetchClients();
      } else {
        errorAlert(data.error || "Delete failed");
      }
    } catch (error) {
      console.error("Delete failed:", error);
      errorAlert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20">
    <div className="bg-white shadow rounded-lg p-6">
      {loading && <LoadingOverlay />}
      {error && <p className="text-red-500">{error}</p>}

      <h5 className="text-lg text-primary font-semibold font-lora mb-4">
        Our Clients
      </h5>
      <div className="flex flex-row flex-wrap gap-4 items-center">
        <div
          className="flex justify-center items-center border border-gray-300 rounded-lg cursor-pointer w-24 h-24"
          onClick={handleDivClick}
        >
          <FaPlusSquare size={20} />
        </div>
        <input
          name="logo"
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept="image/*"
        />
        {selectedImage && (
          <div className="flex justify-center items-center  border-2 border-green-4000 rounded-lg cursor-pointer  p-1">
            <Image
              alt="text"
              src={selectedImage}
              width={100}
              height={100}
              className="w-24 h-24 object-contain"
            />
          </div>
        )}

        {clients &&
          clients.map((client: ClientProps) => (
            <ClientImageCard
              key={client.id}
              client={client as any}
              onDelete={handleDeleteClient}
            />
          ))}
      </div>
    </div>
    </section>
  );
};

export default page;
