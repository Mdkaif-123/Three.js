/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { OrbitControls, useGLTF } from "@react-three/drei"
import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { AudioLoader } from "three";
import useSound from 'use-sound'
import mySound from '../../public/sound/sound.mp3' // Your sound file path here

function About() {

  return (
    <section className="w-full h-screen ">
        <h2 className="text-6xl font-bold font-sans pl-5 md:pl-8  text-pink-400">Welcome</h2>
        <p className="text-4xl pl-8 ">to the world of <span className="text-blue-400 font-semibold font-sans">THREE.JS</span></p>
          <HeroCanvas />
    </section>
  )
}

const HeroMesh =()=>{
  const hero = useGLTF('./hero/scene.gltf');
  const [playSound] = useSound(mySound)
  return(
    <mesh 
    position={[4,-7,1]}
    onClick={()=>playSound()}
    >
    <hemisphereLight intensity={5} />
    <pointLight position={[3,4,5]} intensity={1} />
    <primitive object={hero.scene}  />
  </mesh>
  )
}

const HeroCanvas =()=>{
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{position: [15,8,5], fov: 25}}
      gl={{preserveDrawingBuffer: true}}
      autoFocus
    >
      {/* <Suspense
      fallback={<p>Loading..</p>}
      > */}
          <HeroMesh />
          <OrbitControls enableZoom={false} />
    </Canvas>
  )
}
export default About
