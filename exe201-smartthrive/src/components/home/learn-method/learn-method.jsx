import React from "react";
import VideoCarousel from "./video-carousel";
import {animteWithGsap} from "../../../utils/animations";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
const LearnMethod = () => {
    useGSAP(() => {
        animteWithGsap("#titleMethod");
    }, []);
    return (
        <section className="pt-16">
            <h1
                id="titleMethod"
                className="oswald-text font-bold mb-8 mt-16 mx-16  text-4xl text-black leading-tight w-full "
            >
                Our Method.
            </h1>
            <div className="screen-max-width text-black ">
                <VideoCarousel/>
            </div>
        </section>
    );
};

export default LearnMethod;
