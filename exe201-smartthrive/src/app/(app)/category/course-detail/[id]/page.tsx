"use client";
import Rating from "@/components/ui/Rating";
import CourseService from "@/services/course-service";
import {Course} from "@/services/model/course";
import {StudentXPackage} from "@/services/model/student-x-package";
import PackageService from "@/services/package-service";
import PackageXCourseService from "@/services/package-x-course-service";
import PackageXStudentService from "@/services/package-x-student-service";
import Image from "next/image";
import Link from "next/link";
import {useParams, useRouter, useSearchParams} from "next/navigation";
import React, {useEffect, useState} from "react";
import {toast} from "sonner";

const Page = () => {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const catergory = searchParams.get("category");
  const subject = searchParams.get("subject");
  const subjectId = searchParams.get("subjectId");
  const { push } = useRouter();

  const [course, setCourse] = useState<Course | null>(null);
  const [studentXPackage, setStudentXPackage] = useState<StudentXPackage[]>([]);
  const [packageName, setPackageName] = useState("Default name");
  const [refresh, setRefresh] = useState(true);
  useEffect(() => {
    const fetchStudentXPackage = async () => {
      const apiStudentXPackage = await PackageXStudentService.getByStudentId(
        localStorage.getItem("studentId")!.toString()
      );
      setStudentXPackage(apiStudentXPackage.results);
    };

    const fetchCourse = async () => {
      const apiCourse = await CourseService.getById(id.toString());
      setCourse(apiCourse);
    };
    if (localStorage.getItem("studentId")) {
      fetchStudentXPackage();
    }
    fetchCourse();
  }, [id, refresh]);
  const handleAddToPackage = async (packageId: string) => {
    const result = await PackageXCourseService.create(packageId, id.toString());
    if (result.data.status == 1) {
      console.log(result.data.status);
      toast.success("Add to package success", {
        richColors: true,
      });
      setRefresh(!refresh);
    } else {
      toast.error("Error when save into package", {
        richColors: true,
      });
    }
    console.log(result);
  };

  const handleAddNewPackage = async () => {
    try {
      if (localStorage.getItem("studentId")) {
        const result = await PackageService.create(
          localStorage.getItem("studentId")!.toString(),
          packageName,
          0,
          0
        );

        if (result.data.status === 1) {
          toast.success("Create package success", {
            richColors: true,
          });
          setRefresh(!refresh);
        } else {
          toast.error("Create package failed", {
            richColors: true,
          });
        }
      } else {
        push("/login");
      }
    } catch (error) {
      console.error("Error creating package:", error);
      toast.error("An error occurred while creating the package.", {
        richColors: true,
      });
    }
  };

  return (
    course && (
      <section className="w-full h-full min-h-[200vh] pt-[5.4rem] oswald-text">
        <div className="h-full bg-[#2D2F31]  px-36  text-sm py-10 relative">
          <div className="max-w-[65%]">
            <div className="flex text-[#C0C4FC] gap-2 font-bold uppercase">
              <div className="flex gap-2 ">
                <p>{subject}</p>
              </div>
              {/* <div className="flex gap-2">
                                <p>{courseType}</p>
                                <Image
                                    className="h-full flex items-center justify-center"
                                    src="/geater_than_white.svg"
                                    width={7}
                                    height={7}
                                    alt={"arrow_right"}
                                />
                            </div>
                            <div>{topic}</div> */}
            </div>
            <div className="mt-8 max-w-[85%] text-[2rem] leading-[2.5rem] font-bold">
              {course.courseName}
            </div>
            <div className="mt-6 text-lg w-[90%]">{course.description}</div>
            <div className="pt-6 flex gap-2 ">
              <Rating color={"#ffffff"} />
              <p>{course.soldCourses} students</p>
            </div>
            <div className="pt-4">
              Created by
              <Link className="pl-1 underline text-slate-400" href={"#"}>
                {course.teacherName}
              </Link>
            </div>
            <div className="flex gap-2 pt-4">
              <Image
                src="/last_update.svg"
                width={15}
                height={15}
                alt="update"
              />
              <p className="text-sm">
                Last updated{" "}
                {new Date(course.updatedDate!).toLocaleDateString("vi-VI")}
              </p>
              <Image src="/global.svg" width={15} height={15} alt="global" />
              <p>Vietnamese</p>
              <Image src="/casette.svg" width={15} height={15} alt="casette" />
              <p>English, Vietnamese</p>
            </div>
          </div>
        </div>
        <div className="bg-white absolute w-[23vw] top-32 right-32 shadow-lg">
          <div className="relative flex justify-center pt-2">
            <Image
              src={course.backgroundImage ?? "/global.svg"}
              width={300}
              height={200}
              alt="casette"
            />
          </div>
          <div className="px-6 py-4">
            <div className="text-black opacity-85 font-bold text-2xl flex">
              <div>
                <span className="underline">đ</span>
                {Intl.NumberFormat("en-US", {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                }).format(course.price!)}
              </div>
              <s className="text-sm pl-2 flex items-center opacity-60"></s>
              <span
                className={`${
                  course.type == 0 ? "bg-green-600" : "bg-purple-600"
                } px-4 py-1 text-xs font-bold rounded-full text-center flex items-center justify-center`}
              >
                {course.type == 0 ? "Online" : "Offline"}
              </span>
            </div>
            <div className="text-black font-semibold text-xl mt-2">
              {course.courseName}
            </div>
            {/* <div className="bg-green-500 text-[0.8rem] inline-block px-4 mb-2 mt-2 text-white rounded-full">
            Online
          </div> */}
            <div className="w-full mt-4 flex justify-center items-center">
              <button
                // onClick={() => handleAddToPackage()}
                className=" addToPackage button relative bg-black h-[8vh] text-base font-bold opacity-100 text-white rounded-full w-full "
              >
                <div className="">
                  Add to package
                  <div className=" bg-slate-200 opacity-100 shadow-lg z-50 text-black absolute py-3 w-[95%]  top-12 left-2 packageList invisible ">
                    Select your package
                    <div className="flex flex-col justify-start text-left px-4 my-2 gap-2 ">
                      {studentXPackage != null
                        ? studentXPackage.map((item) => (
                            <div
                              className="py-2 relative group"
                              key={item.id}
                              onClick={() => {
                                handleAddToPackage(item.packageId!);
                              }}
                            >
                              <div className="text-xs flex justify-between">
                                <p>{item.package?.name}</p>
                                <div className="border-dashed border-[1px] border-black">
                                  <Image
                                    src={"/plus.svg"}
                                    width={20}
                                    height={20}
                                    alt="plus"
                                  />
                                </div>
                                <div className="line absolute h-[1px] w-0 bg-black mt-2 transition-all group-hover:w-full top-6"></div>
                              </div>
                            </div>
                          ))
                        : ""}
                    </div>
                    <div className="px-4 flex gap-4  mt-4">
                      <div className="">
                        <Image
                          src={"/plus.svg"}
                          width={20}
                          height={20}
                          alt="plus"
                        />
                      </div>
                      <div className="flex ">
                        <input
                          type="text"
                          placeholder="Default name"
                          value={packageName}
                          onChange={(e) => {
                            setPackageName(e.target.value);
                          }}
                          className="border border-black text-xs px-2"
                        />
                        <div
                          onClick={() => {
                            handleAddNewPackage();
                          }}
                          className="button bg-slate-700 text-white text-xs font-semibold px-2 py-1 hover:opacity-80 hover:cursor-pointer"
                        >
                          Add
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
            <div className="w-full mt-2 flex justify-center items-center">
              <button className="button bg-transparent px-20 py-3 text-base font-bold text-black rounded-full border-2 border-black w-full">
                Buy now
              </button>
            </div>
            <div className="text-xs w-full text-center text-slate-600 my-4">
              30-Day Money-Back Guarantee
            </div>
            <div className="text-black font-semibold text-base ">
              This course includes:{" "}
              <div className="mt-3 flex gap-4 text-xs font-normal items-center">
                <Image
                  src="/youtube.svg"
                  width={20}
                  height={20}
                  alt="playbutton"
                />
                <div className="h-full flex items-center justify-center">
                  <p>{course.totalSlots} slots on-demand learning</p>
                </div>
              </div>
              <div className="mt-3 flex gap-4 text-xs font-normal items-center">
                <Image
                  src="/coding.svg"
                  width={20}
                  height={20}
                  alt="playbutton"
                />
                <div className="h-full flex items-center justify-center">
                  <p>Exercises during the course</p>
                </div>
              </div>
              <div className="mt-3 flex gap-4 text-xs font-normal items-center">
                <Image
                  src="/file.svg"
                  width={20}
                  height={20}
                  alt="playbutton"
                />
                <div className="h-full flex items-center justify-center">
                  <p>{course.totalSessions} sessions</p>
                </div>
              </div>
              <div className="mt-3 flex gap-4 text-xs font-normal items-center">
                <Image
                  src="/downloadable.svg"
                  width={20}
                  height={20}
                  alt="playbutton"
                />
                <div className="h-full flex items-center justify-center">
                  <p>Downloadable resource</p>
                </div>
              </div>
              <div className="mt-3 flex gap-4 text-xs font-normal items-center">
                <Image
                  src="/learning.svg"
                  width={20}
                  height={20}
                  alt="playbutton"
                />
                <div className="h-full flex items-center justify-center">
                  <p>Accesssable for online learning</p>
                </div>
              </div>
              <div className="mt-3 flex gap-4 text-xs font-normal items-center">
                <Image
                  src="/infinity.svg"
                  width={20}
                  height={20}
                  alt="playbutton"
                />
                <div className="h-full flex items-center justify-center">
                  <p>Full lifetime access</p>
                </div>
              </div>
              <div className="underline text-slate-800 pt-4 text-sm">
                Apply coupon
              </div>
              <div className="flex mt-4">
                <input
                  type="text"
                  placeholder="Enter coupon"
                  className="border border-black  py-2 px-4 text-base font-medium"
                />
                <div className="button bg-slate-700 text-white text-base font-semibold py-2 px-4 hover:opacity-80 hover:cursor-pointer">
                  Apply
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-black px-36 py-6 mt-2 font-extrabold text-xl opacity-85">
          Explore related topics
        </div>
        <div className="flex px-36 gap-4">
          <div className="button py-3 px-6 font-semibold text-sm border border-black text-black capitalize rounded-full hover:bg-slate-400 hover:cursor-pointer">
            {subject}
          </div>
          {/* <div className="button py-3 px-6 font-semibold text-sm border border-black text-black capitalize rounded-full hover:bg-slate-400 hover:cursor-pointer ">
            {courseType}
          </div> */}
        </div>
        <div className="mx-36 my-8 border border-slate-400 w-[50vw] h-full text-black p-6">
          <h1 className="font-semibold text-2xl opacity-85">
            What you&lsquo;ll learn
          </h1>
          <div className="flex mt-4">
            <div className="w-[50%] flex flex-col gap-4">
              <div className="flex gap-2">
                <Image
                  className="max-h-4 mt-1"
                  src="/icons8-check-50.png"
                  width={15}
                  height={15}
                  alt="check"
                />
                <p className="text-sm">
                  Build 16 web development projects for your portfolio, ready to
                  apply for junior developer jobs.
                </p>
              </div>
              <div className="flex gap-2">
                <Image
                  className="max-h-4 mt-1"
                  src="/icons8-check-50.png"
                  width={15}
                  height={15}
                  alt="check"
                />
                <p className="text-sm">
                  After the course you will be able to build ANY website you
                  want.
                </p>
              </div>
              <div className="flex gap-2">
                {" "}
                <Image
                  className="max-h-4 mt-1"
                  src="/icons8-check-50.png"
                  width={15}
                  height={15}
                  alt="check"
                />
                <p className="text-sm">Work as a freelance web developer.</p>
              </div>
              <div className="flex gap-2">
                {" "}
                <Image
                  className="max-h-4 mt-1"
                  src="/icons8-check-50.png"
                  width={15}
                  height={15}
                  alt="check"
                />
                <p className="text-sm">Master backend development with Node.</p>
              </div>
            </div>
            <div className="w-[50%] flex flex-col gap-4">
              <div className="flex gap-2">
                <Image
                  className="max-h-4 mt-1"
                  src="/icons8-check-50.png"
                  width={15}
                  height={15}
                  alt="check"
                />
                <p className="text-sm">
                  Build 16 web development projects for your portfolio, ready to
                  apply for junior developer jobs.
                </p>
              </div>
              <div className="flex gap-2">
                <Image
                  className="max-h-4 mt-1"
                  src="/icons8-check-50.png"
                  width={15}
                  height={15}
                  alt="check"
                />
                <p className="text-sm">
                  After the course you will be able to build ANY website you
                  want.
                </p>
              </div>
              <div className="flex gap-2">
                {" "}
                <Image
                  className="max-h-4 mt-1"
                  src="/icons8-check-50.png"
                  width={15}
                  height={15}
                  alt="check"
                />
                <p className="text-sm">Work as a freelance web developer.</p>
              </div>
              <div className="flex gap-2">
                {" "}
                <Image
                  className="max-h-4 mt-1"
                  src="/icons8-check-50.png"
                  width={15}
                  height={15}
                  alt="check"
                />
                <p className="text-sm">Master backend development with Node.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-black px-36 py-6 mt-2 font-extrabold text-xl opacity-85">
          Course Content
        </div>
        <div className="px-36 text-black">
          <p className="font-normal text-sm ">
            {course.totalSessions} sections • {course.totalSlots} lectures • 61h
            44m total length
          </p>
          <div></div>
        </div>
      </section>
    )
  );
};

export default Page;
