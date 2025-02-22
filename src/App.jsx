import { Canvas } from '@react-three/fiber'
import './App.css'
import { Suspense, useMemo } from 'react'
import { Physics } from '@react-three/rapier'
import Game from './components/game/Game'
import { KeyboardControls } from '@react-three/drei'

export const Controls = {
  forward: 'forward',
  back: 'back',
  left:'left',
  right:'right',
}


function App() {

  const keyboardMap = useMemo(() => [
    { name: Controls.forward, keys: ["ArrowUp"] },
    { name: Controls.back, keys: ["ArrowDown"] },
    { name: Controls.left, keys: ["ArrowLeft"] },
    { name: Controls.right, keys: ["ArrowRight"] },
  ], [])




  return (
    <>
      <KeyboardControls map={keyboardMap} > 

        <Canvas>
          <Suspense>
            <Physics debug>
              <Game />
            </Physics>
          </Suspense>
        </Canvas>
      </KeyboardControls>
    </>
  )
}

export default App
