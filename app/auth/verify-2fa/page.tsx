import TwoFactorForm from "@/components/TwoFactorForm";

export const metadata = {
  title: "Authentication | Admin Dashboard",
  description: "Secure your account with two-factor verification. Learn how to add a critical layer of protection and keep your personal data safe from unauthorized access.",
};

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <TwoFactorForm  />
    </div>
  );
};

export default page;
