"use client";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";

const PaymentOptions = () => {
  const [selectedOption, setSelectedOption] = useState("radio_1");

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const e = options.find((x) => x.id == event.target.id);
    if (e?.enable) setSelectedOption(event.target.id);
  };

  const options = [
    {
      id: "radio_1",
      label: "VietQR",
      img: "/vietQR.png",
      enable: true,
      describe: "Thanh toán với mã QR",
    },
    {
      id: "radio_2",
      label: "Medium",
      img: "/vietQR.png",
      enable: false,
      describe: "Thanh toán với mã QR",
    },
    {
      id: "radio_3",
      label: "Big",
      img: "/vietQR.png",
      enable: false,
      describe: "Thanh toán với mã QR",
    },
  ];

  return (
    <div className="flex items-center justify-between w-full pt-4">
      <form className="grid grid-cols-3 gap-2 w-full max-w-full">
        {options.map((option) => (
          <div
            key={option.id}
            className={`${option.enable ? "" : "opacity-55"}`}
          >
            <input
              disabled={!option.enable}
              className="hidden"
              id={option.id}
              type="radio"
              name="radio"
              checked={selectedOption === option.id}
              onChange={handleOptionChange}
            />
            <label
              className={`flex flex-col p-4 border-2 ${
                selectedOption === option.id
                  ? "border-purple-600"
                  : "border-gray-400"
              } cursor-pointer`}
              htmlFor={option.id}
            >
              <span className="text-xs font-semibold uppercase text-center">
                {option.label}
              </span>
              <Image
                src={option.img}
                width={100}
                height={100}
                alt={option.label}
              />
              <ul className="text-xs mt-2">
                <li>{option.describe}</li>
                <li
                  className={`mt-2 text-center font-semibold py-1 rounded-full ${
                    option.enable ? "bg-green-600" : "bg-purple-600"
                  }`}
                >
                  {option.enable ? "Khả dụng" : "Bảo trì"}
                </li>
              </ul>
            </label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default PaymentOptions;
