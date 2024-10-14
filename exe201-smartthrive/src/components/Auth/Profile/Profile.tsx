import {User} from "@/services/Model/User";
import React, {useEffect, useState} from "react";
import UserService from "@/services/auth-service";

const Profile = () => {

    const [user, setUser] = useState<User>();
    useEffect(() => {
        const fetchApi = async () => {
            const result = await UserService.getById(
                localStorage.getItem("userId")!.toString()!
            );

            setUser(result.results);
        };
        fetchApi();
    }, []);

    return (
        <>
            <section className="relative block h-[200px] ">
                <div
                    className="absolute top-0 w-full h-full bg-center bg-cover"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80')",
                    }}
                >
          <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
          ></span>
                </div>
            </section>

            <section className="relative py-14 bg-blueGray-200 ">
                <div className="container mx-auto px-14">
                    <div
                        className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-40 "> {/* Giảm giá trị mt-64 thành mt-40 */}
                        <div className="px-4">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                    <div className="relative">
                                        <img
                                            alt="..."
                                            src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                                            className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-20 lg:-ml-16 max-w-[150px]"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-20"> {/* Tăng khoảng cách top lên để có thêm khoảng trống */}
                                <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                    {user?.lastName} {user?.firstName}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Profile;
