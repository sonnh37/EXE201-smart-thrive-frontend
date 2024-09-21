import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { TextureLoader, MeshStandardMaterial } from "three"; // Import the necessary classes
import { useLoader } from "@react-three/fiber"; // Hook to load textures
import * as THREE from "three";
export function WhaleModel(props) {
  const group = useRef();
  const { nodes, animations } = useGLTF(
    "/BlendModel/WhaleModel/8d653c6928394d418cab272d4369be56_Textured.gltf"
  );
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    if (actions) {
      actions["A_breathe1"].reset().fadeIn(0.5).play();
      actions["A_breathe1"].clampWhenFinished = true;
    }
  }, [actions]);

  const colorMap = useLoader(
    TextureLoader,
    "/BlendModel/WhaleModel/b055d3f8983b4c1c991059b3520175ae_RGB_Killer_whale_AM_color.png"
  );
  const normalMap = useLoader(
    TextureLoader,
    "/BlendModel/WhaleModel/e2a0b19e20034a848fc0eee3e1ad0cb6_N_Killer_whale_AM_normal.png"
  );
  const roughnessMap = useLoader(
    TextureLoader,
    "/BlendModel/WhaleModel/b101e68be1e14c42b62b9830c8b46d2b_R_Killer_whale_AM_rough.png"
  );
  const specularMap = useLoader(
    TextureLoader,
    "/BlendModel/WhaleModel/14ee70df15424a38984304fbd47c45b5_RGB_Killer_whale_AM_spec.png"
  );
  colorMap.wrapS = THREE.RepeatWrapping;
  colorMap.wrapT = THREE.RepeatWrapping;
  colorMap.repeat.set(1, 1);
  colorMap.flipY = false;
  // Create a custom material using the loaded textures
  const customMaterial = new MeshStandardMaterial({
    map: colorMap, // Apply the color map
    normalMap: normalMap, // Apply the normal map
    roughnessMap: roughnessMap, // Apply the roughness map
    metalnessMap: specularMap, // Apply the specular map
    roughness: 0.5, // Adjust roughness if needed
    metalness: 0.5, // Adjust metalness if needed
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <group name="5ea6ba4e7d8744c698d68650aec0ac10fbx" scale={0.01}>
          <group name="RootNode">
            <group name="dolphin" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
              <group name="Skeleton">
                <primitive object={nodes.Root_01} />
              </group>
            </group>
          </group>
        </group>
        <skinnedMesh
          name="0"
          geometry={nodes["0"].geometry}
          material={customMaterial} // Apply the custom material
          skeleton={nodes["0"].skeleton}
          morphTargetDictionary={nodes["0"].morphTargetDictionary}
          morphTargetInfluences={nodes["0"].morphTargetInfluences}
        />
        <skinnedMesh
          name="1"
          geometry={nodes["1"].geometry}
          material={customMaterial} // Apply the custom material
          skeleton={nodes["1"].skeleton}
          morphTargetDictionary={nodes["1"].morphTargetDictionary}
          morphTargetInfluences={nodes["1"].morphTargetInfluences}
        />
        <skinnedMesh
          name="2"
          geometry={nodes["2"].geometry}
          material={customMaterial} // Apply the custom material
          skeleton={nodes["2"].skeleton}
          morphTargetDictionary={nodes["2"].morphTargetDictionary}
          morphTargetInfluences={nodes["2"].morphTargetInfluences}
        />
        <skinnedMesh
          name="3"
          geometry={nodes["3"].geometry}
          material={customMaterial} // Apply the custom material
          skeleton={nodes["3"].skeleton}
          morphTargetDictionary={nodes["3"].morphTargetDictionary}
          morphTargetInfluences={nodes["3"].morphTargetInfluences}
        />
      </group>
    </group>
  );
}

useGLTF.preload(
  "/BlendModel/WhaleModel/8d653c6928394d418cab272d4369be56_Textured.gltf"
);
