"use client";
import LoadingOverlay from "@/components/LoadingOverlay";
import { useRouter } from "next/navigation";
import { useState } from "react";

const TwoFactorForm = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const email = localStorage.getItem("auth-email");

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

      localStorage.setItem('auth-token',data.token);
      setLoading(false);
      if (response.ok) {
        router.push("/admin/dashboard");
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("something wrong")
    }
  };
  const handleRequestNewCode = async () => {
    setMessage('');
    setError('');
    setCode('');
    setLoading(true);
    const response = await fetch("/api/auth/request-new-2fa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();
    setMessage(data.message);

    setLoading(false);
    if (data.message === "New 2FA code sent to your email.") {
      setTimeout(() => {
        router.push("/auth/verify-2fa");
      }, 2000); 
    }

  };

  return (
    <>
      {loading && <LoadingOverlay />}
        <div className="p-4 m-auto min-w-auto sm:min-w-[320px] shadow-xl border rounded">
          <h1 className="text-2xl font-bold uppercase font-lora text-center">
            Authentication
          </h1>
          <hr className="bg-hr" />
          {error && (
            <p className="mt-2 text-sm text-red-700 rounded-lg">
              {error}
            </p>
          )}
          {message && (
            <p className="mt-2 text-sm text-green-700 rounded-lg">
              {message}
            </p>
          )}

          <form className="mt-8 " onSubmit={submitTwoFactorCode}>
            <div className="mb-6">
              <div className="flex justify-between items-center w-full gap-12 mb-2">
                <label htmlFor="code" className="text-textColor text-xs">
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
                className="w-full px-2 py-2 text-xs border border-border rounded hover:outline-none focus:outline-none"
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
    </>
  );
};

export default TwoFactorForm;
