import {Const} from "@/lib/const";
import {Blog} from "@/types/blog";
import BaseService from "./base-service";

class BlogService extends BaseService<Blog> {
    constructor() {
        super(Const.API_BLOG);
    }
}

export default new BlogService();
