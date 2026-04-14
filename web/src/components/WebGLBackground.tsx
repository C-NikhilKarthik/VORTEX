import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function PrecisionGrid() {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  const gridSize = 80
  const segments = 80

  useFrame((state) => {
    if (!meshRef.current) return
    const time = state.clock.getElapsedTime() * 0.2 // Very slow, calculated movement
    const geometry = meshRef.current.geometry
    const position = geometry.attributes.position

    for (let i = 0; i < position.count; i++) {
       const x = position.getX(i)
       const z = position.getZ(i)
       // Precise, subtle mathematical undulation
       const y = Math.sin(x * 0.15 + time) * Math.cos(z * 0.15 + time) * 1.5 
                  + Math.sin(x * 0.05 - time) * 0.5;
       position.setY(i, y)
    }
    position.needsUpdate = true
  })

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2.2, 0, 0]} position={[0, -4, -10]}>
      <planeGeometry args={[gridSize, gridSize, segments, segments]} />
      {/* Stark monochrome wireframe */}
      <meshBasicMaterial 
        color="#ffffff" 
        wireframe={true} 
        transparent={true}
        opacity={0.15} 
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

export default function WebGLBackground() {
  return (
    <div className="absolute inset-0 z-0 bg-transparent overflow-hidden pointer-events-none">
      
      {/* Absolute minimalist ambient core glow - White instead of Orange */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[40%] bg-zinc-400/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
      
      <Canvas camera={{ position: [0, 4, 15], fov: 60 }}>
        {/* Subtle fog fading to black rapidly to keep focus centralized */}
        <fog attach="fog" args={['#000', 8, 30]} />
        <PrecisionGrid />
      </Canvas>
      
      {/* Soft gradient masking */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black via-black/40 to-transparent pointer-events-none" />
    </div>
  )
}
