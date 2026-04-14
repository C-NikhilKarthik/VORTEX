import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function WavyGrid() {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  // Create a large plane that we will animate into waves
  const gridSize = 80
  const segments = 80

  useFrame((state) => {
    if (!meshRef.current) return
    const time = state.clock.getElapsedTime() * 0.4 // speed
    const geometry = meshRef.current.geometry
    const position = geometry.attributes.position

    // Math function to manipulate Y vertices of the plane based on X and Z
    for (let i = 0; i < position.count; i++) {
       const x = position.getX(i)
       const z = position.getZ(i)
       // Intersecting sine waves to create an elegant geometric terrain
       const y = Math.sin(x * 0.2 + time) * Math.cos(z * 0.2 + time) * 2.0 
                  + Math.sin(x * 0.05 - time) * 1.5;
       position.setY(i, y)
    }
    position.needsUpdate = true
  })

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2.2, 0, 0]} position={[0, -3, -10]}>
      <planeGeometry args={[gridSize, gridSize, segments, segments]} />
      <meshBasicMaterial 
        color="#a1a1aa" 
        wireframe={true} 
        transparent={true}
        opacity={0.3} 
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

function FloatingMathObject() {
   const groupRef = useRef<THREE.Group>(null!)

   useFrame((state) => {
       if (!groupRef.current) return
       const time = state.clock.getElapsedTime()
       groupRef.current.rotation.x = time * 0.1
       groupRef.current.rotation.y = time * 0.15
       groupRef.current.position.y = Math.sin(time * 0.5) * 0.5 + 2
   })

   return (
       <group ref={groupRef} position={[6, 2, -5]}>
           <mesh>
               <icosahedronGeometry args={[2, 1]} />
               <meshBasicMaterial color="#f97316" wireframe={true} transparent={true} opacity={0.5} />
           </mesh>
       </group>
   )
}

export default function WebGLBackground() {
  return (
    <div className="absolute inset-0 z-0 bg-transparent overflow-hidden pointer-events-none">
      
      {/* Grok-style ambient core glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[50%] bg-zinc-800/30 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
      
      <Canvas camera={{ position: [0, 4, 15], fov: 60 }}>
        {/* Subtle fog fading to black to obscure the edges of the infinite grid */}
        <fog attach="fog" args={['#000', 8, 40]} />
        <WavyGrid />
        <FloatingMathObject />
      </Canvas>
      
      {/* Soft gradient bottom masking so it doesn't cover the whole screen bottom */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black via-black/40 to-transparent pointer-events-none" />
    </div>
  )
}
