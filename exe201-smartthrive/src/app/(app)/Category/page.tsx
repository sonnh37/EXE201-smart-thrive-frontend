"use client";
import SearchBar from "@/components/Category/SearchBar";
import CourseCard from "@/components/Category/CourseCard";
import { useSearchParams } from "next/navigation";
const Page = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const courseType = searchParams.get("courseType");
  const topic = searchParams.get("topic");
  console.log(category);
  console.log(courseType);
  console.log(topic);
  return (
    <div className="h-full w-full pt-24 text-black flex">
      <SearchBar>
        <CourseCard
          method="online"
          name={"Course Name"}
          id={1}
          category={category}
          courseType={courseType}
          topic={topic}
        />
        <CourseCard
          method="offline"
          name={"Course Name"}
          id={2}
          category={category}
          courseType={courseType}
          topic={topic}
        />
        <CourseCard
          method="meeting"
          name={"Course Name"}
          id={3}
          category={category}
          courseType={courseType}
          topic={topic}
        />
        <CourseCard
          method="online"
          name={"Course Name"}
          id={4}
          category={category}
          courseType={courseType}
          topic={topic}
        />
      </SearchBar>
    </div>
  );
};

export default Page;
