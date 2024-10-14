"use client";

import Image from "next/image";

const Page = () => {
    return (
        <div className="h-full w-full text-black">
            <div className="m-24 mb-8 flex">
                <div className="w-[80%]">
                    <div className="text-6xl font-extrabold oswald-text pt-20">
                        About Us
                    </div>
                    <div className="w-[90%] pt-8 text-sm leading-8">
                        Smart Thrive là nền tảng tích hợp nhiều khóa học, giúp khách hàng
                        sắp xếp lịch học thông minh cũng như giúp khách hàng lựa chọn được
                        những khóa học tối ưu nhất dành riêng cho khách hàng. Smart Thrive
                        là nền tảng tích hợp nhiều khóa học, giúp khách hàng sắp xếp lịch
                        học thông minh cũng như giúp khách hàng lựa chọn được những khóa học
                        tối ưu nhất dành riêng cho khách hàng.
                    </div>
                </div>
                <div className="h-fit">
                    <Image
                        src={"/online_learning.jpg"}
                        alt="about_img"
                        width={1300}
                        height={1300}
                        className="rounded-3xl w-fit"
                    />
                </div>
            </div>
            <div className="flex w-full justify-around mb-20">
                <div className="mx-24 text-3xl font-extrabold oswald-text pt-20 text-black w-[30%]">
                    <h1 className="text-center">Mission</h1>
                    <p className="text-sm font-medium pt-4 text-center">
                        Smart Thrive is not only an online platform that provides quality
                        courses, but it is also a community for education-loving customers
                        to connect with each other, creating a user platform that can share
                        quality courses with each other and help connect quality centers to
                        customers in need. Empowering people to improve their health by
                        connecting customers with the best health and brain training
                        courses.
                    </p>
                </div>
                <div className="mx-24 text-3xl font-extrabold oswald-text pt-20 text-black w-[30%]">
                    <h1 className="text-center">Vision</h1>
                    <p className="text-sm font-medium pt-4 text-center">
                        Smart Thrive's goal is to become the leading online platform for
                        health and brain training education, helping people take control of
                        their physical and mental health through personalized learning
                        opportunities. Providing customers with quick and convenient
                        learning opportunities, easily searchable courses and full
                        information without having to go through a broker or come directly
                        to the center. Smart Thrive always wants to put the convenience of
                        customers as the top goal to help Smart Thrive achieve its larger
                        goals.
                    </p>
                </div>
                <div className="mx-24 text-3xl font-extrabold oswald-text pt-20 text-black w-[30%]">
                    <h1 className="text-center">Reposibility</h1>
                    <p className="text-sm font-medium pt-4 text-center">
                        Với thư viện các khóa học đa dạng từ online đến offline, đem đến cho
                        khách hàng nhiều lựa chọn tùy vào nhu cầu, sở thích. Các khóa học
                        được kiểm duyệt chất lượng kỹ càng với các giảng viên uy tín đa dạng
                        ngành nghề, giúp khách hàng dễ dàng học tập ở bất cứ đâu, bất cứ môn
                        học nào, từ kỹ năng sống, kiến thức chuyên ngành, đến những bộ môn
                        thể thao.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Page;
