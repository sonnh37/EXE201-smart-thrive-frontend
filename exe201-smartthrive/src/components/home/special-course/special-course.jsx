import {Canvas} from "@react-three/fiber";
import Image from "next/image";
import React from "react";
import {BookModel} from "@/assets/models/BookModel";
import {Environment, OrbitControls} from "@react-three/drei";

const SpecialCourse = () => {
    return (
        <section className="text-black w-screen h-screen pt-16  mt-16 mx-16 flex">
            <div className="w-[30vw]">
                <h1
                    id="specialCourseTitle"
                    className="oswald-text font-bold  mb-4 text-[3.2em] text-black leading-tight w-full "
                >
                    Subscribe <br/> today.
                </h1>
                <p className="oswald-text">SmartThrive. Learning place.</p>
                <p className="oswald-text">
                    The learning place make you learning more comfort
                </p>
                <br/>
                <p className="oswald-text">Subscribe for a neverending cup.</p>
                <button
                    className="mt-8 px-6 py-3 rounded-full uppercase font-bold bg-transparent text-black border-2 border-black hover:bg-black hover:text-white transition duration-300">
                    Explore All Course Now.
                </button>
            </div>
            <div className="w-[65vw] flex">
                <div className="w-[30%] h-[75vh] mx-4 bg-gradient-to-r from-red-100 to-orange-200 relative rounded-3xl">
                    <div className="absolute top-4 left-0">
                        <Canvas className=" h-[90%]">
                            <mesh scale={5}>
                                <Environment preset="city"/>
                                <ambientLight color={0xe6e8f7} intensity={0.5}/>
                                <OrbitControls
                                    target={[1, 0, 0]}
                                    enableDamping={false}
                                    enableZoom={false}
                                    enableRotate={true}
                                    minPolarAngle={1}
                                    maxPolarAngle={1}
                                    rotateSpeed={0.1}
                                    autoRotate
                                    autoRotateSpeed={1.5}
                                    enablePan={false}
                                />
                                <BookModel/>
                            </mesh>
                        </Canvas>
                        <div>
                            <div className="courseInfo oswald-text mx-4">
                                <h2 className="font-extrabold text-[1.1rem]">
                                    Math from Quan Teacher.
                                </h2>
                                <p className="text-[0.9rem] font-extralight mt-4">
                                    Explore the best of our single origin roasts; each delivery
                                    will be a different stand out coffee hand picked by our
                                    Roastery team for you to enjoy.
                                </p>
                                <p className="text-[0.9rem] font-semibold mt-2">300.000vnd</p>
                                <div className="line w-[95%] ml-1 h-[1px] mt-4 bg-black "></div>
                                <p className="font-semibold text-[0.9rem] mt-1">Learn now.</p>
                                <div className="mt-5 flex">
                                    <div className="w-5 h-5 bg-[#CAB196] flex justify-center items-center rounded-full">
                                        <Image src="/icons8-check-50.png" width={14} height={14}/>
                                    </div>
                                    <p className="ml-4 text-[0.9rem] leading-5">
                                        Support online method.
                                    </p>
                                </div>
                                <div className="mt-4 flex">
                                    <div className="w-5 h-5 bg-[#CAB196] flex justify-center items-center rounded-full">
                                        <Image src="/icons8-check-50.png" width={14} height={14}/>
                                    </div>
                                    <p className="ml-4 text-[0.9rem] leading-5">
                                        Support from teacher.
                                    </p>
                                </div>
                                <div className="mt-4 flex">
                                    <div className="w-5 h-5 bg-[#CAB196] flex justify-center items-center rounded-full">
                                        <Image src="/icons8-check-50.png" width={14} height={14}/>
                                    </div>
                                    <p className="ml-4 text-[0.9rem] leading-5">
                                        Enhance performence.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[30%] h-[75vh] mx-4 bg-gradient-to-r from-red-200 to-red-300 relative rounded-3xl">
                    <div className="absolute top-4 left-0">
                        <Canvas className=" h-[90%]">
                            <mesh scale={5}>
                                <Environment preset="city"/>
                                <ambientLight color={0xe6e8f7} intensity={0.5}/>
                                <OrbitControls
                                    target={[1, 0, 0]}
                                    enableDamping={false}
                                    enableZoom={false}
                                    enableRotate={true}
                                    minPolarAngle={1}
                                    maxPolarAngle={1}
                                    rotateSpeed={0.1}
                                    autoRotate
                                    autoRotateSpeed={1.5}
                                    enablePan={false}
                                />
                                <BookModel/>
                            </mesh>
                        </Canvas>
                        <div className="text-white">
                            <div className="courseInfo oswald-text mx-4">
                                <h2 className="font-extrabold text-[1.1rem]">
                                    Math from Quan Teacher.
                                </h2>
                                <p className="text-[0.9rem] font-extralight mt-4">
                                    Explore the best of our single origin roasts; each delivery
                                    will be a different stand out coffee hand picked by our
                                    Roastery team for you to enjoy.
                                </p>
                                <p className="text-[0.9rem] font-semibold mt-2">300.000vnd</p>
                                <div className="line w-[95%] ml-1 h-[1px] mt-4 bg-white "></div>
                                <p className="font-semibold text-[0.9rem] mt-1">Learn now.</p>
                                <div className="mt-5 flex">
                                    <div className="w-5 h-5 bg-[#BB8D88] flex justify-center items-center rounded-full">
                                        <Image src="/icons8-check-50.png" width={14} height={14}/>
                                    </div>
                                    <p className="ml-4 text-[0.9rem] leading-5">
                                        Support online method.
                                    </p>
                                </div>
                                <div className="mt-4 flex">
                                    <div className="w-5 h-5 bg-[#BB8D88] flex justify-center items-center rounded-full">
                                        <Image src="/icons8-check-50.png" width={14} height={14}/>
                                    </div>
                                    <p className="ml-4 text-[0.9rem] leading-5">
                                        Support from teacher.
                                    </p>
                                </div>
                                <div className="mt-4 flex">
                                    <div className="w-5 h-5 bg-[#BB8D88] flex justify-center items-center rounded-full">
                                        <Image src="/icons8-check-50.png" width={14} height={14}/>
                                    </div>
                                    <p className="ml-4 text-[0.9rem] leading-5">
                                        Enhance performence.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="w-[30%] h-[75vh] mx-4 bg-gradient-to-r from-amber-200 to-amber-300 relative rounded-3xl">
                    <div className="absolute top-4 left-0">
                        <Canvas className=" h-[90%]">
                            <mesh scale={5}>
                                <Environment preset="city"/>
                                <ambientLight color={0xe6e8f7} intensity={0.5}/>
                                <OrbitControls
                                    target={[1, 0, 0]}
                                    enableDamping={false}
                                    enableZoom={false}
                                    enableRotate={true}
                                    minPolarAngle={1}
                                    maxPolarAngle={1}
                                    rotateSpeed={0.1}
                                    autoRotate
                                    autoRotateSpeed={1.5}
                                    enablePan={false}
                                />
                                <BookModel/>
                            </mesh>
                        </Canvas>
                        <div>
                            <div className="courseInfo oswald-text mx-4">
                                <h2 className="font-extrabold text-[1.1rem]">
                                    Math from Quan Teacher.
                                </h2>
                                <p className="text-[0.9rem] font-extralight mt-4">
                                    Explore the best of our single origin roasts; each delivery
                                    will be a different stand out coffee hand picked by our
                                    Roastery team for you to enjoy.
                                </p>
                                <p className="text-[0.9rem] font-semibold mt-2">300.000vnd</p>
                                <div className="line w-[95%] ml-1 h-[1px] mt-4 bg-black "></div>
                                <p className="font-semibold text-[0.9rem] mt-1">Learn now.</p>
                                <div className="mt-5 flex">
                                    <div className="w-5 h-5 bg-[#CAB196] flex justify-center items-center rounded-full">
                                        <Image src="/icons8-check-50.png" width={14} height={14}/>
                                    </div>
                                    <p className="ml-4 text-[0.9rem] leading-5">
                                        Support online method.
                                    </p>
                                </div>
                                <div className="mt-4 flex">
                                    <div className="w-5 h-5 bg-[#CAB196] flex justify-center items-center rounded-full">
                                        <Image src="/icons8-check-50.png" width={14} height={14}/>
                                    </div>
                                    <p className="ml-4 text-[0.9rem] leading-5">
                                        Support from teacher.
                                    </p>
                                </div>
                                <div className="mt-4 flex">
                                    <div className="w-5 h-5 bg-[#CAB196] flex justify-center items-center rounded-full">
                                        <Image src="/icons8-check-50.png" width={14} height={14}/>
                                    </div>
                                    <p className="ml-4 text-[0.9rem] leading-5">
                                        Enhance performence.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpecialCourse;
