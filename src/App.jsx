/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { MeshWobbleMaterial, OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import About from './sections/about'
import End from './sections/end'
function App() {

  return (
    <main >
    <section className='w-full h-screen flex flex-col md:flex-row justify-between items-center '>
      <div className="flex justify-center items-center pl-10 w-1/2">
        <h1 className='text-6xl my-14 md:text-9xl font-bold font-sans'>Hello..</h1>
      </div>  
      <Canvas>
      <ambientLight intensity={0.1} />
      <directionalLight color={"white"} position={[0,0,1]} />

      <group position={[0,0,0]}>
      <Cube position={[3,0,1]} size={[1,1,1]} color="lightblue" />
      {/* <Cube position={[3,0,-1]} size={[2,2,2]} color="hotpink" /> */}
      {/* <Cube position={[-2,1,0]} size={[2,2,2]} color="orange" />
      <Cube position={[2,1,0]} size={[2,2,2]} color="orange" /> */}
        {/* <Sphere /> */}
      </group>
      <AnimatedTorusKnot args={[2,2,2]} />
  </Canvas>
  </section>
  <About />
  <End />
  </main>
  )
}

// eslint-disable-next-line no-unused-vars
const Cube = ({size, position, color})=>{

  const [hovered, isHovered] = useState(false)
  const [onClicked, isOnClicked] = useState(false)
  const ref = useRef()  

  useFrame((state,delta)=>{
      ref.current.rotation.x += delta
      ref.current.rotation.y += delta
      ref.current.position.y =Math.sin(state.clock.elapsedTime) * 1.4
  })
  return (
    <mesh 
      position={position}
      ref={ref}
      onPointerEnter={(e)=> (e.stopPropagation(), isHovered(true))}
      onPointerLeave={()=> isHovered(false)}
      onClick={()=> isOnClicked(!onClicked)}
      scale={onClicked ? 0.5: 1.2}
      >
    <boxGeometry args={size}  />
    <meshStandardMaterial wireframe={true} color={hovered ?"hotpink":color} />
    </mesh>
  )
}


const Sphere = ()=>{
  const ref = useRef()
  // useFrame((state,_delta)=>{
  //   ref.current.position.y += Math.sin(state.clock.elapsedTime) + 0.3
  // })
  return (
    <mesh position={[3,0,0]} ref={ref} >
        <sphereGeometry color={"hotpink"}  />
        <meshStandardMaterial  />
    </mesh>
  )
}

const AnimatedTorusKnot = ({args})=>{
  const ref = useRef()

  useFrame((state,delta)=>{
    ref.current.rotation.x +=delta
    ref.current.rotation.y +=delta
    ref.current.position.z = Math.sin(state.clock.elapsedTime) * 1.5
  })
  return (
    <mesh ref={ref} >
    <torusKnotGeometry args={[1.3, 0.4, 300, 20]} />
    <OrbitControls enableZoom={false} />
    <meshNormalMaterial  opacity={1} args={args} />
    {/* <MeshWobbleMaterial  /> */}
</mesh>
  )
}

export default App
