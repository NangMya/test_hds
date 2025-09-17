import AOSProvider from "@/components/AOSProvider";
import "./globals.css";

export const metadata = {
  title: "HDS",
  description: "Default description for my website.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`antialiased overflow-x-hidden font-graphik`}>
        <AOSProvider>{children}</AOSProvider>
      </body>
    </html>
  );
}
