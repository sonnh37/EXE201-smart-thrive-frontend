// middleware.ts
import type {NextRequest} from "next/server";
import {NextResponse} from "next/server";

export function middleware(req: NextRequest) {
    const token = req.cookies.get("token"); // Lấy token từ cookie

    if (req.nextUrl.pathname.startsWith('/_next/')) {
        return NextResponse.next();
    }

    // Cho phép truy cập nếu có token và không thuộc về các điều kiện trên
    return NextResponse.next();
}

// Áp dụng middleware cho các trang cần bảo vệ
export const config = {
    matcher: ["/:path*"], // Áp dụng cho tất cả các đường dẫn
};
