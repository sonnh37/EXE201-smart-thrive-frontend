import {Canvas} from "@react-three/fiber";
import React, {Suspense} from "react";
import HeroText from "./hero-text";
import {WhaleModel} from "../../../assets/models/WhaleModel";
import {Environment, OrbitControls} from "@react-three/drei";
import TextRing from "@/components/text-ring";

const Hero = () => {
    return (
        <section className="w-full h-screen relative">
            <div className="">
                <div className="w-screen h-[100vh] absolute">
                    <HeroText/>
                </div>
                <div className="w-screen h-[100vh]">
                    <Canvas shadows>
                        <Suspense>
                            <Environment preset="city"/>
                            <OrbitControls
                                position0={[0, 0, 0]}
                                target={[0, 0, 0]}
                                rotateSpeed={0.1}
                                enableDamping={false}
                                enableZoom={false}
                                enableRotate={false}
                                enablePan={false}
                            />
                            <ambientLight color={0xe6e8f7} intensity={1}/>
                            <mesh position={[2, 0, 1]} rotation={[0, 0, 1]}>
                                <TextRing>SMARTTHRIVE </TextRing>
                            </mesh>
                            <mesh scale={1} rotation={[0, -1.3, 0]} position={[3, 0, 0]}>
                                <WhaleModel/>
                            </mesh>
                        </Suspense>
                    </Canvas>
                </div>
            </div>
        </section>
    );
};

export default Hero;
