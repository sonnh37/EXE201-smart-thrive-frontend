import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Whale(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/BlendModel/Whale/whale.gltf"
  );
  const { actions, mixer } = useAnimations(animations, group);
  useEffect(() => {
    console.log(actions);

    if (actions) {
      actions["Swimming.001"]?.play(); // Replace with the name of your animation
    }
  }, [actions]);
  // Load textures
  useFrame((state, delta) => {
    mixer.update(delta / 7); // Ensure the animation mixer is updated per frame
  });
  const [colorMap, aoMap, normalMap] = useTexture([
    "/RGB_orca_dffs.png", // Replace with actual path
    "/R_orca_AO.png", // Replace with actual path
    "/N_orca_nmls.png", // Replace with actual path
  ]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <group
          name="Lamp004"
          position={[0, 7.4, 4.3]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={2.88}
        >
          <primitive object={nodes.spinesM_orca_Armature} />
        </group>
        <group name="orca_body003_0">
          <skinnedMesh
            name="orca_body003"
            geometry={nodes.orca_body003.geometry}
            material={materials.Orca_body}
            skeleton={nodes.orca_body003.skeleton}
          >
            {/* Applying textures to the material */}
            <meshStandardMaterial
              map={colorMap} // Diffuse / Color Map
              aoMap={aoMap} // Ambient Occlusion Map
              normalMap={normalMap} // Normal Map
            />
          </skinnedMesh>
          <skinnedMesh
            name="orca_body003_1"
            geometry={nodes.orca_body003_1.geometry}
            material={materials.Orca_body}
            skeleton={nodes.orca_body003_1.skeleton}
          >
            <meshStandardMaterial
              map={colorMap}
              aoMap={aoMap}
              normalMap={normalMap}
            />
          </skinnedMesh>
        </group>
        <group name="orca_contours_0">
          <skinnedMesh
            name="orca_contours"
            geometry={nodes.orca_contours.geometry}
            material={materials.Contours}
            skeleton={nodes.orca_contours.skeleton}
          >
            <meshStandardMaterial
              map={colorMap}
              aoMap={aoMap}
              normalMap={normalMap}
            />
          </skinnedMesh>
          <skinnedMesh
            name="orca_contours_1"
            geometry={nodes.orca_contours_1.geometry}
            material={materials.Contours}
            skeleton={nodes.orca_contours_1.skeleton}
          >
            <meshStandardMaterial
              map={colorMap}
              aoMap={aoMap}
              normalMap={normalMap}
            />
          </skinnedMesh>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/BlendModel/Whale/whale.gltf");
