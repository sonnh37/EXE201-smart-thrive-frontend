"use client";

import {getBlog} from "@/services/blog-service";
import {useEffect, useState} from "react";
import {convertFromRaw, EditorState} from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {Blog} from "@/services/model/blog";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("react-draft-wysiwyg").then((mod) => mod.Editor), {
    ssr: false,
});

export default function BlogPage() {
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getBlog();
                setBlogs(data.results);
                console.log(data.results);
            } catch (error) {
                console.error("Error fetching blog data:", error);
            }
        };

        fetchData();
    }, []);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("vi-VN", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    };
    return (
        <div className="h-full w-full pt-24 bg-[#FCF7E6]">
            {/* Header */}
            <div className="flex flex-col items-center py-12 ">
                <p className="font-bold text-black uppercase text-5xl">Blogs</p>
            </div>

            <div className="flex px-20">
                {/* Posts Section */}
                <div className="w-2/3 h-full flex flex-col items-center px-3">
                    {blogs.map((blog, index) => (
                        <div key={index} className="flex flex-col shadow my-4 w-full">
                            {/* Article Image */}
                            <div className="w-full h-[50vh] relative">
                                <img
                                    src={blog.backgroundImage}
                                    className="w-full h-full object-cover"
                                    alt={blog.title}
                                />
                            </div>
                            <div className="bg-white flex flex-col justify-start p-6">
                                <a
                                    href={`/blog/${blog.id}`}
                                    className="text-3xl font-bold text-[#B0926A] hover:text-gray-700 pb-4"
                                >
                                    {blog.title}
                                </a>
                                <div className="text-lg flex text-black mb-2">
                                    <p>Người đăng:&nbsp;</p>
                                    <p className="font-semibold hover:text-gray-800">
                                        {blog.user?.lastName} {blog.user?.firstName}
                                    </p>
                                    <p className="ml-4 text-md text-gray-500">
                                        {formatDate(blog.createdDate.toString())}
                                    </p>
                                </div>
                                <p className="mb-6 text-black line-clamp-3">
                                    <Editor
                                        editorState={EditorState.createWithContent(
                                            convertFromRaw(JSON.parse(blog.description!))
                                        )}
                                        readOnly={true} // Chỉ để xem
                                        toolbarHidden={true} // Ẩn thanh công cụ
                                        editorStyle={{
                                            overflow: "hidden",
                                            maxHeight: "15em",
                                            // lineClamp: 5,
                                            // display: "-webkit-box",
                                            // WebkitLineClamp: 5,
                                            // WebkitBoxOrient: "vertical",
                                        }} // Chỉ hiển thị 5 dòng
                                    />
                                </p>
                                <a
                                    href={`/blog/${blog.id}`}
                                    className="uppercase text-gray-800 hover:text-[#B0926A]"
                                >
                                    ĐỌC THÊM...
                                </a>
                            </div>
                        </div>
                    ))}
                    {/* Pagination */}
                    <div className="flex items-center py-8">
                        <a
                            href="#"
                            className="h-10 w-10 bg-black hover:bg-black font-semibold text-[#FCF7E6] text-sm flex items-center justify-center"
                        >
                            1
                        </a>
                        <a
                            href="#"
                            className="h-10 w-10 font-semibold text-gray-800 hover:bg-black hover:text-[#FCF7E6] text-sm flex items-center justify-center"
                        >
                            2
                        </a>
                        <a
                            href="#"
                            className="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3"
                        >
                            Next <i className="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>

                {/* Sidebar Section */}
                <div className="w-1/3 h-full flex flex-col items-center px-3 text-black">
                    <div className="w-full bg-white shadow flex flex-col my-4 p-6">
                        <p className="text-xl font-semibold pb-5">About Us</p>
                        <p className="pb-2">
                            Smart Thrive là nền tảng tích hợp nhiều khóa học, giúp khách hàng sắp xếp lịch học thông
                            minh cũng như giúp khách hàng lựa chọn được những khóa học tối ưu nhất dành riêng cho khách
                            hàng.
                        </p>
                        <a
                            href="/about"
                            className="w-full bg-black text-white font-bold text-sm uppercase rounded hover:bg-[#FCF7E6] hover:text-black flex items-center justify-center px-2 py-3 mt-4"
                        >
                            Get to know us
                        </a>
                    </div>

                    <div className="w-full bg-white shadow flex flex-col my-4 p-6">
                        <p className="text-xl font-semibold pb-5">Facebook</p>
                        <img
                            className="hover:opacity-75"
                            src="/facebook/fanpage.png"
                            alt="Facebook"
                        />
                        <a
                            href="https://www.facebook.com/profile.php?id=61565528955571"
                            className="w-full bg-black text-white font-bold text-sm uppercase rounded hover:bg-[#FCF7E6] hover:text-black flex items-center justify-center px-2 py-3 mt-6"
                        >
                            Follow fanpage
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
