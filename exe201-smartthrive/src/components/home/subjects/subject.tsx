import React, {useEffect, useState} from "react";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";
import {AutoScroll} from "@splidejs/splide-extension-auto-scroll";
import SubjectService from "@/services/subject-service";
import {Subject} from "@/services/model/subject";
import Image from "next/image";
import Link from "next/link";

const {Splide, SplideSlide} = require("@splidejs/react-splide");
const SlideItem = () => {
    const [subjectList, setSubjectList] = useState<Subject[] | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            const result = await SubjectService.getAll();
            setSubjectList(result.results);
        };
        fetchData();
    }, []);
    return (
        <>
            {subjectList && (
                <Splide
                    options={{
                        type: "loop",
                        drag: "free",
                        focus: "center",
                        gap: "2rem",
                        perPage: 3,
                        autoScroll: {
                            pauseOnHover: false,
                            pauseOnFocus: false,
                            rewind: false,
                            speed: 1,
                        },
                    }}
                    extensions={{AutoScroll}}
                >
                    {subjectList.map((subject, index) => (
                        <SplideSlide key={subject.name}>
                            <div className="text-center bg-[#ffffff] py-8">
                                <div className="flex justify-center ">
                                    <Image
                                        src={`/subject${(index % 6) + 1}.png`}
                                        width={80}
                                        height={80}
                                        alt={subject.name!}
                                    />
                                </div>
                                <div className="font-semibold text-2xl mt-6 text-wrap">
                                    {subject.name}
                                </div>
                                <div className="mt-6">
                                    {subject.category ? subject.category.name : ""}
                                </div>
                                <Link
                                    href={`/category?subject=${subject.name}&subjectId=${
                                        subject.id
                                    }&categoryId=${subject.category!.id}`}
                                    className=" mt-6 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                                >
                  <span
                      className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Explore now !
                  </span>
                                </Link>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            )}
        </>
    );
};
const SubjectList = () => {
    return (
        <div className="w-full h-full py-24  text-black justify-center bg-[#FAF5FF]">
            <div
                className="text-lg font-bold px-32 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text w-full  h-full text-center">
                Chủ đề phổ biến
            </div>
            <div className="w-full flex justify-center">
                <div className="text-[2rem]  w-[40%] text-center text-wrap mt-4 font-bold leading-9 oswald-text">
                    Những chủ đề được nhiều người dùng quan tâm.
                </div>
            </div>
            <div className="mt-10 px-8 ">
                <SlideItem/>
            </div>
        </div>
    );
};

export default SubjectList;
