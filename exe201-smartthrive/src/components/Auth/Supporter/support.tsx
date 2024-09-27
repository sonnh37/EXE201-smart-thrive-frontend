import React from 'react'

const support = () => {
    return (
        <div>
            <h2 className="font-bold text-xl text-neutral-800 blue:text-neutral-200 text-center">
                HỌC THỬ MIỄN PHÍ VÀ NHẬN NGAY CÁC ƯU ĐÃI
            </h2>
            <h4>
                Sau khi điền đầy đủ thông tin, hãy bấm ngay đăng ký sẽ có người sẽ liên hệ với bạn để tư vấn dễ dàng hơn
            </h4>

            <form className="my-8" action="">
                {/* Tên và Họ */}
                <div className="mb-4">
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                        <div className="flex-1">
                            <label
                                className="block text-neutral-600 dark:text-neutral-100 font-medium mb-2"
                                htmlFor="firstName"
                            >
                                Tên
                            </label>
                            <input
                                id="firstName"
                                type="text"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 dark:bg-neutral-800 dark:border-neutral-700"
                                placeholder="Nhập tên của bạn"
                            />
                        </div>
                    </div>
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label
                        className="block text-neutral-600 dark:text-neutral-100 font-medium mb-2"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 dark:bg-neutral-800 dark:border-neutral-700"
                        placeholder="Nhập email của bạn"
                    />
                </div>

                {/* Số điện thoại */}
                <div className="mb-4">
                    <label
                        className="block text-neutral-600 dark:text-neutral-100 font-medium mb-2"
                        htmlFor="phone"
                    >
                        Số điện thoại
                    </label>
                    <input
                        id="phone"
                        type="phone"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 dark:bg-neutral-800 dark:border-neutral-700"
                        placeholder="Nhập số điện thoại"
                    />
                </div>

                <h4 className="text-red-500">Lưu ý</h4> {/* Thay đổi màu chữ */}

                {/* Độ tuổi */}
                <div className="mb-4">
                    <label
                        className="block text-neutral-600 dark:text-neutral-100 font-medium mb-2"
                        htmlFor="age"
                    >
                        Độ tuổi
                    </label>
                    <select
                        id="age"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 dark:bg-neutral-800 dark:border-neutral-700"
                    >
                        <option value="under-18">Dưới 18</option>
                        <option value="18-25">18 - 25</option>
                        <option value="26-35">26 - 35</option>
                        <option value="over-35">Trên 35</option>
                    </select>
                </div>


                {/* Nút đăng ký */}
                <div className="mt-6">
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700 focus:ring focus:ring-indigo-200"
                    >
                        Đăng ký ngay bạn nhé
                    </button>
                </div>


            </form>
        </div>
    )
}

export default support
