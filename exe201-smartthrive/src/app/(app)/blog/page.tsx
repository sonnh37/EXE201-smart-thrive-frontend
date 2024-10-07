"use client";

import { getBlog } from "@/services/blog-service";
import { useEffect, useState } from "react";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

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

  const formatDate = (dateString) => {
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
        {/* <p className="text-lg text-gray-600">Lorem Ipsum Dolor Sit Amet</p> */}
      </div>

      {/* <!-- Topic Nav --> */}
      {/* <nav className="w-full py-4 border-t border-b bg-white text-black">
        <div className="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
          <a
            href="#"
            className="hover:bg-black hover:text-[#FCF7E6] rounded py-2 px-4 mx-2"
          >
            Technology
          </a>
          <a
            href="#"
            className="hover:bg-black hover:text-[#FCF7E6] rounded py-2 px-4 mx-2"
          >
            Automotive
          </a>
          <a
            href="#"
            className="hover:bg-black hover:text-[#FCF7E6] rounded py-2 px-4 mx-2"
          >
            Finance
          </a>
          <a
            href="#"
            className="hover:bg-black hover:text-[#FCF7E6] rounded py-2 px-4 mx-2"
          >
            Politics
          </a>
          <a
            href="#"
            className="hover:bg-black hover:text-[#FCF7E6] rounded py-2 px-4 mx-2"
          >
            Culture
          </a>
          <a
            href="#"
            className="hover:bg-black hover:text-[#FCF7E6] rounded py-2 px-4 mx-2"
          >
            Sports
          </a>
        </div>
      </nav> */}

      <div className="container mx-auto flex flex-wrap py-6 px-20">
        {/* <!-- Posts Section --> */}
        <section className="w-full md:w-2/3 flex flex-col items-center px-3">
          {blogs.map((blog, index) => (
            <article key={index} className="flex flex-col shadow my-4">
              {/* <!-- Article Image --> */}
              {/* <a href="#" className="hover:opacity-75">
                      <img src="https://i.pinimg.com/originals/2a/5e/ac/2a5eacedd4c699e9128de51f830b99b0.jpg"/>
                  </a> */}
              <div className="h-[50vh]">
                <img
                  src={blog.backgroundImage}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-white flex flex-col justify-start p-6">
                {/* <a
                href="#"
                className="hover:text-black text-[#B0926A] text-sm font-bold uppercase pb-4"
              >
                Technology
              </a> */}
                <a
                  href={`/blog/${blog.id}`}
                  className="text-3xl font-bold text-[#B0926A] hover:text-gray-700 pb-4"
                >
                  {blog.title}
                </a>
                <div className="text-lg flex text-black mb-2">
                  <p>Người đăng:&nbsp;</p>
                  <p className="font-semibold hover:text-gray-800">
                    {blog.user.lastName} {blog.user.firstName}
                  </p>
                  <p className="ml-4 text-md text-gray-500">
                    {formatDate(blog.createdDate)}
                  </p>
                </div>
                <p className="mb-6 text-black line-clamp-5">
                  {blog.description}
                </p>
                <a
                  href={`/blog/${blog.id}`}
                  className="uppercase text-gray-800 hover:text-black hover:text-[#B0926A]"
                >
                  ĐỌC THÊM... <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </article>
          ))}

          {/* <!-- Pagination --> */}
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
        </section>

        {/* <!-- Sidebar Section --> */}
        <aside className="w-full md:w-1/3 flex flex-col items-center px-3 text-black">
          <div className="w-full bg-white shadow flex flex-col my-4 p-6">
            <p className="text-xl font-semibold pb-5">About Us</p>
            <p className="pb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              mattis est eu odio sagittis tristique. Vestibulum ut finibus leo.
              In hac habitasse platea dictumst.
            </p>
            <a
              href="#"
              className="w-full bg-black text-white font-bold text-sm uppercase rounded hover:bg-[#FCF7E6] hover:text-black flex items-center justify-center px-2 py-3 mt-4"
            >
              Get to know us
            </a>
          </div>

          <div className="w-full bg-white shadow flex flex-col my-4 p-6">
            <p className="text-xl font-semibold pb-5">Facebook</p>
            <img
              className="hover:opacity-75"
              src="https://i.pinimg.com/564x/3c/14/43/3c144349a7d3bb24e2f45b87746cad5d.jpg"
            />
            <a
              href="#"
              className="w-full bg-black text-white font-bold text-sm uppercase rounded hover:bg-[#FCF7E6] hover:text-black flex items-center justify-center px-2 py-3 mt-6"
            >
              Follow fanpage
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}
