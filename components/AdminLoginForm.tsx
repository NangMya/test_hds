"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import LoadingOverlay from "./LoadingOverlay";
import Link from "next/link";

const AdminLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
    setLoading(false);

      if (response.ok) {
        router.push("/admin/verify-2fa");
        localStorage.setItem("auth-email", data.email);
      } else {
        setError(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <>
    {
      loading && <LoadingOverlay/>
    }
    <div className="p-4 m-auto max-w-[500px] shadow-xl border rounded">
     
      <h1 className="text-2xl font-bold uppercase font-lora">
        Sign in to your account
      </h1>
      <hr className="bg-hr" />
      {error && (
        <div className="p-4 text-sm text-red-700 bg-red-100 rounded-lg">
          {error}
        </div>
      )}

      <form className="mt-8 space-y-6" onSubmit={handleLogin}>
        <div className="mb-6">
          <label htmlFor="email" className="text-textColor">
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-1 border border-border rounded hover:outline-none focus:outline-none"
          />
        </div>
        <div className="flex justify-end">
          <Link href="/admin/forgot-password" className="text-xs underline hover:text-primary ">Forgot Password</Link>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-primary text-white float-end rounded border text-sm border-primary hover:bg-transparent hover:text-primary transition-all duration-500"
        >
          Log In
        </button>
      </form>
    </div>
    </>
  );
};

export default AdminLoginForm;
