import {Suspense, useEffect, useState} from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, Preload, useGLTF} from '@react-three/drei'
import CanvasLoader from '../Loader.jsx'

const Computers = ({isMobile}) => {
  //u can use more 3d models from https://sketchfab.com/3d-models
  //just download the gltf file and add it to the public folder and change the path below
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={1.15} groundColor='black' />
      <pointLight intensity={2.5} />
      <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
      <primitive object={computer.scene} scale={isMobile ? 0.7 : 0.75} position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]} rotation={[-0.01, -0.2, -0.1]} /> 

    </mesh>
  )
}

const ComputerCanvas = () => {

  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)')
    setIsMobile(mediaQuery.matches)

    // to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }


    // a listener for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange)

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{position: [20, 3, 5], fov: 25}}
      gl={{preserveDrawingBuffer: true}}
    >
      {/* a loader from react */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputerCanvas