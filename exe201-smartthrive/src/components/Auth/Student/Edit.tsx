import React, {useState} from 'react'

const Edit = () => {
    const [IsFormYaNVisible, setIsFormYaNVisible] = useState(false);
    const formyandn = () => {
        setIsFormYaNVisible(!IsFormYaNVisible);
    };
    const [imageSrc, setImageSrc] = useState('/student/1ba2e6d1d4874546c70c91f1024e17fb.jpg');

    const handleImageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;

        // Cập nhật src của ảnh dựa trên option được chọn
        switch (selectedValue) {
            case 'img1':
                setImageSrc('/student/1ba2e6d1d4874546c70c91f1024e17fb.jpg'); // Đường dẫn đến ảnh 1
                break;
            case 'img2':
                setImageSrc('/student/e39430434d2b8207188f880ac66c6411.jpg'); // Đường dẫn đến ảnh 2
                break;
            case 'img3':
                setImageSrc('/student/b40b51418293936a6e0ad09ffa229cb7.jpg'); // Đường dẫn đến ảnh 3
                break;
            case 'img4':
                setImageSrc('/student/828f0f2b3a3a17a5e52213027829149f.jpg'); // Đường dẫn đến ảnh 4
                break;
            case 'img5':
                setImageSrc('/student/6ab2a25230316f4180bf54b61e9d79a9.jpg'); // Đường dẫn đến ảnh 5
                break;
            default:
                setImageSrc(''); // Xóa ảnh nếu không chọn gì
        }
    };
    return (
        <div>
            <h1 className="font-bold text-2xl text-neutral-800 blue:text-neutral-200 text-center">
                Chỉnh sửa lại profile học sinh
            </h1>


            <form className="my-8" action="">
                {/* Upload hình ảo vào nhá nhá */}
                <div className="w-full flex">
                    {/* Image element */}
                    <img src={imageSrc} alt="Selected"
                         className="w-40 mx-auto my-4 border-2 border-solid border-black"/>

                    <div className='w-full flex items-start justify-center'>
                        {/* Select element */}
                        <select
                            id="ảnh"
                            className="w-2/3 px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 dark:bg-neutral-800 dark:border-neutral-700 text-black"
                            onChange={handleImageChange}
                            defaultValue="img1"
                        >
                            <option value="img1" className="text-black">Chọn student 1</option>
                            <option value="img2" className="text-black">Chọn student 2</option>
                            <option value="img3" className="text-black">Chọn student 3</option>
                            <option value="img4" className="text-black">Chọn student 4</option>
                            <option value="img5" className="text-black">Chọn student 5</option>
                        </select>
                    </div>
                </div>
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
                                placeholder="Nhập tên của học sinh"
                            />
                        </div>
                    </div>
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

                <h4 className="text-red-500">****Lưu ý****</h4> {/* Thay đổi màu chữ */}

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
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 dark:bg-neutral-800 dark:border-neutral-700 text-black"
                    >
                        <option value="under-18" className='text-black'>Dưới 18</option>
                        <option value="18-25" className='text-black'>18 - 25</option>
                        <option value="26-35" className='text-black'>26 - 35</option>
                        <option value="over-35" className='text-black'>Trên 35</option>
                    </select>
                </div>


                {/* Nút đăng ký */}
                <div className="mt-6 flex">
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700 focus:ring focus:ring-indigo-200 mr-6"
                    >
                        Lưu học sinh
                    </button>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700 focus:ring focus:ring-indigo-200 mr-6"
                        onClick={formyandn}
                    >
                        Xóa học sinh
                    </button>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700 focus:ring focus:ring-indigo-200"

                    >
                        Cancel
                    </button>
                </div>


            </form>

            {IsFormYaNVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-8 rounded shadow-lg w-1/3">
                        <div className="flex justify-end">
                            <button
                                type="button"
                                className="bg-red-500 text-white px-4 py-2 rounded ml-2"
                            >
                                Xóa profile
                            </button>
                            <button
                                type="button"
                                className="bg-red-500 text-white px-4 py-2 rounded ml-2"
                                onClick={formyandn}
                            >
                                Đóng
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Edit
