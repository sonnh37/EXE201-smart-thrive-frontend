"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CardContainer, CardItem } from "@/components/ui/3d-card";
import StudentService from "@/services/student-service";
import { Student } from "@/services/Model/Student";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Gender } from "@/services/Model/Enum";
const Auth = () => {
  const { push } = useRouter();
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };
  const [imageSrc, setImageSrc] = useState(
    "/student/1ba2e6d1d4874546c70c91f1024e17fb.jpg"
  );
  const arrayImage = [
    "/student/1ba2e6d1d4874546c70c91f1024e17fb.jpg", //img1
    "/student/e39430434d2b8207188f880ac66c6411.jpg", //img2
    "/student/b40b51418293936a6e0ad09ffa229cb7.jpg", //img3
    "/student/828f0f2b3a3a17a5e52213027829149f.jpg", //img4
    "/student/6ab2a25230316f4180bf54b61e9d79a9.jpg", //img5
  ];

  const [createStudent, setcreateStudent] = useState<Student | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value.toString();

    // Update createStudent state
    const updatedStudent = {
      ...createStudent!,
      imageAvatar: selectedValue,
    };
    setcreateStudent(updatedStudent);
    // Cập nhật src của ảnh dựa trên option được chọn
    switch (selectedValue) {
      case "img1":
        setImageSrc("/student/1ba2e6d1d4874546c70c91f1024e17fb.jpg"); // Đường dẫn đến ảnh 1
        break;
      case "img2":
        setImageSrc("/student/e39430434d2b8207188f880ac66c6411.jpg"); // Đường dẫn đến ảnh 2
        break;
      case "img3":
        setImageSrc("/student/b40b51418293936a6e0ad09ffa229cb7.jpg"); // Đường dẫn đến ảnh 3
        break;
      case "img4":
        setImageSrc("/student/828f0f2b3a3a17a5e52213027829149f.jpg"); // Đường dẫn đến ảnh 4
        break;
      case "img5":
        setImageSrc("/student/6ab2a25230316f4180bf54b61e9d79a9.jpg"); // Đường dẫn đến ảnh 5
        break;
      default:
        setImageSrc(""); // Xóa ảnh nếu không chọn gì
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission

    try {
      if (createStudent != null) {
        const response = await StudentService.createStudent(createStudent);
        if (response.data.message === "Save data success") {
          toast.success("Tạo student thành công");
          toggleForm();
          window.location.reload();
        } else {
          toast.error("Tạo student thất bại: " + response.data.message); // Hiển thị thông báo lỗi từ API
        }
      } else {
        toast.error("Ban chua nhap day du thong tin");
      }
    } catch (error) {
      console.error("Error creating student:", error);
    }
  };

  const [students, setStudents] = useState<Student[]>([]);
  useEffect(() => {
    const fetchApi = async () => {
      const result = await StudentService.getByUserId(
        localStorage.getItem("userId")!.toString()
      );
      console.log(localStorage.getItem("userId")!.toString());
      if (result && Array.isArray(result.results)) {
        //check xem mang co gia tri chua
        setStudents(result.results);
      } else {
        setStudents([]); // Ensure it's an empty array if the structure is not as expected
      }
    };
    fetchApi();
  }, []);
  const handleSelectStudent = (id: string, name: string) => {
    localStorage.setItem("studentId", id);
    push("/");

    toast.success(`Welcomeback ${name}`, {
      richColors: true,
    });
  };
  const getImageIndex = (imageAvatar: string): number => {
    switch (imageAvatar) {
      case "img1":
        return 0;
      case "img2":
        return 1;
      case "img3":
        return 2;
      case "img4":
        return 3;
      case "img5":
        return 4;
      default:
        return -1; // Trả về -1 nếu không tìm thấy
    }
  };
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <div className="text-5xl font-bold mb-10">SMART THRIVE</div>
      <div className="text-2xl font-medium mb-6">Who`&apos;`s watching?</div>

      {/* Flex container for the card items */}
      <div className="flex space-x-4">
        {" "}
        {/* Giảm khoảng cách từ space-x-4 xuống space-x-2 */}
        {/* First Card */}
        {students.length > 0 ? (
          students.map((student) => (
            <div
              key={student.studentName}
              onClick={() => {
                handleSelectStudent(student.id, student.studentName!);
              }}
            >
              <CardContainer>
                <div className="flex flex-col items-center space-y-4">
                  <CardItem
                    translateZ="100"
                    rotateX={20}
                    rotateZ={-10}
                    className="w-44"
                  >
                    <Image
                      src={
                        arrayImage[getImageIndex(student.imageAvatar || "img1")]
                      } // nếu undefine thì dùng là img1
                      width={150}
                      height={150}
                      className="w-full h-full object-contain rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white text-center"
                  >
                    {student.studentName}
                  </CardItem>
                </div>
              </CardContainer>
            </div>
          ))
        ) : (
          <div className="flex-grow"></div> // Leave it empty if no students
        )}
        {/* <CardContainer className="">
          <div className="flex flex-col items-center space-y-4">
            <CardItem
              translateZ="100"
              rotateX={20}
              rotateZ={-10}
              className="w-44"
            >
              <Image
                src="/student/1ba2e6d1d4874546c70c91f1024e17fb.jpg"
                width={150}
                height={150}
                className="w-full h-full object-contain rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white text-center"
            >
              Quan
            </CardItem>
          </div>
        </CardContainer> */}
        {/* Second Card */}
        {/* <CardContainer className="">
          <div className="flex flex-col items-center space-y-4">
            <CardItem
              translateZ="100"
              rotateX={20}
              rotateZ={-10}
              className="w-44"
            >
              <Image
                src="/student/e39430434d2b8207188f880ac66c6411.jpg"
                width={150}
                height={150}
                className="w-full h-full object-contain rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white text-center"
            >
              Quan
            </CardItem>
          </div>
        </CardContainer> */}
        {/* Third Card */}
        {/* <CardContainer className="">
          <div className="flex flex-col items-center space-y-4">
            <CardItem
              translateZ="100"
              rotateX={20}
              rotateZ={-10}
              className="w-44"
            >
              <Image
                src="/student/b40b51418293936a6e0ad09ffa229cb7.jpg"
                width={150}
                height={150}
                className="w-full h-full object-contain rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white text-center"
            >
              Quan
            </CardItem>
          </div>
        </CardContainer> */}
        {/* Fourth Card */}
        {/* <CardContainer className="">
          <div className="flex flex-col items-center space-y-4 ">
            <CardItem
              translateZ="100"
              rotateX={20}
              rotateZ={-10}
              className="w-44"
            >
              <Image
                src="/student/828f0f2b3a3a17a5e52213027829149f.jpg"
                width={150}
                height={150}
                className="w-full h-full object-contain rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white text-center"
            >
              Quan
            </CardItem>
          </div>
        </CardContainer> */}
        {students.length < 5 && (
          <div className="" onClick={toggleForm}>
            <CardContainer className="w-full h-full">
              <div className="flex flex-col items-center space-y-4 w-full h-full">
                <CardItem
                  translateZ="100"
                  rotateX={20}
                  rotateZ={-10}
                  className="w-44"
                >
                  <Image
                    src="/student/addbutton.svg"
                    width={200}
                    height={200}
                    className="w-full h-full object-contain rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>

                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white text-center"
                >
                  Add Profile
                </CardItem>
              </div>
            </CardContainer>
          </div>
        )}
      </div>

      <Link
        href={"/student/editstudent"}
        className="mt-6 bg-gray-800 px-6 py-2 rounded-md text-xl font-medium hover:bg-gray-700"
      >
        Manage Profiles
      </Link>

      {isFormVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded shadow-lg w-1/3">
            <div>
              <h1 className="font-bold text-2xl text-neutral-800 blue:text-neutral-200 text-center">
                Đăng ký tài khoản cho học sinh
              </h1>

              <form className="my-8" onSubmit={handleSubmit}>
                {/* Upload hình ảo vào nhá nhá */}
                <div className="w-full flex">
                  {/* Image element */}
                  <img
                    src={imageSrc}
                    alt="Selected"
                    className="w-40 mx-auto my-4 border-2 border-solid border-black"
                  />

                  <div className="w-full flex items-center justify-center">
                    {/* Select element */}
                    <select
                      id="ảnh"
                      className="w-2/3 px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 dark:bg-neutral-800 dark:border-neutral-700 text-black"
                      value={createStudent?.imageAvatar || "img1"}
                      onChange={handleImageChange}
                    >
                      <option value="img1" className="text-black">
                        Ảnh 1
                      </option>
                      <option value="img2" className="text-black">
                        Ảnh 2
                      </option>
                      <option value="img3" className="text-black">
                        Ảnh 3
                      </option>
                      <option value="img4" className="text-black">
                        Ảnh 4
                      </option>
                      <option value="img5" className="text-black">
                        Ảnh 5
                      </option>
                    </select>
                  </div>
                </div>
                {/* Tên và Họ */}
                <div className="mb-4">
                  <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <div className="flex-1">
                      <label
                        className="block text-neutral-600 dark:text-neutral-100 font-medium mb-2"
                        htmlFor="firstName"
                      >
                        Tài khoản học sinh
                      </label>
                      <input
                        id="StudentName"
                        type="text"
                        value={
                          createStudent != null ? createStudent.studentName : ""
                        }
                        onChange={(e) => {
                          const updatedStudent = {
                            ...createStudent!,
                            studentName: e.target.value.toString(),
                          };
                          setcreateStudent(updatedStudent);
                        }}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 dark:bg-neutral-800 dark:border-neutral-700 text-black"
                        placeholder="Nhập tên của học sinh"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <div className="flex-1">
                      <label
                        className="block text-neutral-600 dark:text-neutral-100 font-medium mb-2"
                        htmlFor="firstName"
                      >
                        Tên
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        value={
                          createStudent != null ? createStudent.firstName : ""
                        }
                        onChange={(e) => {
                          const updatedStudent = {
                            ...createStudent!,
                            firstName: e.target.value.toString(),
                          };
                          setcreateStudent(updatedStudent);
                        }}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 dark:bg-neutral-800 dark:border-neutral-700 text-black"
                        placeholder="Nhập tên của bạn"
                      />
                    </div>

                    <div className="flex-1">
                      <label
                        className="block text-neutral-600 dark:text-neutral-100 font-medium mb-2"
                        htmlFor="lastName"
                      >
                        Họ
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        value={
                          createStudent != null ? createStudent.lastName : ""
                        }
                        onChange={(e) => {
                          const updatedStudent = {
                            ...createStudent!,
                            lastName: e.target.value.toString(),
                          };
                          setcreateStudent(updatedStudent);
                        }}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 dark:bg-neutral-800 dark:border-neutral-700  text-black"
                        placeholder="Nhập họ của bạn"
                      />
                    </div>
                  </div>
                </div>
                {/* Số điện thoại
             <div className="mb-4">
               <label
                 className="block text-neutral-600 dark:text-neutral-100 font-medium mb-2"
                 htmlFor="phone"
               >
                 Số điện thoại
               </label>
               <input
                 id="phone"
                 type="phone"
                 value={createStudent != null ?createStudent.phone: ""}
                 onChange={(e) => {
                   const updatedStudent = {
                     ...createStudent!,
                     studentName: e.target.value.toString(),
                   };
                   setcreateStudent(updatedStudent);
                 }}
                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 dark:bg-neutral-800 dark:border-neutral-700"
                 placeholder="Nhập số điện thoại"
               />
             </div> */}
                {/* Ngày sinh */}
                <div className="mb-4">
                  <label
                    className="block text-neutral-600 dark:text-neutral-100 font-medium mb-2"
                    htmlFor="dob"
                  >
                    Ngày sinh
                  </label>
                  <input
                    id="dob"
                    type="date"
                    value={
                      createStudent?.dob
                        ? createStudent.dob.toISOString().split("T")[0]
                        : ""
                    }
                    onChange={(e) => {
                      const updatedStudent = {
                        ...createStudent!,
                        dob: new Date(e.target.value), // Convert input value to Date object
                      };
                      setcreateStudent(updatedStudent);
                    }}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 dark:bg-neutral-800 dark:border-neutral-700 text-black"
                  />
                </div>
                <h4 className="text-red-500">****Lưu ý****</h4>{" "}
                {/* Thay đổi màu chữ */}
                {/* Độ tuổi */}
                <div className="mb-4">
                  <label
                    className="block text-neutral-600 dark:text-neutral-100 font-medium mb-2"
                    htmlFor="age"
                  >
                    Giới tính
                  </label>
                  <select
                    id="gender"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 dark:bg-neutral-800 dark:border-neutral-700 text-black"
                    value={
                      createStudent != null ? createStudent.gender : Gender.Male
                    }
                    onChange={(e) => {
                      const updatedStudent = {
                        ...createStudent!,
                        studentName: e.target.value.toString(),
                      };
                      setcreateStudent(updatedStudent);
                    }}
                  >
                    <option value={Gender.Male} className="text-black">
                      Nam
                    </option>
                    <option value={Gender.Female} className="text-black">
                      Nữ
                    </option>
                    <option value={Gender.Other} className="text-black">
                      Khác
                    </option>
                  </select>
                </div>
                {/* Nút đăng ký */}
                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700 focus:ring focus:ring-indigo-200"
                  >
                    Tạo tài khoản học sinh
                  </button>
                </div>
              </form>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={toggleForm}
                className="bg-red-500 text-white px-4 py-2 rounded ml-2"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Auth;
