"use client"
import { getBlogById } from "@/services/blog-service";
import { useEffect, useState } from "react";

export default function BlogDetail({ params }: { params: { blogId: string } }) {
  const [blog, setBlog] = useState([]);
  const { blogId } = params; // Get the blogId from the dynamic route

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBlogById(blogId.toString()); // Fetch blog data by id
        setBlog(data); // Set blog data to state
        console.log("DATA"+data.user.username+data.user.email);
      } catch (error) {
        console.error("Error fetching blog details:", error);
      }
    };
    fetchData();
  }, [blogId]);

  // Lấy ngày từ object và định dạng lại
  const formattedDate = new Date(blog.createdDate).toLocaleDateString('vi-VN', {
    weekday: 'long',   // Thứ
    year: 'numeric',   // Năm 
    month: 'long',     // Tháng 
    day: 'numeric'     // Ngày 
  });

  return (
    <div className="h-full w-full pt-24 px-40">
      {/* Header */}
      <div className="flex flex-col items-center py-16 border-b border-gray-300 ">
        <p className="text-lg text-gray-600">{formattedDate}</p>
        <p className="font-bold text-black text-3xl">{blog.title}</p>
      </div>
      {/* Sidebar section */}
      <div className="container mx-auto flex flex-wrap py-8 px-16 text-black">
        <div className="md:w-1/4">
          <div className="flex items-center pb-8 border-b border-gray-300">
            <div>
              <img
                src={blog.user?.imageUrl}
                className="w-16 rounded-full"/>
              
            </div>
            <div className="pl-2">
              <p>{blog.user?.lastName} {blog.user?.firstName}</p>
              <p className="text-[#B0926A] font-semibold text-sm">
                {blog.user?.email}
              </p>
            </div>
          </div>

          {/* <div className="py-8 border-b border-gray-300">
            <div className="pl-2 text-gray-500 font-normal">
              <p className="uppercase">Tags</p>
              <p className="text-[#B0926A] text-sm">Technology</p>
            </div>
          </div> */}

          <div className="py-8">
            <a href="/blog" className="text-[#B0926A] font-light text-xl">
              Xem bài blog khác
            </a>
          </div>
        </div>
        <div className="md:w-3/4">
          {/* content */}
          <div className="ml-8">
            <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
            <p className="mb-4">{blog.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
