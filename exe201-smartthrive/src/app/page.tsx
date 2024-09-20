"use client";
import Hero from "../components/Home/Hero/Hero";
import Category from "../components/Home/CategoryList/Category";
import LearnMethod from "../components/Home/LearnMethod/LearnMethod";
import SpecialCourse from "../components/Home/SpecialCourse/SpecialCourse";
// import { useEffect } from "react";
// import Lenis from "lenis";
export default function Home() {
  // useEffect(() => {
  //   const lenis = new Lenis();
  //   function raf(time: any) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);
  // }, []);
  return (
    <div className="w-full bg-[#FCF7E6] ">
      <Hero />
      <Category />
      <LearnMethod />
      <SpecialCourse />
    </div>
  );
}
