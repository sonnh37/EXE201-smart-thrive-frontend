import { Gender } from '@/services/Model/Enum';
import { Student } from '@/services/Model/Student';
import StudentService from '@/services/student-service';
import React, { useState } from 'react'

const page = () => {
  const [imageSrc, setImageSrc] = useState(
    "/student/1ba2e6d1d4874546c70c91f1024e17fb.jpg"
  );
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
        console.log('Student created:', response);
      } else {
        alert("Ban chua nhap day du thong tin");
      }

    } catch (error) {
      console.error('Error creating student:', error);

    }
  };


  return (
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
                  value={createStudent != null ?createStudent.imageAvatar: "img1" }
                  onChange={handleImageChange}
        //          defaultValue="img1"
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
                    Tên
                  </label>
                  <input
                    id="StudentName"
                    type="text"
                    value={createStudent != null ?createStudent.studentName: ""}
                    onChange={(e) => {
                      const updatedStudent = {
                        ...createStudent!,
                        studentName: e.target.value.toString(),
                      };
                      setcreateStudent(updatedStudent);
                    }}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 dark:bg-neutral-800 dark:border-neutral-700"
                    placeholder="Nhập tên của học sinh"
                  />
                </div>
              </div>
            </div>
            {/* Số điện thoại */}
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
            </div>
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
                value={createStudent?.dob ? createStudent.dob.toISOString().split('T')[0] : ''}
                onChange={(e) => {
                  const updatedStudent = {
                    ...createStudent!,
                    dob: new Date(e.target.value), // Convert input value to Date object
                  };
                  setcreateStudent(updatedStudent);
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 dark:bg-neutral-800 dark:border-neutral-700"
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
                value={createStudent != null ?createStudent.gender: Gender.Male}
                onChange={(e) => {
                  const updatedStudent = {
                    ...createStudent!,
                    studentName: e.target.value.toString(),
                  };
                  setcreateStudent(updatedStudent);
                }}
              >
                <option value={Gender.Male} className="text-black"
                >
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
            className="bg-red-500 text-white px-4 py-2 rounded ml-2"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  )
}

export default page
