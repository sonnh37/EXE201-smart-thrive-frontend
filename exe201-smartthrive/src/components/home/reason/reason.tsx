import Image from "next/image";
import React from "react";

const Reason = () => {
  return (
    <div className="text-black mx-32 w-full h-full mt-20">
      <div className="flex justify-between w-full h-full">
        <div className="w-[40%]">
          <div className="text-lg font-bold mt-24 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            Giới thiệu
          </div>
          <div className="text-[2rem] w-[90%] text-wrap mt-4 font-bold leading-9">
            Tại sao nên chọn Smart Thive để phát triển kỹ năng của bạn ?
          </div>
          <div className="mt-6">
            <div>
              Trong bối cảnh nhu cầu học tập không ngừng tăng cao,{" "}
              <span className="font-bold">Smart Thirve </span>
              ra đời để đáp ứng mong muốn được học tập một cách hiệu quả và linh
              hoạt. Chúng tôi tạo ra một nền tảng kết nối trực tiếp giữa người
              học và giảng viên, giúp bạn chủ động lựa chọn khóa học, thời gian
              học tập phù hợp với lịch trình riêng. Với{" "}
              <span className="font-bold">Smart Thirve </span>, việc nâng cao
              kiến thức và kỹ năng trở nên cá nhân hóa và tiện lợi hơn bao giờ
              hết.
            </div>
          </div>
        </div>
        <div className="w-[50%] h-full">
          <Image
            src={"/reason-img.svg"}
            alt="reason-img"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default Reason;
