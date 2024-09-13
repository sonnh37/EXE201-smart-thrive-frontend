"use client";
import Hero from "../components/Home/Hero/Hero";
import Category from "../components/Home/CategoryList/Category";
import LearnMethod from "../components/Home/LearnMethod/LearnMethod";
import SpecialCourse from "../components/Home/SpecialCourse/SpecialCourse";

export default function Home() {
  return (
    <div className="w-full bg-[#FCF7E6] ">
      <Hero />
      <Category />
      <LearnMethod />
      <SpecialCourse />
    </div>
  );
}
