"use client";
import SearchBar from "@/components/category/search-bar";
import CourseCard from "@/components/category/course-card";
import {useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";
import {Course} from "@/services/model/course";
import CourseService from "@/services/course-service";

const Page = () => {
    const searchParams = useSearchParams();

    const subjectId = searchParams.get("subjectId");
    const subject = searchParams.get("subject");
    const categoryId = searchParams.get("categoryId");
    const [currentSubject, setCurrentSubject] = useState(subjectId);
    //   console.log(subject, subjectId, categoryId);
    const [courseItems, setCourseItems] = useState<Course[] | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (subject) {
                    const data = await CourseService.getBySubjectId(subjectId!);

                    setCourseItems(data.results);
                } else {
                    const data = await CourseService.getAll();

                    setCourseItems(data.results);
                }
            } catch (error) {
                console.error("Error fetching blog data:", error);
            }
        };
        setCurrentSubject(subjectId);

        fetchData();
    }, [subjectId, currentSubject]);
    return (
        <div className="h-full w-full pt-24 text-black flex ">
            <SearchBar categoryId={categoryId ?? "empty"} subjectId={subjectId!}>
                {courseItems &&
                    courseItems
                        .filter((course) => course.isActive === true)
                        .map((course) => {
                            return (
                                <CourseCard
                                    key={course.name}
                                    method={course.type}
                                    name={course.name}
                                    id={course.id}
                                    category={categoryId}
                                    subject={subject}
                                    subjectId={subjectId}
                                    price={course.price}
                                    provider={course.teacherName}
                                    image={course.backgroundImage}
                                    describe={course.description}
                                />
                            );
                        })}
            </SearchBar>
        </div>
    );
};

export default Page;
