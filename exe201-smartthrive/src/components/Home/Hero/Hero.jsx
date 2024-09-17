import { Canvas } from "@react-three/fiber";
import React from "react";
import Cube from "./Cube";
import HeroText from "./HeroText";
import { useRef, useLayoutEffect, useEffect } from "react";
import { gsap } from "gsap-trial";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import ScrollSmoother from "gsap-trial/ScrollSmoother";
const Hero = () => {
  return (
    <section className="w-full h-screen ">
      <div className="flex">
        <div className="w-screen h-[100vh]">
          <HeroText />
        </div>
        <div className="w-screen h-[100vh]">
          <Canvas shadows>
            <Cube />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Hero;
