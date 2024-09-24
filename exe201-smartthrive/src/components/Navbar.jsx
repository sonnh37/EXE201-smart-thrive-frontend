"use client";

import { useGSAP } from "@gsap/react";
import { useState, useEffect } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import Drop from "./Button/Drop";
import { CategoryItem } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import Support from "./Auth/Supporter/support";
gsap.registerPlugin(ScrollTrigger);
export const NavBar = () => {
  const [hoverTransition, setHoverTransition] = useState("hover:mx-12");
  const [navBackground, setNavBackground] = useState("bg-transparent");
  const [borderTransition, setBorderTransition] =
    useState("mx-12 border-black");
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };
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
        setNavBackground("bg-transparent text-black");
        setBorderTransition("px-12 border-black");
        setHoverTransition("hover:px-0 hover:mx-12");
      } else {
        setNavBackground("bg-transparent text-black");
        setBorderTransition("mx-12 border-black");
        setHoverTransition("hover:mx-12");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  return (
    <>
      <nav
        className={`nav fixed z-30 w-full font-semibold text-[0.8rem] transition-all duration-500 oswald-text ${navBackground} text-black ${hoverTransition == "hover:mx-12"
            ? "hover:bg-white hover:text-black"
            : "bg-white hover:text-black"
          }`}
      >
        <ul
          className={`main-nav flex justify-between border-b ${borderTransition} ${hoverTransition} transition-all duration-100 hover:border-black`}
        >
          <li className="container-nav flex min-w-fit text-center">
            <Link
              href="/"
              className="group nav-item mx-4 my-8 ml-0 nav-text cursor-pointer min-w-12"
            >
              <p className="relative">
                Home
                <span className="absolute line w-0 h-[1px] bg-black top-7 left-0 group-hover:w-full transition-all duration-300"></span>
              </p>
            </Link>
            <div className="group nav-item min-w-12 px-4 py-8 pb-9 nav-text cursor-pointer relative ">
              <Link href="/Category" className="">
                <p className="relative">
                  Category
                  <span className="absolute line w-0 h-[1px] bg-black top-7 left-0 group-hover:w-full transition-all duration-300"></span>
                </p>
              </Link>

              <ul className="navLv0 absolute min-h-[95vh] bg-white shadow-xl top-[5.5rem] left-0 min-w-[18vw] translate-y-36 opacity-0 transition-all duration-300 invisible  group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                {CategoryItem.map((list) => (
                  <Link
                    href={`/Category${list.path}`}
                    key={list.name}
                    className={`navItemLv0 min-h-12 items-center flex px-4 w-full h-full hover:bg-slate-400`}
                  >
                    <span className={`flex justify-between w-full`}>
                      <p>{list.name}</p>
                      <Image
                        src="/arrow_right_2.svg"
                        width={15}
                        height={15}
                        alt="arrow"
                      />
                    </span>
                    <p
                      className={`navLv1 absolute top-0 left-[16.8rem] bg-white shadow-xl transition-all duration-300 translate-y-36 invisible opacity-0 min-w-[18vw] min-h-[95vh] `}
                    >
                      {list.subLv1.map((subLv1) => (
                        <Link
                          href={`Category${subLv1.path}`}
                          className="navItemLv1 min-h-12 flex items-center px-4 justify-between hover:bg-slate-400"
                          key={subLv1.name}
                        >
                          <p>{subLv1.name}</p>
                          <Image
                            src="/arrow_right_2.svg"
                            width={15}
                            height={15}
                            alt="arrow"
                          />
                          <p className="navLv2 absolute top-0 left-[16.8rem] bg-white shadow-xl transition-all duration-300 translate-y-36 invisible opacity-0 min-w-[18vw] min-h-[95vh]">
                            <p className="min-h-12 flex items-center opacity-70 text-left px-4 ">
                              Popular topics
                            </p>
                            {subLv1.subLv2.map((subLv2) => (
                              <Link
                                href={`/Category${subLv2.path}`}
                                key={subLv2.name}
                                className="navItemLv2 min-h-12 flex items-center px-4 hover:bg-slate-400 text-left"
                              >
                                <p>{subLv2.name}</p>
                              </Link>
                            ))}
                          </p>
                        </Link>
                      ))}
                    </p>
                  </Link>
                ))}
              </ul>
            </div>
            <div className="group nav-item min-w-12 mx-4 py-8 nav-text cursor-pointer">
              <Link href={"/blog"}>
                <p className="relative">
                  Blog
                  <span className="absolute line w-0 h-[1px] bg-black top-7 left-0 group-hover:w-full transition-all duration-300"></span>
                </p>
              </Link>
            </div>

            <div className="group nav-item min-w-12 mx-4 py-8 nav-text cursor-pointer" onClick={toggleForm}>
              <p className="relative">
                Tư vấn
                <span className="absolute line w-0 h-[1px] bg-black top-7 left-0 group-hover:w-full transition-all duration-300"></span>
              </p>
            </div>
            <div className="group nav-item min-w-12 mx-4 py-8 nav-text cursor-pointer">
              <p className="relative">
                About Us
                <span className="absolute line w-0 h-[1px] bg-black top-7 left-0 group-hover:w-full transition-all duration-300"></span>
              </p>
            </div>
          </li>
          <li className="container-logo absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h2 className="logo-text text-[1.9rem] font-extrabold oswald-text nav-text cursor-pointer">
              SmartThrive.
            </h2>
          </li>
          <li className=" grid place-items-center">

            <Drop />
          </li>


        </ul>
      </nav>
      {isFormVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded shadow-lg w-1/3">
            <Support />
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-red-500 text-white px-4 py-2 rounded ml-2"
                onClick={toggleForm}
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

