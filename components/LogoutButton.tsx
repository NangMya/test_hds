'use client'

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("auth-token");
    router.push("/auth/login");
  };

  return (
    <form onSubmit={handleLogout}>
      <button
        type="submit"
        className="px-4 text-xs pt-2 pb-3 font-medium text-white bg-primary rounded-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      >
        Logout
      </button>
    </form>
  )
}