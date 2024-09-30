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
           
        </div>
    )
}

export default page
