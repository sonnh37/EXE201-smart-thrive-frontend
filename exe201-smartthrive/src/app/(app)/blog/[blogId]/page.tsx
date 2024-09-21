export default function blogDetail({ params, }: {params: {blogId: string};}) {
  return (
    <div className="h-full w-full pt-24 px-40">
      {/* Header */}
      <div className="flex flex-col items-center py-16 border-b border-gray-300 ">
        <p className="text-lg text-gray-600">Saturday, August 5, 2023</p>
        <p className="font-bold text-black text-3xl">
          Blog {params.blogId}
        </p>
      </div>
    {/* Sidebar section */}
      <div className="container mx-auto flex flex-wrap py-8 px-16 text-black">
        <div className="md:w-1/4">
          <div className="flex items-center pb-8 border-b border-gray-300">
            <div>
              <img
                src="https://i.pinimg.com/236x/04/a4/18/04a418438558e1a136e334d20ed1bb06.jpg"
                className="w-16 h-16 rounded-full"
              ></img>
            </div>
            <div className="pl-2">
              <p>Thu Thanh Bui</p>
              <p className="text-[#B0926A] font-semibold text-sm">
                @ThanhThu123
              </p>
            </div>
          </div>

          <div className="py-8 border-b border-gray-300">
            <div className="pl-2 text-gray-500 font-normal">
              <p className="uppercase">Tags</p>
              <p className="text-[#B0926A] text-sm">Technology</p>
            </div>
          </div>

          <div className="py-8">
            <a href="" className="text-[#B0926A] font-light text-xl">
              Back to the blogs
            </a>
          </div>
        </div>
        <div className="md:w-3/4">
          {/* content */}
          <div className="ml-8">
            <h1 className="text-3xl font-bold mb-4">
              Khóa Học Tiếng Anh Hiệu Quả
            </h1>

            <p className="mb-4">
              Tiếng Anh đã trở thành ngôn ngữ toàn cầu, và việc học tiếng Anh
              không chỉ giúp bạn giao tiếp mà còn mở ra nhiều cơ hội trong công
              việc và cuộc sống. Trong bài viết này, chúng ta sẽ cùng khám phá
              những lợi ích của việc học tiếng Anh và những phương pháp hiệu quả
              để cải thiện khả năng ngôn ngữ của bạn.
            </p>

            <h2 className="text-2xl font-semibold mb-2">
              Lợi Ích Của Việc Học Tiếng Anh:
            </h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>Cơ hội nghề nghiệp:</strong> Nhiều công ty hiện nay yêu
                cầu nhân viên có khả năng sử dụng tiếng Anh để giao tiếp với
                khách hàng quốc tế.
              </li>
              <li>
                <strong>Khả năng giao tiếp:</strong> Tiếng Anh giúp bạn kết nối
                với mọi người từ khắp nơi trên thế giới.
              </li>
              <li>
                <strong>Tiếp cận thông tin:</strong> Phần lớn tài liệu và thông
                tin hiện nay được viết bằng tiếng Anh, việc thành thạo ngôn ngữ
                này giúp bạn dễ dàng tiếp cận hơn.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-2">
              Phương Pháp Học Tiếng Anh Hiệu Quả:
            </h2>
            <ol className="list-decimal list-inside mb-4">
              <li>
                <strong>Thực hành hàng ngày:</strong> Dành ít nhất 30 phút mỗi
                ngày để học từ vựng, ngữ pháp và nghe tiếng Anh.
              </li>
              <li>
                <strong>Xem phim và nghe nhạc:</strong> Đây là cách thú vị để
                cải thiện khả năng nghe và nói tiếng Anh.
              </li>
              <li>
                <strong>Tham gia các khóa học trực tuyến:</strong> Nhiều nền
                tảng cung cấp khóa học tiếng Anh với nhiều cấp độ khác nhau.
              </li>
            </ol>

            <h2 className="text-2xl font-semibold mb-2">Kết Luận:</h2>
            <p>
              Việc học tiếng Anh không chỉ là một kỹ năng cần thiết mà còn là
              một hành trình thú vị. Hãy bắt đầu ngay hôm nay và trải nghiệm
              những lợi ích mà ngôn ngữ này mang lại cho bạn!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
