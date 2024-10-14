import React from "react";
import Rating from "../ui/Rating";
import Image from "next/image";

const PackageDetail = ({
                           price,
                           name,
                           descibe,
                           image,
                       }: {
    price: number | undefined;
    name: string | undefined;
    descibe: string | undefined;
    image: string | undefined;
}) => {
    console.log(price, name, descibe, image);
    return (
        <div className="flex mt-4 gap-8">
            <div className="flex gap-4 w-[75%] justify-between">
                <Image
                    src={image ?? "/images.png"}
                    width={80}
                    height={80}
                    alt="course_img"
                />
                <div>
                    <p className="font-semibold w-[65%]">{name}</p>
                    <p className="font-medium text-sm">{descibe}</p>
                    <Rating color="null"/>
                </div>
            </div>
            <div className="w-[10%] flex justify-center">
                <a className="text-purple-700 text-sm hover:text-black">Remove</a>
            </div>
            <div className="w-[15%] flex justify-center">
                <div className="font-semibold">
                    {price != undefined
                        ? Intl.NumberFormat("vi-VI", {
                            style: "currency",
                            currency: "VND",
                        }).format(price)
                        : "Package problem"}
                </div>
            </div>
        </div>
    );
};

export default PackageDetail;
