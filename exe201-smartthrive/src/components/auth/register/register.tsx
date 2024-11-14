"use client";
import React, {useState} from "react";
import {Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger,} from "@/components/ui/animated-modal";
import {User} from "@/services/model/user";
import UserService from "@/services/auth-service";
import {toast} from "sonner";

export default function Register() {

    const [user, Setuser] = useState<User | null>(null);
    // Tạo một biến riêng để lưu confirmPassword
    const [confirmPassword, setConfirmPassword] = useState('');
    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent default form submission

        try {
            if (user != null) {
                if (user.password !== confirmPassword) {
                    alert("Mật khẩu và xác nhận mật khẩu không khớp");
                    return;
                }
                const response = await UserService.register(user)
                if (response.data.message === "Save data success") {
                    toast.success("Tạo user thành công");
                    //      window.location.reload();
                } else {
                    toast.warning("Tạo user thất bại: " + response.data.message);  // Hiển thị thông báo lỗi từ API
                }
            } else {
                toast.warning("Ban chua nhap day du thong tin");
            }

        } catch (error) {
            console.error('Error creating student:', error);
        }
    }

    return (
        <div className="flex items-center justify-center">
            <Modal>
                <ModalTrigger
                    className="w-full px-4 py-2 bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <span className="text-center">
            Đăng ký tài khoản
          </span>
                </ModalTrigger>
                <ModalBody>
                <ModalContent className="max-h-[80vh] overflow-y-auto">
                <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center">
                            Welcome to SmartThrive
                        </h2>

                        <form className="my-8" onSubmit={handleSubmit}>
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
                                            value={user != null ? user.firstName : ""}
                                            onChange={(e) => {
                                                const updateUser = {
                                                    ...user!,
                                                    firstName: e.target.value.toString(),
                                                };
                                                Setuser(updateUser);
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
                                            value={user != null ? user.lastName : ""}
                                            onChange={(e) => {
                                                const updateUser = {
                                                    ...user!,
                                                    lastName: e.target.value.toString(),
                                                };
                                                Setuser(updateUser);
                                            }}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 dark:bg-neutral-800 dark:border-neutral-700  text-black"
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
                                    value={user != null ? user.email : ""}
                                    onChange={(e) => {
                                        const updateUser = {
                                            ...user!,
                                            email: e.target.value.toString(),
                                        };
                                        Setuser(updateUser);
                                    }}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 dark:bg-neutral-800 dark:border-neutral-700  text-black"
                                    placeholder="Nhập email của bạn"
                                />
                            </div>
                            {/* Phone */}
                            <div className="mb-4">
                                <label
                                    className="block text-neutral-600 dark:text-neutral-100 font-medium mb-2"
                                    htmlFor="phone"
                                >
                                    Phone
                                </label>
                                <input
                                    id="phone"
                                    type="phone"
                                    value={user != null ? user.phone : ""}
                                    onChange={(e) => {
                                        const updateUser = {
                                            ...user!,
                                            phone: e.target.value.toString(),
                                        };
                                        Setuser(updateUser);
                                    }}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 dark:bg-neutral-800 dark:border-neutral-700  text-black"
                                    placeholder="Nhập số điện thoại của bạn"
                                />
                            </div>
                            {/* Username */}
                            <div className="mb-4">
                                <label
                                    className="block text-neutral-600 dark:text-neutral-100 font-medium mb-2"
                                >
                                    Tài khoản
                                </label>
                                <input
                                    id="username"
                                    value={user != null ? user.username : ""}
                                    onChange={(e) => {
                                        const updateUser = {
                                            ...user!,
                                            username: e.target.value.toString(),
                                        };
                                        Setuser(updateUser);
                                    }}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 dark:bg-neutral-800 dark:border-neutral-700  text-black"
                                    placeholder="Nhập tài khoản của bạn"
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
                                    value={user != null ? user.password : ""}
                                    onChange={(e) => {
                                        const updateUser = {
                                            ...user!,
                                            password: e.target.value.toString(),
                                        };
                                        Setuser(updateUser);
                                    }}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 dark:bg-neutral-800 dark:border-neutral-700  text-black"
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
                                    value={confirmPassword}
                                    onChange={handleConfirmPasswordChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 dark:bg-neutral-800 dark:border-neutral-700  text-black"
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

                   
                </ModalBody>
            </Modal>
        </div>
    );
}
