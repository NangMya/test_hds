"use client";
import LoadingOverlay from "@/components/LoadingOverlay";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Verify2FA = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const email = localStorage.getItem("auth-email");
  console.log("email", email);

  const submitTwoFactorCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/auth/verify-2fa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code, email }),
      });

      const data = await response.json();

      setLoading(false);
      if (response.ok) {
        router.push("/admin/dashboard");
        localStorage.setItem("auth-token", data.token);
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("something wrong")
    }
  };
  const handleRequestNewCode = async () => {
    const response = await fetch("/api/auth/request-new-2fa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();
    setMessage(data.message);

    if (data.message === "New 2FA code sent to your email.") {
      setTimeout(() => {
        router.push("/admin/verify-2fa");
      }, 2000); 
    }
  };

  return (
    <>
      {loading && <LoadingOverlay />}
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="p-4 m-auto max-w-[500px] shadow-xl border rounded">
          <h1 className="text-2xl font-bold uppercase font-lora">
            Authentication
          </h1>
          <hr className="bg-hr" />
          {error && (
            <div className="p-4 text-sm text-red-700 bg-red-100 rounded-lg">
              {error}
            </div>
          )}

          <form className="mt-8 space-y-6" onSubmit={submitTwoFactorCode}>
            <div className="mb-6">
              <div className="flex justify-between items-center w-full gap-12">
                <label htmlFor="code" className="text-textColor">
                  Your Authentication Code
                </label>
                <span
                  className="text-xs underline cursor-pointer hover:text-primary"
                  onClick={handleRequestNewCode}
                >
                  Resend
                </span>
              </div>
              <input
                type="text"
                placeholder="XXXXXXX"
                name="code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required
                className="w-full px-4 py-1 border border-border rounded hover:outline-none focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white float-end rounded border text-sm border-primary hover:bg-transparent hover:text-primary transition-all duration-500"
            >
              Verify
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Verify2FA;
