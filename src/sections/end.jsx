/* eslint-disable react/no-unknown-property */
import { OrbitControls, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

function End() {
  return (
    <section className="w-full h-screen  my-24 py-11">
        <h2 className="text-7xl my-9 md:text-[10rem] pl-5 md:pl-8 font-bold font-sans text-green-300 text-center">THE END</h2>
        <GateCanvas />
    </section>
  )
}

const GateMesh= ()=>{

  const gate = useGLTF('./gate/scene.gltf');
  return(
    <mesh
    position={[1,-1.7,1]}
    >
      <hemisphereLight intensity={5} /> 
      <pointLight position={[2,-3,5]} />
        <primitive object={gate.scene} />
    </mesh>
  )
}

const GateCanvas =()=>{
  return (
    <Canvas 
    frameloop="demand"
    shadows
    camera={{position: [8,10,5], fov: 25}}
    gl={{preserveDrawingBuffer: true}}
    autoFocus
    className="!w-full !h-[150%]"
    >
      <GateMesh />
      <OrbitControls enableZoom={false} minPolarAngle={Math.PI /2} maxPolarAngle={Math.PI/2} />
    </Canvas>
  )
}

export default End
