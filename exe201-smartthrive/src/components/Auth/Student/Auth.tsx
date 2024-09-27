"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Register from '../Student/Register';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import DrawOutlineButton from '../Tester/tester';
import Edit from './Edit';
const Auth : React.FC = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };
 
  const [isFormVisible1, setIsFormVisible1] = useState(false);

  const toggleForm1 = () => {
    setIsFormVisible1(!isFormVisible1);
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
      <div className="mt-6 bg-gray-800 px-6 py-2 rounded-md text-xl font-medium hover:bg-gray-700">
      <DrawOutlineButton  onClick={toggleForm1}>
        Manage Profiles
      </DrawOutlineButton >
      </div>
      {isFormVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded shadow-lg w-1/3">
           <Register/>
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
        {isFormVisible1 && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded shadow-lg w-1/3">
          <Edit/>
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-red-500 text-white px-4 py-2 rounded ml-2"
                onClick={toggleForm1}
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
