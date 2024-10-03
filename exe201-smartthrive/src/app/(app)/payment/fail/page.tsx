import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="h-screen relative">
      <div className=" h-screen pt-28">
        <div className=" p-6  md:mx-auto">
          <svg viewBox="0 0 24 24" className="w-16 h-16 mx-auto my-6">
            <circle cx="12" cy="12" r="12" fill="red"></circle>

            <path
              fill="white"
              d="M12 10.586l4.95-4.95a1 1 0 011.415 1.415L13.415 12l4.95 4.95a1 1 0 01-1.415 1.415L12 13.415l-4.95 4.95a1 1 0 01-1.415-1.415l4.95-4.95-4.95-4.95A1 1 0 117.05 5.636L12 10.586z"
            ></path>
          </svg>

          <div className="text-center">
            <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
              Payment Fail!
            </h3>
            <p className="text-gray-600 my-2">
              Error when make online payment.
            </p>
            <p className="text-black"> Have a great day! </p>
            <div className="py-10 text-center">
              <Link
                href="/"
                className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3"
              >
                GO BACK
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
