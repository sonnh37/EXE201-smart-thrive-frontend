"use client"
import React, { useState } from 'react'

export type Product = {
    //   image: string;
    name: string;
    category: string;
    price: number;
    sold: number;
    profit: number;
};


const productData: Product[] = [
    {
        //    image: null,
        name: 'Apple Watch Series 7',
        category: 'Electronics',
        price: 296,
        sold: 22,
        profit: 45,
    },
    {
        //  image: 0,
        name: 'Macbook Pro M1',
        category: 'Electronics',
        price: 546,
        sold: 12,
        profit: 125,
    },
    {
        //   image: 0,
        name: 'Dell Inspiron 15',
        category: 'Electronics',
        price: 443,
        sold: 64,
        profit: 247,
    },
    {
        //    image: 0,
        name: 'HP Probook 450',
        category: 'Electronics',
        price: 499,
        sold: 72,
        profit: 103,
    },
];

const page = () => {
    const [orders] = useState([
        { date: '2023-10-10 08:26:26', orderId: 6569807, product: 'Gói gia hạn Canva 1 tháng', quantity: 1, price: '25.000₫', status: 'Đã xử lý' },
        { date: '2023-03-26 13:05:27', orderId: 6134938, product: 'Steam Wallet Code 40 HKD (~119.920 VNĐ)', quantity: 1, price: '135.000₫', status: 'Đã xử lý' },
        { date: '2021-08-05 19:15:21', orderId: 4864592, product: 'Battlefield 5 (Origin)', quantity: 1, price: '69.000₫', status: 'Đã xử lý' },
        // Add more orders here...
    ]);
    return (
        <div className="flex flex-col gap-10">
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Lịch sử đơn hàng</h1>
                <p className="text-gray-600 mb-6">Hiển thị thông tin các sản phẩm bạn đã mua tại Divine Shop</p>

                <div className="mb-4">
                    <input type="text" placeholder="Mã đơn hàng" className="border px-4 py-2 rounded mr-2" />
                    <input type="number" placeholder="Số tiền từ" className="border px-4 py-2 rounded mr-2" />
                    <input type="number" placeholder="Số tiền đến" className="border px-4 py-2 rounded mr-2" />
                    <input type="date" placeholder="Từ ngày" className="border px-4 py-2 rounded mr-2" />
                    <input type="date" placeholder="Đến ngày" className="border px-4 py-2 rounded mr-2" />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">Lọc</button>
                </div>

                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border px-4 py-2">Thời gian</th>
                            <th className="border px-4 py-2">Mã đơn hàng</th>
                            <th className="border px-4 py-2">Sản phẩm</th>
                            <th className="border px-4 py-2">Tổng tiền</th>
                            <th className="border px-4 py-2">Trạng thái</th>
                            <th className="border px-4 py-2">Chi tiết</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={index} className="text-center">
                                <td className="border px-4 py-2">{order.date}</td>
                                <td className="border px-4 py-2">{order.orderId}</td>
                                <td className="border px-4 py-2">{order.product}</td>
                                <td className="border px-4 py-2">{order.price}</td>
                                <td className="border px-4 py-2 text-green-500">{order.status}</td>
                                <td className="border px-4 py-2 text-blue-500 cursor-pointer">Chi tiết</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="py-6 px-4 md:px-6 xl:px-7.5">
                    <h4 className="text-xl font-semibold text-black dark:text-white">
                        Top Products
                    </h4>
                </div>

                <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
                    <div className="col-span-3 flex items-center">
                        <p className="font-medium">Product Name</p>
                    </div>
                    <div className="col-span-2 hidden items-center sm:flex">
                        <p className="font-medium">Category</p>
                    </div>
                    <div className="col-span-1 flex items-center">
                        <p className="font-medium">Price</p>
                    </div>
                    <div className="col-span-1 flex items-center">
                        <p className="font-medium">Sold</p>
                    </div>
                    <div className="col-span-1 flex items-center">
                        <p className="font-medium">Profit</p>
                    </div>
                </div>

                {productData.map((product, key) => (
                    <div
                        className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
                        key={key}
                    >
                        <div className="col-span-3 flex items-center">
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                {/* <div className="h-12.5 w-15 rounded-md">
              <img src={product.image} alt="Product" />
            </div> */}
                                <p className="text-sm text-black dark:text-white">
                                    {product.name}
                                </p>
                            </div>
                        </div>
                        <div className="col-span-2 hidden items-center sm:flex">
                            <p className="text-sm text-black dark:text-white">
                                {product.category}
                            </p>
                        </div>
                        <div className="col-span-1 flex items-center">
                            <p className="text-sm text-black dark:text-white">
                                ${product.price}
                            </p>
                        </div>
                        <div className="col-span-1 flex items-center">
                            <p className="text-sm text-black dark:text-white">{product.sold}</p>
                        </div>
                        <div className="col-span-1 flex items-center">
                            <p className="text-sm text-meta-3">${product.profit}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default page
