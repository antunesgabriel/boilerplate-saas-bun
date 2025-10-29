import type { Metadata } from "next";
import React from "react";
import "@repo/ui/globals.css";

export const metadata: Metadata = {
  title: "Site App",
  description: "Site application built with Next.js and @repo/ui",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
