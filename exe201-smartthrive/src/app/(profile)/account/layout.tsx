import React from "react";
import { Inter } from "next/font/google";
import { NavBar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import Profile from "@/components/Auth/Profile/Profile";
import Sidebar from "@/components/Sidebar";
import "../../globals.css";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavBar />
      <div className={inter.className}>
        <div className="flex h-screen  ">
          {/* Cột trái (Sidebar) */}
          <aside className="w-1/5 bg-gray-200">
            <Sidebar />
          </aside>

          {/* Cột phải (Chính) */}
          <div className="w-3/4 flex flex-col">
            {/* Hàng trên (Profile) */}
            <section className="relative flex-shrink-0 mb-0">
              <Profile />
            </section>

            {/* Hàng dưới (Chính) */}
            <main className="flex-grow overflow-auto p-4">{children}</main>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
