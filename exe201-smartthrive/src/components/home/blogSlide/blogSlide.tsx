import {get3NewestBlog} from "@/services/blog-service";
import {Blog} from "@/services/model/blog";
import React, {useEffect, useState} from "react";
import NewestBlogs from "./newestBlogsProps";

const BlogSlide = () => {
    const [blogsList, setBlogsList] = useState<Blog[] | null>();
    useEffect(() => {
        const fetchBlogs = async () => {
            var result = await get3NewestBlog();
            console.log(result);
            setBlogsList(result.results);
        };
        fetchBlogs();
    }, []);
    return (
        <div className="w-full h-full text-black my-12 px-32">
            <div className="w-full h-full text-center ">
                <div
                    className="text-lg font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                    Blogs mới nhất
                </div>
                <div className="text-[2rem] w-full text-wrap mt-4 font-bold leading-9">
                    Thu thập những kiến thức quý giá
                </div>
            </div>
            <div>{blogsList && <NewestBlogs blogs={blogsList}/>}</div>
        </div>
    );
};

export default BlogSlide;
