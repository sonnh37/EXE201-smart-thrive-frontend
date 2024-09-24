"use client"
import React from 'react'
import Image from 'next/image'
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
const Auth = () => {
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
  
    <button className="mt-6 bg-gray-800 px-6 py-2 rounded-md text-xl font-medium hover:bg-gray-700">
      Manage Profiles
    </button>
  </div>
  
  )
}

export default Auth
  {/* <div className=''>
          <Image
            src="/student/e39430434d2b8207188f880ac66c6411.jpg" // Đường dẫn đến hình ảnh (có thể là URL hoặc hình ảnh cục bộ trong thư mục public)
            alt="Description of image"   // Thẻ alt cho hình ảnh
            width={96}  // Chiều rộng 24 * 4px (96px)
            height={96} // Chiều cao 24 * 4px (96px)
            className="rounded-md"  // Tailwind CSS cho bo góc
          />


          <div className="text-sm font-medium text-center">Quang</div>
        </div>
        <div className=''>
          <Image
            src="/student/b40b51418293936a6e0ad09ffa229cb7.jpg" // Đường dẫn đến hình ảnh (có thể là URL hoặc hình ảnh cục bộ trong thư mục public)
            alt="Description of image"   // Thẻ alt cho hình ảnh
            width={96}  // Chiều rộng 24 * 4px (96px)
            height={96} // Chiều cao 24 * 4px (96px)
            className="rounded-md"  // Tailwind CSS cho bo góc
          />

          <div className="text-sm font-medium text-center">Lộc</div>
        </div>
        <div className=''>
          <Image
            src="/student/828f0f2b3a3a17a5e52213027829149f.jpg" // Đường dẫn đến hình ảnh (có thể là URL hoặc hình ảnh cục bộ trong thư mục public)
            alt="Description of image"   // Thẻ alt cho hình ảnh
            width={96}  // Chiều rộng 24 * 4px (96px)
            height={96} // Chiều cao 24 * 4px (96px)
            className="rounded-md"  // Tailwind CSS cho bo góc
          />
          <div className="text-sm font-medium text-center">Sơn</div>
        </div> */}