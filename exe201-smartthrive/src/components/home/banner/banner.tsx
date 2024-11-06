import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import React from "react";

const Banner = () => {
    useGSAP(() => {
        // animteWithGsap(".bannerText");
        gsap.fromTo(
            ".hero-text",
            {
                y: 20,
                opacity: 0,
                translateY: 20,
            },
            {
                y: 0,
                opacity: 1,
                translateY: 0,
                duration: 1.2,
                stagger: 0.4,
            }
        );
    }, []);
    return (
        <div
            className="w-full h-[85vh] bg-[url('/banner-background.svg')] scale-105 bg-[105%_85%,0_0] mt-24 bg-repeat-x bg-cover relative">
            <div
                className=" oswald-text font-bold text-[3.5rem] text-black w-full text-center absolute top-[20%] left-5">
                <div className="w-full leading-[4rem] hero-text">
                    Mở khóa tiềm năng của bạn với <br/> Những người đồng hành từ Smart
                    Thrive
                </div>
                <div className="font-normal text-lg leading-7 pt-6 hero-text">
                    Chúng tôi sẽ mang lại cho bạn trải nghiệm tuyệt vời tại đây
                </div>
                <Link
                    href={`/category`}
                    type="button"
                    className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-semibold rounded-lg text-lg px-10 py-4 text-center me-2 mb-2 hero-text"
                >
                    Bắt đầu ngay !
                </Link>
            </div>
        </div>
    );
};

export default Banner;
