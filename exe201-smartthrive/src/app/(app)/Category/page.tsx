"use client";
import SearchBar from "@/components/Category/SearchBar";
import CourseCard from "@/components/Category/CourseCard";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Course } from "@/services/Model/Course";
import CourseService from "@/services/course-service";
const Page = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const courseType = searchParams.get("courseType");
  const topic = searchParams.get("topic");
  const [courseItems, setCourseItems] = useState<Course[] | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await CourseService.getAll();
        // console.log(data.results);
        setCourseItems(data.results);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(courseItems);
  return (
    <div className="h-full w-full pt-24 text-black flex">
      <SearchBar>
        {courseItems &&
          courseItems
            .filter((course) => course.status === 1)
            .map((course) => {
              return (
                <CourseCard
                  key={course.courseName}
                  method={course.type}
                  name={course.name}
                  id={course.id}
                  category={category}
                  courseType={courseType}
                  topic={topic}
                  price={course.price}
                  provider={course.teacherName}
                  image={course.backgroundImage}
                  describe={course.description}
                />
              );
            })}
        {/* <CourseCard
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
        /> */}
      </SearchBar>
    </div>
  );
};

export default Page;
