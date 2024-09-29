"use client";
import PackageDetail from "@/components/Package/PackageDetail";
import PaymentOptions from "@/components/Package/PaymentOptions";
import { StudentXPackage } from "@/services/Model/StudentXPackage";
import OrderService from "@/services/order-service";
import PackageXStudentService from "@/services/packageXstudent-service";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const Page = () => {
  const [studentXPackage, setStudentXPackage] = useState<StudentXPackage[]>([]);
  const [selectedPackage, setSelectedPackage] = useState<StudentXPackage>();
  const { push } = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      const data = await PackageXStudentService.getByStudentId(
        localStorage.getItem("studentId")!.toString()
      );
      // console.log(data.results);
      setStudentXPackage(data.results);
      if (data.results != null) setSelectedPackage(data.results[0]);
    };
    fetchData();
  }, []);
  const handleCheckout = async () => {
    const result = await OrderService.createPayment({
      packageId: selectedPackage!.packageId!,
      description: "Thanh toán",
      paymentMethod: 0,
      status: 0,
      totalPrice: selectedPackage!.package!.totalPrice!,
      voucherId: null,
    });
    if (result.status == 200) {
      toast.success("Request payment success asd asdasdasd", {
        richColors: true,
      });
      push(result.data);
    } else {
      toast.error("Create payment fail", {
        richColors: true,
      });
    }
    console.log(result);
  };
  return (
    <div className="pt-24 oswald-text min-h-screen">
      <div className="text-black px-24 py-6 mt-2 font-extrabold text-3xl opacity-85">
        Package Detail
      </div>
      {selectedPackage != null && studentXPackage.length != 0 && (
        <div className="flex gap-28 px-24 text-black w-full">
          <div className="w-[75%] mb-2">
            <div className=" font-semibold opacity-85 w-full border-b-[1px] border-slate-500 pb-2 flex gap-4">
              <div>{studentXPackage.length} Course in Package</div>
              {studentXPackage.map((sp) => (
                <div
                  onClick={() => setSelectedPackage(sp)}
                  key={sp.package?.name}
                  className={`${
                    sp.package?.id == selectedPackage?.package?.id
                      ? "bg-black text-white "
                      : "text-black"
                  }  border-2 border-black px-4 py-1 rounded-full cursor-pointer`}
                >
                  {sp.package?.name}
                </div>
              ))}
            </div>
            <div className="mt-8 w-full flex flex-col gap-8">
              {selectedPackage?.package?.packageXCourses?.map((course) => (
                <PackageDetail
                  key={course.course?.name}
                  name={course.course!.name}
                  descibe={course.course?.description}
                  price={course.course?.price}
                  image={course.course?.backgroundImage}
                />
              ))}
            </div>
          </div>
          <div className="w-[25%]">
            <h1 className="font-bold text-lg opacity-80">Total: </h1>
            <div className="font-extrabold text-3xl align-baseline">
              {selectedPackage != null
                ? Intl.NumberFormat("en-US", {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }).format(selectedPackage!.package!.totalPrice!)
                : ""}
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
            <button
              onClick={() => {
                handleCheckout();
              }}
              className="w-full button py-4 my-12 text-white bg-purple-600"
            >
              Checkout
            </button>
          </div>
        </div>
      )}

      <div className="text-black px-24 py-6 mt-10 font-extrabold text-3xl opacity-85">
        You might also like
      </div>
      <div className="h-screen"></div>
    </div>
  );
};

export default Page;
