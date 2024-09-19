import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Cylinder } from "@react-three/drei";
import * as THREE from "three";

function createCanvas(children, color) {
  const fontSize = window.innerWidth / 2.7;
  const canvas = document.createElement("canvas");
  canvas.width = 4096;
  canvas.height = 4096;
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.font = `bold ${fontSize}px -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif`;
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillStyle = color;
  context.fillText(children, 2048, canvas.height / 2);
  return canvas;
}

const TextRing = ({ children }) => {
  const canvas = useMemo(() => createCanvas(children, "black"), [children]);

  const texture = useRef();

  useFrame(({ clock }) => {
    texture.current.offset.x = clock.getElapsedTime() / 4;
  });

  const cylArgs = [2, 2, 2, 64, 1, true];

  return (
    <group rotation-y={Math.PI / 4} scale={[1, 1, 1]}>
      <Cylinder args={cylArgs}>
        <meshBasicMaterial transparent={true} side={THREE.DoubleSide}>
          <canvasTexture
            attach="map"
            repeat={[8, 1]}
            image={canvas}
            premultiplyAlpha
            ref={texture}
            wrapS={THREE.RepeatWrapping}
            wrapT={THREE.RepeatWrapping}
            transparent={true}
            onUpdate={(s) => (s.needsUpdate = true)}
          />
        </meshBasicMaterial>
      </Cylinder>
    </group>
  );
};

export default TextRing;
