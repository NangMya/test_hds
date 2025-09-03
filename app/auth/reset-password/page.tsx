"use client"

import {  useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react'

const page = () => {
    const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const token = searchParams.get('token'); 
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/auth/reset-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, password: newPassword }),
    });

    const data = await res.json();
    setLoading(false)
    console.log('data',data);
    
    if (data.status == 200) {
      setMessage(data.message);
      router.push("/auth/login"); 
    }else{
      setError(data.message)
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="p-4 m-auto max-w-[500px] shadow-xl border rounded">
        <h1 className="text-2xl font-bold uppercase font-lora">
          Reset Password
        </h1>
        <hr className="bg-hr" />
        {error && (
          <div className="p-4 text-sm text-red-700 bg-red-100 rounded-lg">
            {error}
          </div>
        )}
        {message && (
          <div className="p-4 text-sm text-green-700 bg-green-100 rounded-lg">
            {message}
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="new_password" className="text-textColor">
              New Password
            </label>
            <input
              type="password"
              placeholder="New Password"
              name="new_password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="w-full px-4 py-1 border border-border rounded hover:outline-none focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-primary text-white float-end rounded border text-sm border-primary hover:bg-transparent hover:text-primary transition-all duration-500"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  )
}

export default page