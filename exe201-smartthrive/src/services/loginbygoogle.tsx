import axios from "axios";


export const logout = () => {
    localStorage.removeItem("token");
    localStorage.location.reload();
}
// Tạo một instance của axios (nếu cần)
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE, // URL cơ bản cho các request API của bạn
  timeout: 10000, // Thời gian chờ tối đa cho request (ms)
});

// Thêm Interceptor để tự động đính kèm Authorization token cho tất cả request
axiosInstance.interceptors.request.use(
  async (config) => {
    // Lấy token từ localStorage hoặc cookie
    const token = localStorage.getItem("token");
    // Kiểm tra tính hợp lệ của token
    if (token) {
      // Đính kèm token vào header Authorization nếu có token
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor để xử lý phản hồi lỗi
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Kiểm tra nếu token đã hết hạn
    if (error.response?.status === 401) {
      logout();
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;