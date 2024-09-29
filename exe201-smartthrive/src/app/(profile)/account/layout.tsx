"use client"
import React  , { useState }  from "react";
import { Inter } from "next/font/google";
import { NavBar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../../globals.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

const sidebarItems = [
  { name: 'Profile', icon: 'fa-home', href: '/account/profile' },
  { name: 'Course', icon: 'fa-users', href: '/account/course' },
  { name: 'Order', icon: 'fa-folder', href: '/account/order' },
  { name: 'Calendar', icon: 'fa-calendar', href: '/calendar' },
  { name: 'Home', icon: 'fa-file', href: '/' },
  { name: 'Reports', icon: 'fa-chart-pie', href: '/reports' },
];

const teamItems = [
  { name: 'Heroicons', initial: 'H', href: '/team/heroicons' },
  { name: 'Tailwind Labs', initial: 'T', href: '/team/tailwind-labs' },
  { name: 'Workcation', initial: 'W', href: '/team/workcation' },
];
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  const [activeItem, setActiveItem] = useState(sidebarItems[0].name);

  return (
    
    <div>
    {/* <NavBar /> */}
    <div>
      <div className={inter.className}>
        <div className="flex h-screen">
          <div className="w-1/5 h-full p-4">
          <aside className="bg-[#1a202c] text-gray-400 w-1/5 h-screen fixed">
            <div className="p-6">
              <h2 className="text-white text-2xl font-bold">
                <span className="text-[#63b3ed]">Your</span>App
              </h2>
            </div>
            <ul className="space-y-2">
              {sidebarItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className={`flex items-center px-4 py-2 rounded-lg 
                    ${activeItem === item.name ? 'bg-[#2d3748] text-white' : 'hover:bg-[#2d3748]'}`}
                    onClick={() => setActiveItem(item.name)}
                  >
                    <i className={`fas ${item.icon} mr-3`}></i>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 px-6">
              <h3 className="text-gray-500 font-medium">Your teams</h3>
              <ul className="mt-2 space-y-2">
                {teamItems.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="flex items-center px-4 py-2 rounded-lg hover:bg-[#2d3748]">
                      <span className="bg-[#4a5568] text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3">
                        {item.initial}
                      </span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          </div>
          <div className="w-4/5 h-full">
          <main className="overflow-auto p-4">{children}</main>
          </div>
        </div>
      </div>
    </div>
    {/* <Footer /> */}
  </div>
  );
}
