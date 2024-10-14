"use client"
import React, {useEffect, useState} from "react";
import {User} from "@/services/model/user";
import UserService from "@/services/auth-service";
import { Gender } from "@/services/model/enum";

const page = () => {


    const [user, setUser] = useState<User | null>(null);
    useEffect(() => {
        const fetchApi = async () => {
            const result = await UserService.getById(
                localStorage.getItem("userId")!.toString()!
            );

            setUser(result);
        };
        fetchApi();
    }, []);


    return (
        <div className="w-full flex flex-col">
            <section className="relative flex-shrink-0 mb-0">
                <section className="relative block h-[200px] ">
                    <div
                        className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80')",
                        }}
                    >
            <span
                id="blackOverlay"
                className="w-full h-full absolute opacity-50 bg-black"
            ></span>
                    </div>
                </section>

                <section className="relative py-14 bg-blueGray-200 ">
                    <div className="container mx-auto px-14">
                        <div
                            className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-40 "> {/* Giảm giá trị mt-64 thành mt-40 */}
                            <div className="px-4">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                        <div className="relative">
                                            <img
                                                alt="..."
                                                src={user != null ? user.imageUrl : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fdefault-user&psig=AOvVaw2fX7p0rlFvCgLUf1SeWN-6&ust=1727966491736000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPCuzPn274gDFQAAAAAdAAAAABAE"}
                                                className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-20 lg:-ml-16 max-w-[150px]"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="text-center mt-20"> {/* Tăng khoảng cách top lên để có thêm khoảng trống */}
                                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                        {user?.username}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <div className="w-full lg:w-11/12  mx-auto ">
                <div
                    className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-t">
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <form>
                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                User Information
                            </h6>
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                               htmlFor="grid-password">
                                            Username
                                        </label>
                                        <input type="text"
                                               className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                               value={user?.username}/>
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                               htmlFor="grid-password">
                                            Email address
                                        </label>
                                        <input type="email"
                                               className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                               value={user?.email}/>
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                               htmlFor="grid-password">
                                            First Name
                                        </label>
                                        <input type="text"
                                               className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                               value={user?.firstName}/>
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                               htmlFor="grid-password">
                                            Last Name
                                        </label>
                                        <input type="text"
                                               className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                               value={user?.lastName}/>
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                               htmlFor="grid-password">
                                            DOB
                                        </label>
                                        <input type="date"
                                               className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                               value={
                                                   user?.dob
                                                       ? (typeof user.dob === 'string' ? new Date(user.dob) : user.dob)
                                                           .toISOString()
                                                           .split('T')[0]
                                                       : ''
                                               }/>
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                               htmlFor="grid-password">
                                            Gender
                                        </label>
                                        {/* <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={user?.gender} /> */}
                                        <select
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            id=""
                                            value={user != null ? user.gender : Gender.Other}
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
                                </div>
                            </div>

                            <hr className="mt-6 border-b-1 border-blueGray-300"/>

                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                Contact Information
                            </h6>
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-12/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                               htmlFor="grid-password">
                                            Address
                                        </label>
                                        <input type="text"
                                               className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                               value={user?.address}/>
                                    </div>
                                </div>
                                <div className="w-full lg:w-12/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                               htmlFor="grid-password">
                                            Phone
                                        </label>
                                        <input type="text"
                                               className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                               value={user?.phone}/>
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                               htmlFor="grid-password">
                                            City
                                        </label>
                                        <input type="email"
                                               className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                               value="New York"/>
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                               htmlFor="grid-password">
                                            Country
                                        </label>
                                        <input type="text"
                                               className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                               value="United States"/>
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                               htmlFor="grid-password">
                                            Postal Code
                                        </label>
                                        <input type="text"
                                               className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                               value="Postal Code"/>
                                    </div>
                                </div>
                            </div>

                            <hr className="mt-6 border-b-1 border-blueGray-300"/>

                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                About Me
                            </h6>
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-12/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                               htmlFor="grid-password">
                                            About me
                                        </label>
                                        <textarea
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            rows={4}>
                      A beautiful UI Kit and Admin for JavaScript &amp; Tailwind CSS. It is Freeand Open Source.</textarea>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
