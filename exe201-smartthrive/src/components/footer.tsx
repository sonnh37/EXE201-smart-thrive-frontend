"use client";
import React from "react";
import {arrowRightImg} from "@/utils";
import Image from "next/image";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);
const Footer = () => {
    useGSAP(() => {
        gsap.fromTo(
            ".footer_char",
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
                stagger: 0.03,
                scrollTrigger: {
                    trigger: ".footer_char",
                    // toggleActions: "restart reverse restart reverse",
                    start: "top 95%",
                },
            }
        );
    }, []);
    const text =
        "Dự án sẽ là bên thứ ba giữa các trung tâm và khách hàng giúp gộp nhiều lĩnh vực lại thành 1 khóa học tùy theo nhu cầu của khách hàng.";
    return (
        <section className="w-full h-full bg-black rounded-t-3xl oswald-text">
            <div className="text-white  ">
                <div className="footer-up flex justify-between mx-[3rem] py-10 border-b-2">
                    <div
                        className="w-[60%] py-6 pr-6 flex flex-wrap gap-3 text-[3.2rem] font-extrabold leading-[3rem] pointer-events-none select-none">
                        {text.split(" ").map((word, wordIndex) => (
                            <div key={wordIndex} className="flex flex-wrap">
                                {word.split("").map((char, charIndex) => (
                                    <div key={charIndex} className="footer_char">
                                        {char}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="w-[35%] py-6 pl-6">
                        <div className="text-[1.4rem] font-bold">
                            Liên hệ với chúng tôi thông qua mail.
                        </div>
                        <div className="text-[1rem] mt-3 opacity-80">
                            Bắt đầu ngay để nhận được ưu đãi hấp dẫn lên đến 50%.
                        </div>
                        <div className="pt-8">
                            <form>
                                <div className="relative">
                                    <div
                                        className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                                    <input
                                        type="email"
                                        id="sendEmail"
                                        className="block w-full p-4 placeholder-white text-sm text-white border border-white rounded-3xl bg-[#22221F]  dark:bg-gray-700 "
                                        placeholder="Địa chỉ email"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="text-black absolute end-2.5 bottom-2.5 bg-white hover:bg-slate-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-[3rem] px-2 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        <Image
                                            src={arrowRightImg}
                                            alt="arrow_right"
                                            width={20}
                                            height={20}
                                        />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="footer-down h-full pb-16 flex justify-between mx-14 mt-16">
                    <div className="flex justify-between w-[50%] text-sm">
                        <div>
                            <h1 className="mb-8">Blog.</h1>
                            <Link
                                href={`/blogs`}
                                className="uppercase opacity-70 mt-8 tracking-widest text-[0.8rem]"
                            >
                                Xem Blogs.
                            </Link>
                        </div>
                        <div>
                            <h1>Thể loại.</h1>
                            <div
                                className="uppercase opacity-70 flex flex-col gap-8 tracking-widest text-[0.8rem] mt-8">
                                <Link href={`/category`} className="">
                                    Thể loại.
                                </Link>
                            </div>
                        </div>
                        <div>
                            <h1 className="mb-8">Thông tin.</h1>
                            <Link
                                href={`/about`}
                                className="uppercase opacity-70 mt-8 tracking-widest text-[0.8rem]"
                            >
                                Giới thiệu.
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
