import RegisterForm from "@/components/RegisterForm";

export const metadata = {
  title: "Register | Admin Dashboard",
  description: "Secure admin login to your dashboard.",
};

const AdminLoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <RegisterForm />
    </div>
  );
};

export default AdminLoginPage;
