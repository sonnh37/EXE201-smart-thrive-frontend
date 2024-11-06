import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE,
    timeout: 100000,
});

axiosInstance.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem("token");
        config.headers['ngrok-skip-browser-warning'] = 'true';

        if (token) {
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
            console.log("Error no token:", error)
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
