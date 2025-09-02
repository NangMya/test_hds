import "./globals.css";

// This component remains a Server Component by default, which is the best practice.
// It will not cause hydration errors because it doesn't use client-side hooks.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`antialiased overflow-x-hidden font-graphik`}>
        {children}
      </body>
    </html>
  );
}
