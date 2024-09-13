import { useGSAP } from "@gsap/react";
import React from "react";
import { animteWithGsap } from "../../../utils/animations";
const HeroText = () => {
  useGSAP(() => {
    animteWithGsap(".bannerText");
  }, []);
  return (
    <div className="w-full h-full " id="banner">
      <div className="w-full">
        <h1 className="oswald-text font-bold mt-8 absolute top-40 left-[8rem] text-[5rem] text-black leading-[5.2rem] bannerText">
          Welcome to
        </h1>
        <h1 className="oswald-text font-bold mt-8 absolute top-[15rem] left-[8rem] text-[5rem] text-black leading-[5.2rem] bannerText">
          Smart Thrive.
          <br /> <span className="pl-12"></span>
        </h1>
        <div className="line bg-black opacity-70  w-[2px] h-[8.5rem] absolute top-[22rem] left-[8.5rem] bannerText">
          <span />
        </div>
        <p className="oswald-text absolute top-[25rem] left-[10rem] max-w-[32rem] text-black text-[1.2rem] leading-[2rem] text-left bannerText">
          Dự án sẽ là bên thứ ba giữa các trung tâm và khách hàng giúp gộp nhiều
          lĩnh vực lại thành 1 khóa học tùy theo nhu cầu của khách hàng.
        </p>
        {/* <button className="absolute top-[30rem] left-[10rem] mt-8 px-6 py-3 rounded-full uppercase font-bold bg-transparent text-black border-2 border-black hover:bg-black hover:text-white transition duration-300">
          Learn Now!
        </button> */}
        <span className="inline-block animate-bounce rounded-full p-4 top-[36rem] left-[47vw] text-black text-sm absolute bannerText">
          <p className=" font-semibold text-black text-[1rem] leading-[2rem] text-center">
            Scroll down
          </p>
          <svg
            className="w-6 h-6 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default HeroText;
