"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import LoadingOverlay from "./LoadingOverlay";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, name }),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        // Redirect to login page after successful registration
        router.push("/admin/login");
      } else {
        setError(data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setError("An error occurred. Please try again later.");
    }
  };
  return (
    <>
    {
      loading && <LoadingOverlay/>
    }
    <div className="py-4 px-6 m-auto max-w-[600px] shadow-xl border rounded">
      <h1 className="text-2xl font-bold uppercase font-lora">
         Create new account
      </h1>
      <hr className="bg-hr" />
      {error && (
        <div className="p-4 text-sm text-red-700 bg-red-100 rounded-lg">
          {error}
        </div>
      )}

      <form className="mt-8 space-y-6" onSubmit={handleRegister}>
      <div className="mb-6">
          <label htmlFor="name" className="text-textColor">
            Name
          </label>
          <input
            type="name"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required
            className="w-full px-4 py-1 border border-border rounded hover:outline-none focus:outline-none"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="text-textColor">
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
            className="w-full px-4 py-1 border border-border rounded hover:outline-none focus:outline-none"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="text-textColor">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
            className="w-full px-4 py-1 border border-border rounded hover:outline-none focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-primary text-white float-end rounded border text-sm border-primary hover:bg-transparent hover:text-primary transition-all duration-500"
        >
           Register
        </button>
      </form>
    </div>
    </>
  );
};

export default RegisterForm;
