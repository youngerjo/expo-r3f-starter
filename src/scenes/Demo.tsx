import { Suspense } from 'react'
import { Canvas } from '@fiber'
import { Environment } from '@drei'
import { EffectComposer, Bloom } from '@postprocessing'
import IPhone from '@components/IPhone'

export default function App() {
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
