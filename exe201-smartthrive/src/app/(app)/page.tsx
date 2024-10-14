"use client";
import Hero from "../../components/home/herro/hero";
import Category from "../../components/home/category-list/category";
import LearnMethod from "../../components/home/learn-method/learn-method";
import SpecialCourse from "../../components/home/special-course/special-course";

export default function Home() {
    return (
        <div className="w-full bg-[#FCF7E6] ">
            <Hero/>
            <Category/>
            <LearnMethod/>
            <SpecialCourse/>
        </div>
    );
}
