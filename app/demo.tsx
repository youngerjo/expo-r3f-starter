import { Suspense } from 'react'
import { Asset } from 'expo-asset'
import { Canvas, useFrame } from '@lib/fiber'
import { Environment, useGLTF, type GLTF } from '@lib/drei'
import { EffectComposer, Bloom } from '@lib/postprocessing'

const asset = Asset.fromModule(require('@assets/models/iphone.glb'))

function IPhone(props: any) {
  const { scene } = useGLTF(asset.uri) as GLTF

  useFrame(() => {
    scene.rotation.y += 0.01
  })

  return <primitive {...props} object={scene} />
}

export default function Page() {
  return (
    <Canvas gl={{ physicallyCorrectLights: true }} camera={{ position: [-6, 0, 16], fov: 36 }}>
      <color attach="background" args={[0xe2f4df]} />
      <ambientLight />
      <directionalLight intensity={1.1} position={[0.5, 0, 0.866]} />
      <directionalLight intensity={0.8} position={[-6, 2, 2]} />

      <Suspense>
        <Environment preset="park" />
        <IPhone />
      </Suspense>

      <EffectComposer>
        <Bloom intensity={1.5} luminanceThreshold={0.9} />
      </EffectComposer>
    </Canvas>
  )
}
