import Image from "next/image";
import Link from "next/link";
import React from "react";
import Rating from "../ui/Rating";

const CourseCard = ({
  method,
  name,
  id,
  category,
  subject,
  price,
  provider,
  image,
  describe,
  subjectId,
}) => {
  return (
    <div key={id} className="flex justify-center items-center mb-8 px-4">
      <div className="mx-auto h-full w-[20vw]">
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-60">
            <Image src={image} alt="card-image" width={300} height={100} />
          </div>
          <div className="p-6">
            {method === 0 ? (
              <div className="bg-green-500 text-[0.8rem] inline-block px-4 mb-2 text-white rounded-full">
                Online
              </div>
            ) : method == 1 ? (
              <div className="bg-purple-500 text-[0.8rem] inline-block px-4 mb-2 text-white rounded-full">
                Offline
              </div>
            ) : (
              <div className="bg-blue-500 text-[0.8rem] inline-block px-4 mb-2 text-white rounded-full">
                Meeting
              </div>
            )}

            <div className=" mb-2 flex justify-between">
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900 text-nowrap w-[70%] text-ellipsis overflow-hidden">
                {name}
              </p>
              <p className=" block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                {Intl.NumberFormat("en-US", {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                }).format(price)}
                <span className="underline">đ</span>
              </p>
            </div>
            <p className="block text-nowrap font-sans text-sm antialiased w-[70%] font-normal leading-normal text-gray-700 opacity-75 text-ellipsis overflow-hidden ">
              From {provider}
            </p>
            {(method == 0) | (method == 2) ? (
              <div className="block opacity-90 w-[90%] text-ellipsis  mt-2 font-sans text-sm antialiased font-medium leading-[1.5em] h-[6vh] overflow-hidden text-blue-gray-900">
                {describe}
              </div>
            ) : method == 1 ? (
              <div className="mt-2 flex">
                <Image
                  src="/location.svg"
                  width={20}
                  height={15}
                  alt="location_pin"
                />
                <p className="text-blue-gray-900 opacity-80 font-sans font-medium antialiased text-xs pl-2 pt-2 h-[6vh] overflow-hidden ">
                  {describe}
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
          {/* Rating */}
          <div className=" mb-2 px-6">
            <Rating />
          </div>
          <div className="p-6 pt-0 mt-6 flex">
            <Link
              href={`category/course-detail/${id}?category=${category}&subject=${subject}&subjectId=${subjectId}`}
              className="align-middle bg-slate-500 select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-full shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              type="button"
            >
              View Detail
            </Link>
            <Link
              href={`category/course-detail/${id}?category=${category}&subject=${subject}&subjectId=${subjectId}`}
              className="align-middle bg-slate-500 select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 ml-2 rounded-full shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              type="button"
            >
              Add package
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
