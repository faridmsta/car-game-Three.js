import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function CarModel(props) {
  const { nodes, materials } = useGLTF('/car/Car.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Cube.geometry} material={materials.Body} />
      <mesh castShadow receiveShadow geometry={nodes.Cube_1.geometry} material={materials.Black} />
      <mesh castShadow receiveShadow geometry={nodes.Cube_2.geometry} material={materials.Window} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_3.geometry}
        material={materials.Bumpers}
      />
      <mesh castShadow receiveShadow geometry={nodes.Cube_4.geometry} material={materials.Lights} />
      <mesh castShadow receiveShadow geometry={nodes.Cube_5.geometry} material={materials.Bottom} />
      <mesh castShadow receiveShadow geometry={nodes.Cube_6.geometry} material={materials.Tires} />
      <mesh castShadow receiveShadow geometry={nodes.Cube_7.geometry} material={materials.Wheels} />
    </group>
  )
}

useGLTF.preload('/car/Car.gltf')