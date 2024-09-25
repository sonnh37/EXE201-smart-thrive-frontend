"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
const Auth = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };
  const [imageSrc, setImageSrc] = useState('/student/1ba2e6d1d4874546c70c91f1024e17fb.jpg');

  const handleImageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;

    // Cập nhật src của ảnh dựa trên option được chọn
    switch (selectedValue) {
      case 'img1':
        setImageSrc('/student/1ba2e6d1d4874546c70c91f1024e17fb.jpg'); // Đường dẫn đến ảnh 1
        break;
      case 'img2':
        setImageSrc('/student/e39430434d2b8207188f880ac66c6411.jpg'); // Đường dẫn đến ảnh 2
        break;
      case 'img3':
        setImageSrc('/student/b40b51418293936a6e0ad09ffa229cb7.jpg'); // Đường dẫn đến ảnh 3
        break;
      case 'img4':
        setImageSrc('/student/828f0f2b3a3a17a5e52213027829149f.jpg'); // Đường dẫn đến ảnh 4
        break;
      case 'img5':
        setImageSrc('/student/6ab2a25230316f4180bf54b61e9d79a9.jpg'); // Đường dẫn đến ảnh 5
        break;
      default:
        setImageSrc(''); // Xóa ảnh nếu không chọn gì
    }
  };
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <div className="text-5xl font-bold mb-10">SMART THRIVE</div>
      <div className="text-2xl font-medium mb-6">Who's watching?</div>

      {/* Flex container for the card items */}
      <div className="flex space-x-4"> {/* Giảm khoảng cách từ space-x-4 xuống space-x-2 */}
        {/* First Card */}
        <CardContainer className="">
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
        </CardContainer>

        {/* Second Card */}
        <CardContainer className="">
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
        </CardContainer>

        {/* Third Card */}
        <CardContainer className="">
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
        </CardContainer>

        {/* Fourth Card */}
        <CardContainer className="">
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
        </CardContainer>
        <div className='' onClick={toggleForm}>
          <CardContainer className="w-full h-full" >
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
      </div>

      <button className="mt-6 bg-gray-800 px-6 py-2 rounded-md text-xl font-medium hover:bg-gray-700">
        Manage Profiles
      </button>
      {isFormVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded shadow-lg w-1/3">
            <div>
              <h1 className="font-bold text-2xl text-neutral-800 blue:text-neutral-200 text-center">
                Đăng ký tài khoản cho học sinh
              </h1>


              <form className="my-8" action="">
                {/* Upload hình ảo vào nhá nhá */}
                <div className="w-full flex">
                  {/* Image element */}
                  <img src={imageSrc} alt="Selected" className="w-40 mx-auto my-4 border-2 border-solid border-black" />

                  <div className='w-full flex items-center justify-center'>
                    {/* Select element */}
                    <select
                      id="ảnh"
                      className="w-2/3 px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 dark:bg-neutral-800 dark:border-neutral-700 text-black"
                      onChange={handleImageChange}
                      defaultValue="img1"
                    >
                      <option value="img1" className="text-black">Ảnh 1</option>
                      <option value="img2" className="text-black">Ảnh 2</option>
                      <option value="img3" className="text-black">Ảnh 3</option>
                      <option value="img4" className="text-black">Ảnh 4</option>
                      <option value="img5" className="text-black">Ảnh 5</option>
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
                        id="firstName"
                        type="text"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 dark:bg-neutral-800 dark:border-neutral-700"
                    placeholder="Nhập số điện thoại"
                  />
                </div>

                <h4 className="text-red-500">****Lưu ý****</h4> {/* Thay đổi màu chữ */}

                {/* Độ tuổi */}
                <div className="mb-4">
                  <label
                    className="block text-neutral-600 dark:text-neutral-100 font-medium mb-2"
                    htmlFor="age"
                  >
                    Độ tuổi
                  </label>
                  <select
                    id="age"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 dark:bg-neutral-800 dark:border-neutral-700 text-black"
                  >
                    <option value="under-18" className='text-black'>Dưới 18</option>
                    <option value="18-25" className='text-black'>18 - 25</option>
                    <option value="26-35" className='text-black'>26 - 35</option>
                    <option value="over-35" className='text-black'>Trên 35</option>
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
                onClick={toggleForm}
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>


  )
}

export default Auth
