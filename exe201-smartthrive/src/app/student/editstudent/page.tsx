"use client";
import React, { useEffect, useState } from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import Link from "next/link";
import StudentService from "@/services/student-service";
import { Student } from "@/services/Model/Student";
const Page = () => {
  const { push } = useRouter();
  const [students, setStudents] = useState<Student[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<Student>();
  useEffect(() => {
    const fetchApi = async () => {
      const result = await StudentService.getByUserId(
        localStorage.getItem("userId")!.toString()!
      );

      setStudents(result.results);
      setSelectedStudent(result.results[0]);
    };
    fetchApi();
  }, []);
  const [IsFormYaNVisible, setIsFormYaNVisible] = useState(false);
  const formyandn = () => {
    setIsFormYaNVisible(!IsFormYaNVisible);
  };
  const [imageSrc, setImageSrc] = useState(
    "/student/1ba2e6d1d4874546c70c91f1024e17fb.jpg"
  );

  const handleImageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;

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
  console.log(selectedStudent);
  return (
    <div className="w-full flex justify-center bg-blue-50">
      {students.length > 0 && (
        <form className="w-2/3 bg-white p-4 py-3  ">
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className=" font-semibold leading-7 text-gray-900 text-2xl">
                Profile
              </h2>
              <p className="mt-1 text-xl leading-6 text-gray-600">
                This information will be displayed publicly so be careful what
                you share.
              </p>
              <div className="mt-2">
                <select
                  onChange={(e) => {
                    setSelectedStudent(students[Number(e.target.value)]);
                  }}
                  id="student"
                  name="student"
                  autoComplete="student"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-xl sm:leading-6"
                >
                  {students.map((student, index) => (
                    <option
                      value={index}
                      key={student.studentName}
                      onSelect={() => console.log("on change")}
                    >
                      {student.studentName}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="username"
                    className="block text-2xl font-medium leading-6 text-gray-900"
                  >
                    Username
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      {/* <span className="flex select-none items-center pl-3 text-gray-500 sm:text-xl">workcation.com/</span> */}
                      <input
                        id="username"
                        name="username"
                        type="text"
                        placeholder="janesmith"
                        autoComplete="username"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-xl sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="about"
                    className="block text-2xl font-medium leading-6 text-gray-900"
                  >
                    About
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="about"
                      name="about"
                      rows={3}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                  <p className="mt-3 text-xl leading-6 text-gray-600">
                    Write a few sentences about yourself.
                  </p>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="photo"
                    className="block text-2xl font-medium leading-6 text-gray-900"
                  >
                    Photo
                  </label>
                  {/* Image element */}
                  <img
                    src={imageSrc}
                    alt="Selected"
                    className="w-40 mx-auto my-4 border-2 border-solid border-black"
                  />

                  <div className="w-full flex items-start justify-center">
                    {/* Select element */}
                    <select
                      id="ảnh"
                      className="w-2/3 px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 dark:bg-neutral-800 dark:border-neutral-700 text-black text-sm"
                      onChange={handleImageChange}
                      defaultValue="img1"
                    >
                      <option value="img1" className="text-black">
                        Chọn ảnh 1
                      </option>
                      <option value="img2" className="text-black">
                        Chọn ảnh 2
                      </option>
                      <option value="img3" className="text-black">
                        Chọn ảnh 3
                      </option>
                      <option value="img4" className="text-black">
                        Chọn ảnh 4
                      </option>
                      <option value="img5" className="text-black">
                        Chọn ảnh 5
                      </option>
                    </select>
                  </div>
                </div>

                {/* <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-xl font-medium leading-6 text-gray-900">
                Cover photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon aria-hidden="true" className="mx-auto h-12 w-12 text-gray-300" />
                  <div className="mt-4 flex text-xl leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div> */}
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-2xl font-semibold leading-7 text-gray-900">
                Personal Information
              </h2>
              <p className="mt-1 text-xl leading-6 text-gray-600">
                Use a permanent address where you can receive mail.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-xl font-medium leading-6 text-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="given-name"
                      value={selectedStudent!.studentName}
                      onChange={(e) => {
                        const updatedStudent = {
                          ...selectedStudent!,
                          studentName: e.target.value.toString(),
                        };
                        setSelectedStudent(updatedStudent);
                      }}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-xl font-medium leading-6 text-gray-900"
                  >
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-xl font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-xl font-medium leading-6 text-gray-900"
                  >
                    Country
                  </label>
                  <div className="mt-2">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-xl sm:leading-6"
                    >
                      <option>United States</option>
                      <option>VietNam</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="street-address"
                    className="block text-xl font-medium leading-6 text-gray-900"
                  >
                    Street address
                  </label>
                  <div className="mt-2">
                    <input
                      id="street-address"
                      name="street-address"
                      type="text"
                      autoComplete="street-address"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                  <label
                    htmlFor="city"
                    className="block text-xl font-medium leading-6 text-gray-900"
                  >
                    City
                  </label>
                  <div className="mt-2">
                    <input
                      id="city"
                      name="city"
                      type="text"
                      autoComplete="address-level2"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="region"
                    className="block text-xl font-medium leading-6 text-gray-900"
                  >
                    State / Province
                  </label>
                  <div className="mt-2">
                    <input
                      id="region"
                      name="region"
                      type="text"
                      autoComplete="address-level1"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="postal-code"
                    className="block text-xl font-medium leading-6 text-gray-900"
                  >
                    ZIP / Postal code
                  </label>
                  <div className="mt-2">
                    <input
                      id="postal-code"
                      name="postal-code"
                      type="text"
                      autoComplete="postal-code"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
          <p className="mt-1 text-xl leading-6 text-gray-600">
            We'll always let you know about important changes, but you pick what else you want to hear about.
          </p>

          <div className="mt-10 space-y-10">
            <fieldset>
              <legend className="text-xl font-semibold leading-6 text-gray-900">By Email</legend>
              <div className="mt-6 space-y-6">
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-xl leading-6">
                    <label htmlFor="comments" className="font-medium text-gray-900">
                      Comments
                    </label>
                    <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="candidates"
                      name="candidates"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-xl leading-6">
                    <label htmlFor="candidates" className="font-medium text-gray-900">
                      Candidates
                    </label>
                    <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-xl leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Offers
                    </label>
                    <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend className="text-xl font-semibold leading-6 text-gray-900">Push Notifications</legend>
              <p className="mt-1 text-xl leading-6 text-gray-600">These are delivered via SMS to your mobile phone.</p>
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-everything" className="block text-xl font-medium leading-6 text-gray-900">
                    Everything
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-email" className="block text-xl font-medium leading-6 text-gray-900">
                    Same as email
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-nothing"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-nothing" className="block text-xl font-medium leading-6 text-gray-900">
                    No push notifications
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div> */}
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <div
              //    onClick={handleNavigate}
              className="rounded-md bg-slate-500 px-3 py-2 text-xl font-semibold text-white shadow-sm hover:bg-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <Link href={"/student"}> Cancel</Link>
            </div>

            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
            <button
              onClick={(e) => {
                e.preventDefault(); // Prevent form submission
                formyandn(); // Toggle modal
              }}
              className="rounded-md bg-red-500 px-3 py-2 text-xl font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Delete
            </button>
          </div>
        </form>
      )}
      {IsFormYaNVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 border-separate">
          <div className="bg-white p-8 rounded shadow-lg w-1/3 flex-grid justify-center">
            <h1 className="text-2xl">Bạn có chắc là muốn xóa không ?</h1>
            <div className="flex justify-center mt-8">
              <button
                type="button"
                className="w-1/2 bg-red-500 text-white px-4 py-2 rounded ml-2"
              >
                Xóa profile
              </button>
              <button
                type="button"
                className="w-1/2 bg-blue-500 text-white px-4 py-2 rounded ml-2"
                onClick={formyandn}
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

export default Page;
