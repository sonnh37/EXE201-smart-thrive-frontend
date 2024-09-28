"use client";
import PackageDetail from "@/components/Package/PackageDetail";
import PaymentOptions from "@/components/Package/PaymentOptions";
import React from "react";

const Page = () => {
  const price = 200000;
  return (
    <div className="pt-24 oswald-text min-h-screen">
      <div className="text-black px-24 py-6 mt-2 font-extrabold text-3xl opacity-85">
        Package Detail
      </div>
      <div className="flex gap-28 px-24 text-black w-full">
        <div className="w-[75%] mb-2">
          <div className=" font-semibold opacity-85 w-full border-b-[1px] border-slate-500 pb-2">
            1 Course in Cart
          </div>
          <div className="mt-8 w-full flex flex-col gap-8">
            <PackageDetail price={price} />
            <PackageDetail price={price} />
            <PackageDetail price={price} />
          </div>
        </div>
        <div className="w-[25%]">
          <h1 className="font-bold text-lg opacity-80">Total: </h1>
          <div className="font-extrabold text-3xl align-baseline">
            {Intl.NumberFormat("en-US", {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }).format(price)}
            <span className="pl-2 underline">đ</span>
          </div>
          <h1 className="text-lg font-bold border-t-[1px] border-black mt-4 pt-4 opacity-80">
            Promotions/Discounts
          </h1>
          <div className="flex mt-4">
            <input
              type="text"
              placeholder="Enter coupon"
              className="border border-black  py-2 px-4 text-base font-medium"
            />
            <div className="button bg-purple-600 text-white text-base font-semibold py-2 px-4 hover:opacity-80 hover:cursor-pointer">
              Apply
            </div>
          </div>
          <h1 className="text-lg font-bold  mt-4 pt-4 opacity-80">
            Payment method
          </h1>
          <PaymentOptions />
          <button className="w-full button py-4 my-12 text-white bg-purple-600">
            Checkout
          </button>
        </div>
      </div>

      <div className="text-black px-24 py-6 mt-10 font-extrabold text-3xl opacity-85">
        You might also like
      </div>
      <div className="h-screen"></div>
    </div>
  );
};

export default Page;
