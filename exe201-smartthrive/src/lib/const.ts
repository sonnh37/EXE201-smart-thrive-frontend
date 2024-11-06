class Const {
    //#region Environment Variables
    static readonly CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID_GOOGLE;
    static readonly API_BASE = `${process.env.NEXT_PUBLIC_API_BASE}/api`; 
    //#endregion

    //#region Animation Variants
    static readonly FADE_BOTTOM_ANIMATION_VARIANTS = {
        hidden: {opacity: 0, y: -10},
        show: {opacity: 1, y: 0, transition: {type: "spring", duration: 0.5}}, // Thêm duration
    };
    static readonly FADE_TOP_ANIMATION_VARIANTS = {
        hidden: {opacity: 0, y: 10},
        show: {opacity: 1, y: 0, transition: {type: "spring", duration: 0.5}}, // Thêm duration
    };
    static readonly FADE_RIGHT_ANIMATION_VARIANTS = {
        hidden: {opacity: 0, x: -10},
        show: {opacity: 1, x: 0, transition: {type: "spring", duration: 0.5}}, // Thêm duration
    };
    static readonly FADE_LEFT_ANIMATION_VARIANTS = {
        hidden: {opacity: 0, x: 10},
        show: {opacity: 1, x: 0, transition: {type: "spring", duration: 0.5}}, // Thêm duration
    };
    //#endregion
    
    private static readonly USER = "users";
    private static readonly ORDER = "orders";
    private static readonly PACKAGE = "packages";
    private static readonly PACKAGE_X_COURSE = "packageXCourses";
    private static readonly BLOG = "blogs";
    private static readonly COURSE = "courses";
    private static readonly SUBJECT = "subjects";
    private static readonly PROVIDER = "providers";
    private static readonly NEW = "new";
    //#region API Endpoints
    static readonly API_USER = `${this.API_BASE}/${Const.USER}`;
    static readonly API_ORDER = `${this.API_BASE}/${Const.ORDER}`;
    static readonly API_PACKAGE = `${this.API_BASE}/${Const.PACKAGE}`;
    static readonly API_PACKAGE_X_COURSE = `${this.API_BASE}/${Const.PACKAGE_X_COURSE}`;
    static readonly API_BLOG = `${this.API_BASE}/${Const.BLOG}`;
    static readonly API_COURSE = `${this.API_BASE}/${Const.COURSE}`;
    static readonly API_SUBJECT = `${this.API_BASE}/${Const.SUBJECT}`;
    static readonly API_PROVIDER = `${this.API_BASE}/${Const.PROVIDER}`;
    //#region Frontend URLs
    
    //#Frontend URLs
    static readonly URL_ORDER = `/${Const.ORDER}`;
    static readonly URL_BLOG = `/${Const.BLOG}`;
    static readonly URL_COURSE = `/${Const.COURSE}`;
    static readonly URL_PACKAGE = `/${Const.PACKAGE}`;
    static readonly URL_ORDER_NEW = `${Const.URL_ORDER}/${Const.NEW}`;
    static readonly URL_PACKAGE_NEW = `${Const.URL_PACKAGE}/${Const.NEW}`;
    static readonly URL_BLOG_NEW = `${Const.URL_BLOG}/${Const.NEW}`;
    static readonly URL_COURSE_NEW = `${Const.URL_COURSE}/${Const.NEW}`;
    //#endregion
}

export {Const};
