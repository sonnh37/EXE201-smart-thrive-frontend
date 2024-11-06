import React from "react";
import {Calendar} from "lucide-react";
import {Blog} from "@/services/model/blog";
import Link from "next/link";

interface NewestBlogsProps {
    blogs?: Blog[];
}

function formatDate(dateString: string) {
    const date = new Date(dateString);

    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const year = date.getFullYear();

    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    return `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
}

const NewestBlogs: React.FC<NewestBlogsProps> = ({blogs = []}) => {
    if (blogs.length === 0) {
        return (
            <div className="container mx-auto px-4 py-8 text-center">
                <h2 className="text-3xl font-bold mb-6">Latest Blog Posts</h2>
                <p className="text-gray-600">No blog posts available at the moment.</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-16 ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {blogs.map((blog) => (
                    <div
                        key={blog.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
                    >
                        <img
                            src={blog.backgroundImage}
                            alt={blog.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4 flex-grow">
                            <h3 className="text-xl font-semibold mb-2 min-h-[4rem]">
                                {blog.title}
                            </h3>
                            <p className="text-gray-600 mb-4">{blog.user!.username}</p>
                            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                <div className="flex items-center">
                                    <Calendar className="w-4 h-4 mr-1"/>
                                    <span>
                    {blog.createdDate
                        ? formatDate(blog.createdDate.toString())
                        : formatDate(new Date(Date.now()).toString())}
                  </span>
                                </div>
                                <span>{blog.user!.username}</span>
                            </div>
                            <Link
                                href={`/blog/${blog.id}`}
                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out w-full"
                            >
                                Read More
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewestBlogs;
