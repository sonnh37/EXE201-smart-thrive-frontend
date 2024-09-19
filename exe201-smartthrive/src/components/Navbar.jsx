"use client";

import { useGSAP } from "@gsap/react";
import { useState, useEffect } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

export const NavBar = () => {
  const [hoverTransition, setHoverTransition] = useState("hover:mx-12");
  const [navBackground, setNavBackground] = useState("bg-white");
  const [borderTransition, setBorderTransition] =
    useState("mx-12 border-black");
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  useGSAP(() => {
    gsap.fromTo(
      ".nav-text",
      {
        y: 20,
        opacity: 0,
        translateY: 20,
      },
      {
        y: 0,
        opacity: 1,
        translateY: 0,
        duration: 0.5,
        stagger: 0.2,
      }
    );
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBackground("bg-white text-black");
        setBorderTransition("px-12 border-black");
        setHoverTransition("hover:px-0 hover:mx-12");
      } else {
        setNavBackground("bg-white text-black");
        setBorderTransition("mx-12 border-black");
        setHoverTransition("hover:mx-12");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSubmenuToggle = (isOpen) => {
    setIsSubmenuOpen(isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
  };

  return (
    <>
      <nav
        className={`nav fixed z-30 w-full font-semibold text-[0.8rem] transition-all duration-500 oswald-text ${navBackground} text-black ${
          hoverTransition == "hover:mx-12"
            ? "hover:bg-white hover:text-black"
            : "bg-white hover:text-black"
        }`}
      >
        <ul
          className={`main-nav flex justify-between border-b ${borderTransition} ${hoverTransition} transition-all duration-100 hover:border-black`}
        >
          <li className="container-nav flex min-w-fit">
            <div className="nav-item mx-4 my-8 ml-0 nav-text cursor-pointer">
              Home
            </div>
            <div
              className="nav-item px-4 py-8 nav-text cursor-pointer relative"
              onMouseEnter={() => handleSubmenuToggle(true)}
              onMouseLeave={() => handleSubmenuToggle(false)}
            >
              <span>Course</span>
            </div>
            <div className="nav-item mx-4 my-8 nav-text cursor-pointer">
              Blog
            </div>
            <div className="nav-item mx-4 my-8 nav-text cursor-pointer">
              About Us
            </div>
          </li>
          <li className="container-logo absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h2 className="logo-text text-[1.9rem] font-extrabold oswald-text nav-text cursor-pointer">
              SmartThrive.
            </h2>
          </li>
          <li className="container-auth mx-4 my-8 mr-0 nav-text cursor-pointer">
            Login/Register
          </li>
        </ul>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed top-0 left-0 inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isSubmenuOpen ? "opacity-100 z-20" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => handleSubmenuToggle(false)}
      ></div>

      {/* Submenu */}
      <div
        className={`submenu fixed left-0 top-[5rem] w-full bg-white text-black shadow-lg overflow-hidden transition-all duration-700 ease-in-out z-20 ${
          isSubmenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        onMouseEnter={() => handleSubmenuToggle(true)}
        onMouseLeave={() => handleSubmenuToggle(false)}
      >
        <div className="container mx-auto py-8 px-4">
          <div className="grid grid-cols-3 gap-8">
            <div className="submenu-item">
              <h3 className="font-bold text-lg mb-4">Category 1</h3>
              <ul className="space-y-2">
                <li>Sub-item 1.1</li>
                <li>Sub-item 1.2</li>
                <li>Sub-item 1.3</li>
              </ul>
            </div>
            <div className="submenu-item">
              <h3 className="font-bold text-lg mb-4">Category 2</h3>
              <ul className="space-y-2">
                <li>Sub-item 2.1</li>
                <li>Sub-item 2.2</li>
                <li>Sub-item 2.3</li>
              </ul>
            </div>
            <div className="submenu-item">
              <h3 className="font-bold text-lg mb-4">Category 3</h3>
              <ul className="space-y-2">
                <li>Sub-item 3.1</li>
                <li>Sub-item 3.2</li>
                <li>Sub-item 3.3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
