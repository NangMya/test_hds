"use client";

import React, { useState } from "react";

const page = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error,setError] = useState('');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/auth/forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    if(data.status == 200){
      setMessage(data.message);
    }else{
      setError(data.message);
    }
  };
  return(
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="p-4 m-auto max-w-[500px] shadow-xl border rounded">
        <h1 className="text-2xl font-bold uppercase font-lora">
          Forgot Password
        </h1>
        <hr className="bg-hr" />
        {error && (
          <div className="p-4 text-sm text-red-700 bg-red-100 rounded-lg">
            {error}
          </div>
        )}
         {message && (
          <div className="py-4 text-sm text-green-700  rounded-lg">
            {message}
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="text-textColor">
              Your Email
            </label>
            <input
              type="text"
              placeholder="Email"
              name="code"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-1 border border-border rounded hover:outline-none focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-primary text-white float-end rounded border text-sm border-primary hover:bg-transparent hover:text-primary transition-all duration-500"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  )
};

export default page;
