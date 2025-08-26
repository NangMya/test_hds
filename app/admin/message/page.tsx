"use client"; 

import DashboardLayout from "@/components/layouts/DashboardLayout";
import LoadingOverlay from "@/components/LoadingOverlay";
import { useRouter } from "next/navigation"; 
import React, { useEffect, useState } from "react";

type MessageProps = {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  created_at: string;
  updated_at: string;
};

const Page = () => {
  const router = useRouter();
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true); 

  useEffect(() => {
  
    const fetchMessages = async () => {
      try {
        const response = await fetch("/api/message");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMessages(data);
      } catch (err) {
        console.error(err); 
        setError("Failed to fetch messages");
      } finally {
        setLoading(false); 
      }
    };

    fetchMessages();
  }, [router]);


  return (
    <DashboardLayout>
      <div className="bg-white shadow rounded-lg p-6">
        {
          loading && <LoadingOverlay/>
        }
        {error && <p className="text-red-500">{error}</p>}
        {messages.map((msg: MessageProps) => (
          <div key={msg.id} className="p-4 rounded-md shadow bg-white border">
            <p>
              <strong>Name:</strong> {msg.name}
            </p>
            <p>
              <strong>Email:</strong> {msg.email}
            </p>
            <p>
              <strong>Message:</strong> {msg.message}
            </p>
            <p className="text-sm text-gray-500">
              {new Date(msg.created_at).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Page;
