"use client";

import {useGSAP} from "@gsap/react";
import {useEffect, useRef, useState} from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import Drop from "./button/drop";
import Image from "next/image";
import Link from "next/link";
import Support from "./auth/supporter/support";
import CategoryService from "@/services/category-service";
import {Category} from "@/services/model/category";

gsap.registerPlugin(ScrollTrigger);

export const NavBar = () => {
  const [hoverTransition, setHoverTransition] = useState("hover:mx-12");
  const [navItems, setNavItems] = useState<Category[] | null>(null);
  const [navBackground, setNavBackground] = useState("bg-[#ffffff]");
  const [borderTransition, setBorderTransition] =
    useState("mx-12 border-black");
  const navRef = useRef(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };
  useEffect(() => {
    const fetchApi = async () => {
      var result = await CategoryService.getAll();
      setNavItems(result.results);
    };
    fetchApi();
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBackground("bg-[#ffffff] text-black");
        setBorderTransition("px-12 border-black");
        setHoverTransition("hover:px-0 hover:mx-12");
      } else {
        setNavBackground("bg-[#ffffff] text-black");
        setBorderTransition("mx-12 border-black");
        setHoverTransition("hover:mx-12");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  //   console.log(navItems);
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
  return (
    <>
      {navItems && (
        <nav
          ref={navRef}
          className={`nav  fixed z-30 w-full font-semibold text-[0.8rem] transition-all duration-500 oswald-text ${navBackground} text-black ${
            hoverTransition == "hover:mx-12"
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
                <div className="relative">
                  Trang chủ
                  <span className="absolute line w-0 h-[1px] bg-black top-7 left-0 group-hover:w-full transition-all duration-300"></span>
                </div>
              </Link>
              <div className="group nav-item min-w-12 px-4 py-8 pb-9 nav-text cursor-pointer relative ">
                <div className="">
                  <Link href={`/category`} className="relative">
                    Thể loại
                    <span className="absolute line w-0 h-[1px] bg-black top-7 left-0 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </div>

                <ul className="navLv0 absolute min-h-[95vh] bg-white shadow-xl top-[5.5rem] left-0 min-w-[18vw] translate-y-36 opacity-0 transition-all duration-300 invisible  group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {navItems.map((list, key) => (
                    <li key={key} className="navItemLv0">
                      <div
                        className={` min-h-12 items-center flex px-4 w-full h-full hover:bg-slate-400`}
                      >
                        <span className={`flex justify-between w-full`}>
                          <div
                          // href={`/category?category=${list.name}&categoryId=${list.id}`}
                          >
                            {list.name}
                          </div>
                          <Image
                            src="/arrow_right_2.svg"
                            width={15}
                            height={15}
                            alt="arrow"
                          />
                        </span>
                      </div>
                      <div
                        className={`navLv1 absolute top-0 left-[16.8rem] bg-white shadow-xl transition-all duration-300 translate-y-36 invisible opacity-0 min-w-[18vw] min-h-[95vh] `}
                      >
                        {list.subjects &&
                          list.subjects.map((subLv1, key) => (
                            <div key={key} className="navItemLv1">
                              <div className="navItemLv1 min-h-12 flex items-center px-4 justify-between hover:bg-slate-400">
                                <Link
                                  href={`/category?subject=${subLv1.name}&subjectId=${subLv1.id}&categoryId=${list.id}`}
                                >
                                  {subLv1.name}
                                </Link>
                              </div>
                            </div>
                          ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="group nav-item min-w-12 mx-4 py-8 nav-text cursor-pointer">
                <Link href={"/blog"}>
                  <div className="relative">
                    Blog
                    <span className="absolute line w-0 h-[1px] bg-black top-7 left-0 group-hover:w-full transition-all duration-300"></span>
                  </div>
                </Link>
              </div>
              <div
                className="group nav-item min-w-12 mx-4 py-8 nav-text cursor-pointer"
                onClick={toggleForm}
              >
                <p className="relative">
                  Tư vấn
                  <span className="absolute line w-0 h-[1px] bg-black top-7 left-0 group-hover:w-full transition-all duration-300"></span>
                </p>
              </div>
              <div className="group nav-item min-w-12 mx-4 py-8 nav-text cursor-pointer">
                <Link href={"/about"} className="relative">
                  Giới thiệu
                  <span className="absolute line w-0 h-[1px] bg-black top-7 left-0 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </div>
            </li>
            <li className="container-logo absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h2 className="logo-text text-[1.9rem] font-extrabold oswald-text nav-text cursor-pointer">
                SmartThrive
              </h2>
            </li>
            <li className=" grid place-items-center">
              <Drop />
            </li>
          </ul>
        </nav>
      )}

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
