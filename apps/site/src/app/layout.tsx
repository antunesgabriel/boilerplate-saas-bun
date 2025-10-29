import type { Metadata } from "next";
import "@repo/ui/styles/globals.css";

export const metadata: Metadata = {
  title: "Site App",
  description: "Site application built with Next.js and @repo/ui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
