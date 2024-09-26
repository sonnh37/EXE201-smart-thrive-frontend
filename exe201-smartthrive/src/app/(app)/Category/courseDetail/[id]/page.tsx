"use client";
import Rating from "@/components/ui/Rating";
import Image from "next/image";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const catergory = searchParams.get("category");
  const courseType = searchParams.get("courseType");
  const topic = searchParams.get("topic");

  return (
    <section className="w-full h-full min-h-[200vh] pt-[5.4rem] oswald-text">
      <div className="h-full bg-[#2D2F31]  px-36  text-sm py-10 relative">
        <div className="max-w-[65%]">
          <div className="flex text-[#C0C4FC] gap-2 font-bold uppercase">
            <div className="flex gap-2 ">
              <p>{catergory}</p>
              <Image
                className="h-full flex items-center justify-center"
                src="/geater_than_white.svg"
                width={7}
                height={7}
                alt="arrow_right"
              />
            </div>
            <div className="flex gap-2">
              <p>{courseType}</p>
              <Image
                className="h-full flex items-center justify-center"
                src="/geater_than_white.svg"
                width={7}
                height={7}
                alt={"arrow_right"}
              />
            </div>
            <div>{topic}</div>
          </div>
          <div className="mt-8 max-w-[85%] text-[2rem] leading-[2.5rem] font-bold">
            Cousre Name Cousre Name Cousre Name Course Name
          </div>
          <div className="mt-6 text-lg w-[90%]">
            Description Description Description Description vDescription
            Description Description Description Description Description
            Description
          </div>
          <div className="pt-6 flex gap-2 ">
            <Rating color={"#ffffff"} />
            <p>555,555 students</p>
          </div>
          <div className="pt-4">
            Created by
            <Link className="pl-1 underline text-slate-400" href={"#"}>
              Teacher Name, Teacher Name, Teacher Name,
            </Link>
          </div>
          <div className="flex gap-2 pt-4">
            <Image src="/last_update.svg" width={15} height={15} alt="update" />
            <p className="text-sm">Last updated 8/2024</p>
            <Image src="/global.svg" width={15} height={15} alt="global" />
            <p>Vietnamese</p>
            <Image src="/casette.svg" width={15} height={15} alt="casette" />
            <p>English, Vietnamese</p>
          </div>
        </div>
      </div>
      <div className="bg-white absolute w-[23vw] top-32 right-32 shadow-lg">
        <div className="relative flex justify-center pt-2">
          <iframe
            src="https://www.youtube.com/embed/hwuaW6-iIJg"
            className="w-[95%] h-full"
            height={190}
          />
          <p className="absolute bottom-3 left-[30%] font-bold">
            Preview this course
          </p>
        </div>
        <div className="px-6 py-4">
          <div className="text-black opacity-85 font-bold text-2xl flex">
            <div>
              <span className="underline">đ</span>555,555
            </div>
            <s className="text-sm pl-2 flex items-center opacity-60">
              <span className="underline">đ</span>5,555,555
            </s>
          </div>
          <div className="text-black font-semibold text-xl mt-2">
            Course Name, Course Name, Course Name
          </div>
          {/* <div className="bg-green-500 text-[0.8rem] inline-block px-4 mb-2 mt-2 text-white rounded-full">
            Online
          </div> */}
          <div className="w-full mt-4 flex justify-center items-center">
            <button className="button bg-black px-20 py-3 text-base font-bold opacity-80 text-white rounded-full w-full">
              Add to package
            </button>
          </div>
          <div className="w-full mt-2 flex justify-center items-center">
            <button className="button bg-transparent px-20 py-3 text-base font-bold text-black rounded-full border-2 border-black w-full">
              Buy now
            </button>
          </div>
          <div className="text-xs w-full text-center text-slate-600 my-4">
            30-Day Money-Back Guarantee
          </div>
          <div className="text-black font-semibold text-base ">
            This course includes:{" "}
            <div className="mt-3 flex gap-4 text-xs font-normal items-center">
              <Image
                src="/youtube.svg"
                width={20}
                height={20}
                alt="playbutton"
              />
              <div className="h-full flex items-center justify-center">
                <p>61 hours on-demand learning</p>
              </div>
            </div>
            <div className="mt-3 flex gap-4 text-xs font-normal items-center">
              <Image
                src="/coding.svg"
                width={20}
                height={20}
                alt="playbutton"
              />
              <div className="h-full flex items-center justify-center">
                <p>7 exercises during the course</p>
              </div>
            </div>
            <div className="mt-3 flex gap-4 text-xs font-normal items-center">
              <Image src="/file.svg" width={20} height={20} alt="playbutton" />
              <div className="h-full flex items-center justify-center">
                <p>65 sessions</p>
              </div>
            </div>
            <div className="mt-3 flex gap-4 text-xs font-normal items-center">
              <Image
                src="/downloadable.svg"
                width={20}
                height={20}
                alt="playbutton"
              />
              <div className="h-full flex items-center justify-center">
                <p>195 downloadable resource</p>
              </div>
            </div>
            <div className="mt-3 flex gap-4 text-xs font-normal items-center">
              <Image
                src="/learning.svg"
                width={20}
                height={20}
                alt="playbutton"
              />
              <div className="h-full flex items-center justify-center">
                <p>Accesssable for online learning</p>
              </div>
            </div>
            <div className="mt-3 flex gap-4 text-xs font-normal items-center">
              <Image
                src="/infinity.svg"
                width={20}
                height={20}
                alt="playbutton"
              />
              <div className="h-full flex items-center justify-center">
                <p>Full lifetime access</p>
              </div>
            </div>
            <div className="underline text-slate-800 pt-4 text-sm">
              Apply coupon
            </div>
            <div className="flex mt-4">
              <input
                type="text"
                placeholder="Enter coupon"
                className="border border-black  py-2 px-4 text-base font-medium"
              />
              <div className="button bg-slate-700 text-white text-base font-semibold py-2 px-4 hover:opacity-80 hover:cursor-pointer">
                Apply
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-black px-36 py-6 mt-2 font-extrabold text-xl opacity-85">
        Explore related topics
      </div>
      <div className="flex px-36 gap-4">
        <div className="button py-3 px-6 font-semibold text-sm border border-black text-black capitalize rounded-full hover:bg-slate-400 hover:cursor-pointer">
          {catergory}
        </div>
        <div className="button py-3 px-6 font-semibold text-sm border border-black text-black capitalize rounded-full hover:bg-slate-400 hover:cursor-pointer ">
          {courseType}
        </div>
      </div>
      <div className="mx-36 my-8 border border-slate-400 w-[50vw] h-full text-black p-6">
        <h1 className="font-semibold text-2xl opacity-85">
          What you&lsquo;ll learn
        </h1>
        <div className="flex mt-4">
          <div className="w-[50%] flex flex-col gap-4">
            <div className="flex gap-2">
              <Image
                className="max-h-4 mt-1"
                src="/icons8-check-50.png"
                width={15}
                height={15}
                alt="check"
              />
              <p className="text-sm">
                Build 16 web development projects for your portfolio, ready to
                apply for junior developer jobs.
              </p>
            </div>
            <div className="flex gap-2">
              <Image
                className="max-h-4 mt-1"
                src="/icons8-check-50.png"
                width={15}
                height={15}
                alt="check"
              />
              <p className="text-sm">
                After the course you will be able to build ANY website you want.
              </p>
            </div>
            <div className="flex gap-2">
              {" "}
              <Image
                className="max-h-4 mt-1"
                src="/icons8-check-50.png"
                width={15}
                height={15}
                alt="check"
              />
              <p className="text-sm">Work as a freelance web developer.</p>
            </div>
            <div className="flex gap-2">
              {" "}
              <Image
                className="max-h-4 mt-1"
                src="/icons8-check-50.png"
                width={15}
                height={15}
                alt="check"
              />
              <p className="text-sm">Master backend development with Node.</p>
            </div>
          </div>
          <div className="w-[50%] flex flex-col gap-4">
            <div className="flex gap-2">
              <Image
                className="max-h-4 mt-1"
                src="/icons8-check-50.png"
                width={15}
                height={15}
                alt="check"
              />
              <p className="text-sm">
                Build 16 web development projects for your portfolio, ready to
                apply for junior developer jobs.
              </p>
            </div>
            <div className="flex gap-2">
              <Image
                className="max-h-4 mt-1"
                src="/icons8-check-50.png"
                width={15}
                height={15}
                alt="check"
              />
              <p className="text-sm">
                After the course you will be able to build ANY website you want.
              </p>
            </div>
            <div className="flex gap-2">
              {" "}
              <Image
                className="max-h-4 mt-1"
                src="/icons8-check-50.png"
                width={15}
                height={15}
                alt="check"
              />
              <p className="text-sm">Work as a freelance web developer.</p>
            </div>
            <div className="flex gap-2">
              {" "}
              <Image
                className="max-h-4 mt-1"
                src="/icons8-check-50.png"
                width={15}
                height={15}
                alt="check"
              />
              <p className="text-sm">Master backend development with Node.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-black px-36 py-6 mt-2 font-extrabold text-xl opacity-85">
        Course Content
      </div>
      <div className="px-36 text-black">
        <p className="font-normal text-sm ">
          44 sections • 373 lectures • 61h 44m total length
        </p>
        <div></div>
      </div>
    </section>
  );
};

export default Page;
