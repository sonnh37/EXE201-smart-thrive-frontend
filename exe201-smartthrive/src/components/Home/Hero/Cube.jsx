"use client";
import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import vertexShaderPars from "../../../assets/shaders/vertex_pars.glsl";
import vertexShaderMain from "../../../assets/shaders/vertex_main.glsl";
import fragmentShaderMain from "../../../assets/shaders/fragment_main.glsl";
import fragmentShaderPars from "../../../assets/shaders/fragment_pars.glsl";
import * as THREE from "three";
import { Environment, OrbitControls, useHelper } from "@react-three/drei";
const Cube = () => {
  const { camera } = useThree();
  useHelper(camera, THREE.CameraHelper, 1, "red");
  const mesh = useRef();
  useEffect(() => {
    camera.position.set(4, 0, 0);
    // camera.lookAt(0, 0, 2);
  }, [camera]);
  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
    }),
    []
  );
  useFrame((state) => {
    if (mesh.current.material.userData.shader) {
      const timestamp = state.clock.getElapsedTime() / 10;

      mesh.current.material.userData.shader.uniforms.u_time.value = timestamp;
    }
  });
  return (
    <group position={[0, 0, 0]}>
      <Environment preset="city" />
      <OrbitControls
        target={[0, 0, 0]}
        enableDamping={false}
        enableZoom={false}
        // enableRotate={false}
        rotateSpeed={0.1}
        autoRotate
        enablePan={false}
      />
      <ambientLight color={0xe6e8f7} intensity={0.5} />

      <mesh ref={mesh} position={[0, 0, 0]} scale={1.3}>
        <icosahedronGeometry args={[1, 200]} />
        <meshStandardMaterial
          metalness={0.3}
          roughness={0.3}
          color="white"
          onBeforeCompile={(shader) => {
            mesh.current.material.userData = { shader: shader };
            shader.uniforms.u_time = uniforms.u_time;
            const parsVertexString = /* glsl */ `#include <displacementmap_pars_vertex>`;
            shader.vertexShader = shader.vertexShader.replace(
              parsVertexString,
              parsVertexString + "\n" + vertexShaderPars
            );

            const mainVertexString = /* glsl */ `#include <displacementmap_vertex>`;
            shader.vertexShader = shader.vertexShader.replace(
              mainVertexString,
              mainVertexString + "\n" + vertexShaderMain
            );

            const mainFragmentString = /* glsl */ `#include <normal_fragment_maps>`;
            shader.fragmentShader = shader.fragmentShader.replace(
              mainFragmentString,
              mainFragmentString + "\n" + fragmentShaderMain
            );

            const parsFragmentString = /* glsl */ `#include <bumpmap_pars_fragment>`;
            shader.fragmentShader = shader.fragmentShader.replace(
              parsFragmentString,
              parsFragmentString + "\n" + fragmentShaderPars
            );
          }}
        />
      </mesh>
    </group>
  );
};

export default Cube;
