"use client";
import SearchBar from "@/components/Category/SearchBar";
import CourseCard from "@/components/Category/CourseCard";
import { useSearchParams } from "next/navigation";
const Page = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const courseType = searchParams.get("courseType");
  const topics = searchParams.get("topic");
  console.log(category);
  console.log(courseType);
  console.log(topics);
  return (
    <div className="h-full w-full pt-24 text-black flex">
      <SearchBar>
        <CourseCard method="online" name={"Course Name"} />
        <CourseCard method="offline" name={"Course Name"} />
        <CourseCard method="meeting" name={"Course Name"} />
        <CourseCard method="online" name={"Course Name"} />
      </SearchBar>
    </div>
  );
};

export default Page;
