import React, {useRef} from "react";
import Image from "next/image";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {useGSAP} from "@gsap/react";
import {animteWithGsap} from "../../../utils/animations";

gsap.registerPlugin(ScrollTrigger);

const CategoryList = [
    {
        cateName: "Technology",
        cateImg: "/education.jpg",
        cateText:
            "The kids can learn quantities, measurements, geometrical figures, Mathematical relations. All children experience the joy of learning and gain self-confidence. Read News.",
    },
    {
        cateName: "Math",
        cateImg: "/education.jpg",
        cateText:
            "The kids can learn quantities, measurements, geometrical figures, Mathematical relations. All children experience the joy of learning and gain self-confidence. Read News.",
    },
    {
        cateName: "Chemistry",
        cateImg: "/education.jpg",
        cateText:
            "The kids can learn quantities, measurements, geometrical figures, Mathematical relations. All children experience the joy of learning and gain self-confidence. Read News.",
    },
    {
        cateName: "Software",
        cateImg: "/education.jpg",
        cateText:
            "The kids can learn quantities, measurements, geometrical figures, Mathematical relations. All children experience the joy of learning and gain self-confidence. Read News.",
    },
];

const Category = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    useGSAP(() => {
        animteWithGsap("#explore-category");
        const sections = gsap.utils.toArray(".scroll-section");

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerRef.current,
                pin: true,
                scrub: 0.5,
                snap: {
                    snapTo: 1 / (sections.length - 1),
                    duration: {min: 0.1, max: 0.3},
                    delay: 0.1,
                    ease: "none",
                },
                start: "top top",
                end: () => "+=" + (sections.length - 1) * 100 + "%",
                invalidateOnRefresh: true,
            },
        });

        tl.to(sections, {
            xPercent: -111 * (sections.length - 1),
            ease: "none",
            duration: sections.length - 1,
        });

        sections.forEach((section, i) => {
            ScrollTrigger.create({
                trigger: section,
                start: () => "top top-=" + window.innerHeight * i,
                end: () => "+=" + window.innerHeight,
                toggleClass: {targets: section, className: "active"},
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <div className="overflow-hidden py-12">
            <h1
                id="explore-category"
                className="oswald-text font-bold mb-8 mt-16 mx-16  text-4xl text-black leading-tight w-full "
            >
                Explore the Category.
            </h1>

            <div ref={triggerRef} className="relative w-full overflow-hidden">
                <div ref={sectionRef} className="flex will-change-transform">
                    {CategoryList.map((category, index) => (
                        <section
                            key={category.cateName}
                            className="scroll-section min-w-full h-screen flex justify-evenly bg-[black] mx-16 rounded-xl opacity-1 transition-opacity duration-300"
                        >
                            <div className="flex flex-col items-center justify-around p-8">
                                <div className="text-center">
                                    <h3 className="text-3xl font-bold mb-4 text-white">
                                        {category.cateName}
                                    </h3>
                                    <p className="text-white max-w-md">{category.cateText}</p>
                                </div>
                                <button
                                    className="mt-8 px-6 py-3 rounded-full uppercase font-bold bg-transparent text-white border-2 border-white hover:bg-white hover:text-black transition duration-300">
                                    Explore this category now
                                </button>
                            </div>
                            <div className="flex items-center">
                                <Image
                                    src={category.cateImg}
                                    alt={category.cateName}
                                    width={500}
                                    height={300}
                                    className="rounded-lg object-cover"
                                    loading={index === 0 ? "eager" : "lazy"}
                                />
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Category;
