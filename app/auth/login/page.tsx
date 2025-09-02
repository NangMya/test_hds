import AdminLoginForm from "@/components/AdminLoginForm";

export const metadata = {
  title: "Login | Admin Dashboard",
  description: "Secure admin login to your dashboard.",
};

const AdminLoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <AdminLoginForm  />
    </div>
  );
};

export default AdminLoginPage;
