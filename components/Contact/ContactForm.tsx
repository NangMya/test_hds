"use client";
import React, { useState } from "react";
import LoadingOverlay from "../LoadingOverlay";
import { errorAlert, successAlert } from "@/lib/swalUtils";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    setLoading(true);
    
    try {
      const res = await fetch("/api/web/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await res.json();
      setLoading(false);
      if (result.error) {
        errorAlert(result.error);
      } else {
        setTimeout(() => {
          setForm({ name: "", email: "", phone: "", message: "" });
          successAlert("Your message has been sent.");
        }, 500);
      }
    } catch (err) {
      errorAlert("Something went wrong");
    } finally {
      setTimeout(() => setLoading(false), 1000);
    }
  };
  return (
    <div className="px-4 sm:px-16 font-lora pt-6 sm:pt-0">
      {loading && <LoadingOverlay />}
      <form onSubmit={handleSendMessage}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-10 pb-6">
          <div>
            <label
              htmlFor="name"
              className="text-xs sm:text-sm uppercase block"
            >
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="border-b border-b-border focus:outline-none hover:outline-none w-full py-2"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="text-xs sm:text-sm uppercase block"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="border-b border-b-border focus:outline-none hover:outline-none w-full py-2"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="text-xs sm:text-sm uppercase block"
            >
              Phone Number (Optional)
            </label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="border-b border-b-border focus:outline-none hover:outline-none w-full py-2"
            />
          </div>
        </div>
        <div className="mt-4">
          <label
            htmlFor="message"
            className="text-xs sm:text-sm uppercase block"
          >
            Message
          </label>
          <textarea
            name="message"
            rows={1}
            value={form.message}
            onChange={handleChange}
            className="border-b border-b-border focus:outline-none hover:outline-none w-full pt-6"
          />
        </div>
        <div className="flex justify-between w-full">
          <button
            type="submit"
            className="text-black font-bold inline-flex items-center text-xs focus:outline-none cursor-pointer"
          >
            Leave us message
            <span className="ml-2 font-normal text-xl">&#8594;</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
