"use client";
import {getBlogById} from "@/services/blog-service";
import {convertFromRaw, EditorState} from "draft-js";
import {Editor} from 'react-draft-wysiwyg';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {useEffect, useState} from "react";
import {Blog} from "@/services/model/blog";

export default function BlogDetail({params}: { params: { blogId: string } }) {
    const [blog, setBlog] = useState<Blog>();
    const {blogId} = params; // Get the blogId from the dynamic route
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getBlogById(blogId.toString()); // Fetch blog data by id
                setBlog(data); // Set blog data to state

                // Chuyển đổi nội dung HTML thành trạng thái của editor từ trường description
                const contentState = convertFromRaw(JSON.parse(data.description)); // Sử dụng data.description
                const newEditorState = EditorState.createWithContent(contentState);
                setEditorState(newEditorState);

                console.log("DATA" + data.user?.username + data.user?.email);
            } catch (error) {
                console.error("Error fetching blog details:", error);
            }
        };
        fetchData();
    }, [blogId]);

    const formattedDate = blog?.createdDate
        ? new Date(blog.createdDate).toLocaleDateString("vi-VN", {
            weekday: "long", // Thứ
            year: "numeric", // Năm
            month: "long", // Tháng
            day: "numeric", // Ngày
        })
        : "Ngày không xác định";
    const handleEditorChange = () => {
        // Không làm gì cả vì chỉ để view
    };
    return (
        <div className="h-full w-full pt-24 px-40">
            {/* Header */}
            <div className="flex flex-col items-center py-16 border-b border-gray-300">
                <p className="text-lg text-gray-600">{formattedDate}</p>
                <p className="font-bold text-black text-3xl">{blog?.title || "Loading..."}</p>
            </div>
            {/* Sidebar section */}
            <div className="container mx-auto flex flex-wrap py-8 px-16 text-black">
                <div className="md:w-1/4">
                    <div className="flex items-center pb-8 border-b border-gray-300">
                        <div>
                            <img src={blog?.user?.imageUrl || "/default-avatar.png"} className="w-16 rounded-full"
                                 alt="User Avatar"/>
                        </div>
                        <div className="pl-2">
                            <p>{blog?.user?.lastName} {blog?.user?.firstName}</p>
                            <p className="text-[#B0926A] font-semibold text-sm">{blog?.user?.email}</p>
                        </div>
                    </div>
                    <div className="py-8">
                        <a href="/blog" className="text-[#B0926A] font-light text-xl">
                            Xem bài blog khác
                        </a>
                    </div>
                </div>
                <div className="md:w-3/4">
                    {/* content */}
                    <div className="ml-8">
                        <h1 className="text-3xl font-bold mb-4">{blog?.title || "Loading..."}</h1>
                        <Editor
                            editorState={editorState}
                            onChange={handleEditorChange}
                            readOnly={true} // Chỉ để xem
                            toolbarHidden={true} // Ẩn thanh công cụ
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
