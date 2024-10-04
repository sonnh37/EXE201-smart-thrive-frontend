"use client"
import { useState } from 'react';


const page = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [paymentVerification, setPaymentVerification] = useState('Apply to all IPs');
    const [loginVerification, setLoginVerification] = useState('No OTP');
    const [verificationMethod, setVerificationMethod] = useState('Email');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted');
    };
    return (
        <div>
            <div className="max-w-4xl mx-auto p-8 min-h-screen">
                <h1 className="text-2xl font-bold mb-6">Mật khẩu & Bảo mật</h1>
                <p className="text-gray-500 mb-6">
                    Vì sự an toàn, Divine Shop khuyên khách hàng sử dụng mật khẩu mạnh và bảo mật hai lớp
                </p>

                {/* Password Change Section */}
                <div className="border-t border-b py-6 mb-6">
                    <h2 className="text-lg font-semibold mb-4">Đổi mật khẩu</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <input
                                    type="password"
                                    placeholder="Mật khẩu mới"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <input
                                    type="password"
                                    placeholder="Nhập lại mật khẩu mới"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"
                        >
                            Lưu thay đổi
                        </button>
                    </form>
                </div>

                {/* Two-factor Authentication Section */}
                <div className="border-t border-b py-6">
                    <h2 className="text-lg font-semibold mb-4">Bảo mật hai lớp</h2>
                    <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Payment Verification */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Xác thực khi thanh toán</label>
                                <select
                                    value={paymentVerification}
                                    onChange={(e) => setPaymentVerification(e.target.value)}
                                    className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option>Áp dụng với mọi IP</option>
                                    <option>Áp dụng với IP thường dùng</option>
                                </select>
                            </div>

                            {/* Login Verification */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Xác thực khi đăng nhập</label>
                                <select
                                    value={loginVerification}
                                    onChange={(e) => setLoginVerification(e.target.value)}
                                    className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option>Không sử dụng OTP</option>
                                    <option>Sử dụng OTP qua Email</option>
                                </select>
                            </div>

                            {/* Verification Method */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Phương thức xác thực</label>
                                <select
                                    value={verificationMethod}
                                    onChange={(e) => setVerificationMethod(e.target.value)}
                                    className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option>Bảo mật bằng Email</option>
                                    <option>Bảo mật bằng SMS</option>
                                </select>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"
                        >
                            Tiếp tục
                        </button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default page
