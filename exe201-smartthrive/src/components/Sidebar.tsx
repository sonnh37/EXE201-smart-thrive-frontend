"use client"
import React, {useState} from 'react';

const sidebarItems = [
    {name: 'Profile', icon: 'fa-home', href: '/account'},
    {name: 'Course', icon: 'fa-users', href: '/account/course'},
    {name: 'Order', icon: 'fa-folder', href: '/account/order'},
    {name: 'Calendar', icon: 'fa-calendar', href: '/calendar'},
    {name: 'Documents', icon: 'fa-file', href: '/documents'},
    {name: 'Reports', icon: 'fa-chart-pie', href: '/reports'},
];

const teamItems = [
    {name: 'Heroicons', initial: 'H', href: '/team/heroicons'},
    {name: 'Tailwind Labs', initial: 'T', href: '/team/tailwind-labs'},
    {name: 'Workcation', initial: 'W', href: '/team/workcation'},
];

const Sidebar = () => {
    const [activeItem, setActiveItem] = useState(sidebarItems[0].name);

    return (
        <aside className="bg-[#1a202c] text-gray-400 w-1/5 h-screen fixed">
            <div className="p-6">
                <h2 className="text-white text-2xl font-bold">
                    {/* Replace this with your logo or application name */}
                    <span className="text-[#63b3ed]">Your</span>App
                </h2>
            </div>
            <ul className="space-y-2">
                {sidebarItems.map((item) => (
                    <li key={item.name}>
                        <a
                            href={item.href}
                            className={`
                flex items-center px-4 py-2 rounded-lg
                ${activeItem === item.name ? 'bg-[#2d3748] text-white' : 'hover:bg-[#2d3748]'}
              `}
                            onClick={() => setActiveItem(item.name)}
                        >
                            <i className={`fas ${item.icon} mr-3`}></i>
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="mt-8 px-6">
                <h3 className="text-gray-500 font-medium">Your teams</h3>
                <ul className="mt-2 space-y-2">
                    {teamItems.map((item) => (
                        <li key={item.name}>
                            <a
                                href={item.href}
                                className="flex items-center px-4 py-2 rounded-lg hover:bg-[#2d3748]"
                            >
                <span
                    className="bg-[#4a5568] text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3">
                  {item.initial}
                </span>
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;