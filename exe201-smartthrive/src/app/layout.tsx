"use client";
import React, { Suspense, useEffect, useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        {isClient && <main>{children}</main>}
      </body>
    </html>
  );
}
