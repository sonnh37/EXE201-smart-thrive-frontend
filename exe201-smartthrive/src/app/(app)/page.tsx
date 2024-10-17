"use client";
import Hero from "../../components/home/herro/hero";
import Category from "../../components/home/category-list/category";
import LearnMethod from "../../components/home/learn-method/learn-method";
import SpecialCourse from "../../components/home/special-course/special-course";
import Banner from "@/components/home/banner/banner";
import Reason from "@/components/home/reason/reason";
import SubjectList from "@/components/home/subjects/subject";
import Feedback from "@/components/home/feedbackSlide/feedbackSlide";
import BlogSlide from "@/components/home/blogSlide/blogSlide";

export default function Home() {
  return (
    <div className="w-[100vw] bg-[#ffffff] ">
      {/* <Hero/>
            <Category/>
            <LearnMethod/>
            <SpecialCourse/> */}
      <Banner />
      <Reason />
      <SubjectList />
      <Feedback />
      <BlogSlide />
    </div>
  );
}
