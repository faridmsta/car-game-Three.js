import React, { useRef } from 'react'
import CarModel from '../car/Car'
import { Box, OrbitControls, useKeyboardControls } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import { Controls } from '../../App'
import { useFrame } from '@react-three/fiber'

function Game() {

    const car = useRef()

    const isUpPressed = useKeyboardControls((state)=>state[Controls.forward])
    const isDownPressed = useKeyboardControls((state)=>state[Controls.back])

    useFrame(()=>{
        if(isUpPressed){
            console.log("Ireli");
            car.current.applyImpulse({ x: 0, y: 0, z: 10 })
            
        }
        if(isDownPressed){
            console.log("Ireli");
            car.current.applyImpulse({ x: 0, y: 0, z: -10 })
            
        }
    })

    return (
        <>
            <OrbitControls />
            <ambientLight />

            <RigidBody ref={car} restitution={1.2}>
                <CarModel  />
            </RigidBody>

            <RigidBody type='fixed' >
                <Box args={[30, 1, 30]}
                    position={[0, -1, 0]}
                >
                    <meshBasicMaterial color='orange' />
                </Box>
            </RigidBody>
        </>
    )
}

export default Game