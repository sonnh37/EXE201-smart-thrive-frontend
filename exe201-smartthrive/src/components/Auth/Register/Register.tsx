"use client";
import React from "react";
import {
  Modal,
  ModalTrigger,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "@/components/ui/animated-modal";


export default function Register() {
  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="w-full px-4 py-2 bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Đăng ký tài khoản
          </span>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center">
              Welcome to SmartThrive
            </h2>
           
            <form className="my-8" action="">
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 dark:bg-neutral-800 dark:border-neutral-700"
                      placeholder="Nhập họ của bạn"
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="mb-4">
                <label
                  className="block text-neutral-600 dark:text-neutral-100 font-medium mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 dark:bg-neutral-800 dark:border-neutral-700"
                  placeholder="Nhập email của bạn"
                />
              </div>

              {/* Mật khẩu */}
              <div className="mb-4">
                <label
                  className="block text-neutral-600 dark:text-neutral-100 font-medium mb-2"
                  htmlFor="password"
                >
                  Mật khẩu
                </label>
                <input
                  id="password"
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 dark:bg-neutral-800 dark:border-neutral-700"
                  placeholder="Nhập mật khẩu"
                />
              </div>

              {/* Xác nhận Mật khẩu */}
              <div className="mb-4">
                <label
                  className="block text-neutral-600 dark:text-neutral-100 font-medium mb-2"
                  htmlFor="confirmPassword"
                >
                  Xác nhận mật khẩu
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 dark:bg-neutral-800 dark:border-neutral-700"
                  placeholder="Nhập lại mật khẩu"
                />
              </div>

              {/* Nút đăng ký */}
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700 focus:ring focus:ring-indigo-200"
                >
                  Đăng ký
                </button>
              </div>
              
               
            </form>
          </ModalContent>

          <ModalFooter className="gap-4">
            <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
              Cancel
            </button>
            <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
              Login
            </button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}
